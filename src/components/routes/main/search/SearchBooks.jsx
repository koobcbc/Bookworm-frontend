import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SearchBooks = () => {

    const [isbn, setIsbn] = useState("")

    return(
        <Form>
            type="isbn"
            placeholder="ISBN"
            value={isbn}
            name="isbn"
            onChange={handleChange}
        </Form>
        <Form>
        type="isbn"
        placeholder="ISBN"
        value={isbn}
        name="isbn"
        onChange={handleChange}
        </Form>
        <Form>
        type="isbn"
        placeholder="ISBN"
        value={isbn}
        name="isbn"
        onChange={handleChange}
        </Form>
    )

}

export default SearchBooks