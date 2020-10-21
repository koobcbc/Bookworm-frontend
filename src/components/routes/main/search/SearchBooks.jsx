import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SearchResult from './SearchResult';
import Nav from '../../../shared/Nav';


const SearchBooks = ({ handleSubmitFromAppSearchingKeyword, keyword }) => {


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
        <Nav />
        <div className="search_div">
            <h3>Search a Book Using the Keyword(s)</h3>
            <Form onSubmit={handleSubmit} id="search_book_form">
                <div className="individual_search_form">
                    <Form.Label className="isbn_label">ISBN</Form.Label>
                    <Form.Control
                        type="isbn"
                        placeholder="ISBN"
                        value={input.isbn}
                        name="isbn"
                        onChange={handleChange}
                    />
                </div>
                <div className="individual_search_form">
                    <Form.Label className="title_label">Title</Form.Label>
                    <Form.Control
                        type="title"
                        placeholder="Title"
                        value={input.title}
                        name="title"
                        onChange={handleChange}
                    />
                </div>
                <div className="individual_search_form">
                    <Form.Label className="author_label">Author</Form.Label>
                    <Form.Control
                        type="author"
                        placeholder="Author"
                        value={input.author}
                        name="author"
                        onChange={handleChange}
                    />
                </div>
                <br/>
            <Button type="submit">Search</Button>
            </Form>
        </div>
        <SearchResult keyword={keyword}/>
        </>  
    )
}

export default SearchBooks