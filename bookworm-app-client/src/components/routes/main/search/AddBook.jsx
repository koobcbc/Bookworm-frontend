import React from 'react';
import Button from 'react-bootstrap/Button';

const AddBook = () => {

    const addToReadList = (book) => {

    }

    return(
        <div>
            <Button onclick={() => addToReadList(book)}>Add to Read List</Button>
        </div>
    )
}

export default AddBook