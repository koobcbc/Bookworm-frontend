import React, { useState, useEffect } from 'react';

const SearchResult = ({ keyword }) => {
    const [searchedBooks, setSearchedBooks] = useState({})

    console.log('searchresult - keyword', keyword)
    let urlAddress = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(keyword.title)}+inauthor:${encodeURIComponent(keyword.author)}+isbn:${encodeURIComponent(keyword.isbn)}&key=AIzaSyBusNPM351BLMl9cGVyjrKFxg3B_IdlL1I`
    console.log(urlAddress)

    useEffect(()=>{
        const makeApiCall =  async () =>{
          const res = await fetch(urlAddress)
          const json = await res.json()
          setSearchedBooks(json)
        }
        makeApiCall()
      },[])

    console.log(searchedBooks)

    return(
        <>
        {searchedBooks.items ?
            <div>
                <h3>Search Results ({searchedBooks.items.length})</h3>
            </div>
        : null}
        </>
    )
}

export default SearchResult