import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import Nav from '../../../shared/Nav';
import { Link } from 'react-router-dom';

const BookInfo = () => {
    let { isbn } = useParams();
    console.log(isbn)

    const [bookInfo, setBookInfo] = useState({})

    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(response => response.json())
        .then(result => {
            // console.log(result.items[0])
            setBookInfo(result.items[0])
        })
        .catch(error => console.log('error', error));
        // history.push("/main/mypage");
    },[])

    console.log('bookinfo- ',bookInfo)
    
    return(
        <>
        <Nav />
        {bookInfo.volumeInfo ? 
            <>
            <div className="book_info">
                <img src={bookInfo.volumeInfo.imageLinks.thumbnail}/>
                <h3>Title: {bookInfo.volumeInfo.title}</h3>
                <p>Author(s): {bookInfo.volumeInfo.authors.map((author,index)=>(
                    <p>{author}</p>)
                )}</p>
                <p>Publisher: {bookInfo.volumeInfo.publisher}</p>
                <p>Published Date: {bookInfo.volumeInfo.publishedDate}</p>
                <p>Short Description: {bookInfo.volumeInfo.description}</p>
                <p>Page Count: {bookInfo.volumeInfo.pageCount}</p>
                <p>Average Rating: {bookInfo.volumeInfo.averageRating} (Ratings Count: {bookInfo.volumeInfo.ratingsCount})</p>
                <a href={bookInfo.volumeInfo.previewLink}>Preview in Google Books</a>
            </div> 

            </>
        : <p>Loading...</p>}
        <Link to="/main/mypage"><p>Back to My Page</p></Link>
        </>
    )

}

export default BookInfo