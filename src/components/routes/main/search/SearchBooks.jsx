import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SearchResult from './SearchResult';


const SearchBooks = ({ handleSubmitFromAppSearchingKeyword, keyword }) => {

    // const [isbn, setIsbn] = useState("")
    // const [title, setTitle] = useState("")
    // const [author, setAuthor] = useState("")
    const [input, setInput] = useState({isbn:"",title:"",author:""})

    const handleChange = (event) => {
        //console.log("event", event.target.name, event.target.value);
        setInput({
            ...input,
            [event.target.name]: event.target.value,
          });
    }

    const handleSubmit = (e) => {
        // makes all the form input fields
        e.preventDefault()
        handleSubmitFromAppSearchingKeyword(input)
        setInput({isbn:"",title:"",author:""})
    }

    return(
        <>
        <div>
            <h3>Search a Book Using the Keyword(s)</h3>
            <Form onSubmit={handleSubmit} id="search_book_form">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                    type="isbn"
                    placeholder="ISBN"
                    value={input.isbn}
                    name="isbn"
                    onChange={handleChange}
                />
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="title"
                    placeholder="Title"
                    value={input.title}
                    name="title"
                    onChange={handleChange}
                />
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="author"
                    placeholder="Author"
                    value={input.author}
                    name="author"
                    onChange={handleChange}
                />
            <Button type="submit">Search</Button>
            </Form>
        </div>
        <SearchResult keyword={keyword}/>
        </>  
    )
}

export default SearchBooks