import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SearchBooks = () => {

    const [isbn, setIsbn] = useState("")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    console.log('isbn', isbn)
    console.log('title', title)
    console.log('author', author)

    const handleChange = (event) => {
        //console.log("event", event.target.name, event.target.value);
        if (event.target.name=="isbn"){
            setIsbn(event.target.value)
        }
        else if (event.target.name=="title"){
            setTitle(event.target.value)
        }
        else if (event.target.name="author"){
            setAuthor(event.target.value)
        }
    }

    return(
        <div>
            <h3>Search a Book Using the Keyword(s)</h3>
            <Form>
                <Form.Label>ISBN</Form.Label>
                <Form.Control>
                    type="isbn"
                    placeholder="ISBN"
                    value={isbn}
                    name="isbn"
                    onChange={handleChange}
                </Form.Control>
                <Form.Label>Title</Form.Label>
                <Form.Control>
                    type="title"
                    placeholder="Title"
                    value={title}
                    name="title"
                    onChange={handleChange}
                </Form.Control>
                <Form.Label>Author</Form.Label>
                <Form.Control>
                    type="author"
                    placeholder="Author"
                    value={author}
                    name="author"
                    onChange={handleChange}
                </Form.Control>
            </Form>
        </div>
        
    )

}

export default SearchBooks