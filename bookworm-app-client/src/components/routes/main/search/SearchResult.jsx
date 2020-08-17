import React, { useState, useEffect } from 'react';

const SearchResult = ({ keyword }) => {
    const [searchedBooks, setSearchedBooks] = useState({})

    console.log('searchresult - keyword', keyword)
    let query= {author:"+inauthor:", isbn:"+isbn:"}
    if (keyword.author==""){
        query.author=""
    } if (keyword.isbn==""){
        query.isbn=""
    } if (keyword.title=="" && keyword.author==""){
        query.isbn="isbn:"
    } if (keyword.title=="" && keyword.isbn==""){
        query.author="inauthor:"
        query.isbn=""
    } if (keyword.title=="" && keyword.author!=="" && keyword.isbn!==""){
        query.author="inauthor:"
        query.isbn="+isbn:"
    }

    let urlAddress = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(keyword.title)}${query.author}${encodeURIComponent(keyword.author)}${query.isbn}${encodeURIComponent(keyword.isbn)}&key=AIzaSyBusNPM351BLMl9cGVyjrKFxg3B_IdlL1I&maxResults=15`

    // console.log(urlAddress)

    useEffect(()=>{
        const makeApiCall =  async () =>{
          const res = await fetch(urlAddress)
          const json = await res.json()
          setSearchedBooks(json)
        }
        makeApiCall()
      },[urlAddress])

    console.log(searchedBooks)

    return(
        <>
        {searchedBooks.totalItems ?
            <div>
                <h3>Search Results ({searchedBooks.totalItems})</h3>
                {searchedBooks.totalItems>15 ? <p>Showing top 15 results:</p> : null}
                <div className="search_result_div">
                {searchedBooks.items.map((book, index)=>{
                    return(<div className="search_result_individual_div">
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} height="100px" className="search_result_img"/>
                        <p className="search_result_title">Title: {book.volumeInfo.title}</p>
                        {book.volumeInfo.authors ? <p className="search_result_authors">Author(s): {book.volumeInfo.authors.map((author)=>{
                            return(<p className="search_result_author">{author}</p>)
                        })}</p>: <p className="search_result_no_author">Author: N/A</p>}
                        <p className="search_result_publisher">Publisher: {book.volumeInfo.publisher}</p>
                    </div>)
                })}
                </div>
            </div>
        : null}
        </>
    )
}

export default SearchResult