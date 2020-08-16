import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Mypage = ({ userInfo }) => {

    console.log('mypage - userInfo', userInfo)

    const [info, setInfo] = useState({})
    useEffect(()=>{
        async function getInfo() {
            await timeout(3000)
            await setInfo(userInfo)
        }    
    }, [])

    return (
        <>
        <container className="my_page_container">
            {userInfo.id ?
            <div className="my_page_userInfo_exists">
                <div className="my_profile">
                    <div className="my_profile_upper_div">
                        <img className="my_profile_pic" src={userInfo.profile.profilePicture} alt="My profile picture" width="50px" />
                        <p className="my_profile_nickname">{userInfo.profile.nickname}</p>
                        <p className="my_profile_description">{userInfo.profile.description}</p>
                    </div>
                    <div className="my_profile_lower_div">
                        <p>Number of Books I Read: {userInfo.books.length}</p>
                    </div>
                </div>
                <div className="my_books">
                    <h3>My Books</h3>
                    <div className="my_books_read">
                        <h4>Books I Read</h4>
                        <div>

                        </div>
                    </div>
                    <div className="my_books_saved">
                        <h4>Saved Books</h4>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        : <div><p>No User Information. Please Log In First <a href="http://localhost:3001/">Here</a></p></div>
        }
    </container>
    </>
    )
}

export default Mypage