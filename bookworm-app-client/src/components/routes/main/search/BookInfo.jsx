import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import Nav from '../../../shared/Nav';
import { Link, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const BookInfo = ({ handleClickPassIsbnToApp, selectedBookisbn, userInfo, fetchUpdatedUserInfo, authenInfo }) => {
    let { isbn } = useParams();
    console.log(isbn)

    const [bookInfo, setBookInfo] = useState({})
    const [bookAddedStatus, setBookAddedStatus] = useState(false)

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
    
    const history = useHistory();
    let FormData = require('form-data');

      // Make a POST request for adding books
    useEffect(()=>{
        let newBookFormdata = new FormData();
        newBookFormdata.append("book[isbn]", selectedBookisbn.isbn);
        newBookFormdata.append("book[title]", selectedBookisbn.title);
        newBookFormdata.append("book[image_url]", selectedBookisbn.image_url);
        
        console.log(newBookFormdata)

        let newBookRequestOptions = {
            method: 'POST',
            body: newBookFormdata,
            redirect: 'follow'
        };

        fetch(`http://localhost:3000/users/${userInfo.id}/books`, newBookRequestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)})
            .catch(error => {console.log('error', error)
                            if(!error) {
                            fetchUpdatedUserInfo(authenInfo.token.token, authenInfo.id.id)
                            setBookAddedStatus(true)}});
            history.push(`/main/mypage/book/${isbn}`)
        },[selectedBookisbn])
                                                   
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
                {bookInfo.volumeInfo.averageRating ? <p>Average Rating: {bookInfo.volumeInfo.averageRating} (Ratings Count: {bookInfo.volumeInfo.ratingsCount})</p>: null}
                <a href={bookInfo.volumeInfo.previewLink}>Preview in Google Books</a>
            </div> 

            </>
        : <p>Loading...</p>}
        <br/>
        <div>
            <Button onClick={() => handleClickPassIsbnToApp(isbn, bookInfo.volumeInfo.title, bookInfo.volumeInfo.imageLinks.thumbnail)}>Add to Read List</Button>
            <br/>
            <br/>
            {bookAddedStatus ? 
            <div class="alert alert-primary" role="alert">
                Book Added!
            </div> : null}
        </div>
        <br/>
        <Link to="/main/mypage"><p>Back to My Page</p></Link>
        </>
    )

}

export default BookInfo