import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


const Added = () => {

    return(
        <div>
            <h3>Book Added!</h3>
            <Link to='/main/mypage'><Button>Click To See My Page</Button></Link>
        </div>
    )
}

export default Added