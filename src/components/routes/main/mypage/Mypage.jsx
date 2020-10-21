import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import Nav from "../../../shared/Nav"

const Mypage = ({ userInfo, selectedBookisbn }) => {

    console.log('mypage - userinfo', userInfo)
    console.log('mypage - userinfo id', userInfo.id)

    console.log('selectedBookIsbn- mypage', selectedBookisbn)


    return (
        <>
            <Nav />
            <div className="my_page_container">
                <div className="my_profile_container">
                    <h2>Your Profile</h2>
                    <br/>
                    {userInfo.profile ?
                        <div className="my_page_userInfo_exists">
                            <div className="my_profile">
                                <div className="my_profile_upper_div">
                                    <img className="my_profile_pic" src={userInfo.profile.profilePicture} alt="My profile picture" width="200px" />
                                    <div className="profile_box">
                                        <p className="my_profile_nickname">{userInfo.profile.nickname}</p>
                                        <p className="my_profile_description">{userInfo.profile.description}</p>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div className="my_profile_lower_div">
                                    <p className="my_profile_book_goal">My Reading Goal: {userInfo.profile.readingGoal}</p>
                                    <p>Number of Books I Read: {userInfo.books.filter(book=>{return book.title!==""}).length}</p>
                                </div>
                            </div>
                            <div>
                                <Link to='/main/mypage/edit-profile'><Button>Edit Your Profile Here</Button></Link>
                            </div>
                        </div> 
                    : 
                        <div>
                            <p>No profile yet</p>
                            <Link to='/main/mypage/add-profile'><Button>Add Your Profile Here</Button></Link>
                        </div>
                    }
                </div>
                    <br/>
                    <br/>
                <div className="my_books_container">
                <h3>My Books: Books I Read</h3>
                    <Link to='/main/search'><Button>Search for Books!</Button></Link>
                    <br/>
                    {userInfo.books ?
                        <div className="my_books_exists">
                            <div className="my_books">
                                
                                <div className="my_books_read">
                                    {userInfo.books.map((book, index)=>(
                                        <Link to={"/main/mypage/book/"+book.isbn} ><img src={book.image_url} alt={book.title} height="140px"/></Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    : 
                        <div>
                            <p>No Books Added Yet </p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Mypage