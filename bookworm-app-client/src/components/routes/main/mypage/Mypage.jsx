import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import Nav from "../../../shared/Nav"

const Mypage = ({ userInfo, selectedBookisbn }) => {

    console.log('mypage - userinfo', userInfo)
    console.log('mypage - userinfo id', userInfo.id)
    {
    // userInfo = {
    //     "id": 1,
    //     "username": "katy",
    //     "password_digest": "$2a$12$Rxp7UiwYi779JX3EZYYXFuGp.Hw2KLQZecaArbEApTHxgVi6bkzJ.",
    //     "created_at": "2020-08-16T15:53:55.070Z",
    //     "updated_at": "2020-08-16T15:53:55.070Z",
    //     "profile": {
    //         "id": 1,
    //         "nickname": "Katy",
    //         "description": "College Student who likes to read fiction novel",
    //         "profilePicture": "https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600",
    //         "readingGoal": 10,
    //         "totalPageNum": 780,
    //         "user_id": 1,
    //         "created_at": "2020-08-16T15:54:16.608Z",
    //         "updated_at": "2020-08-16T15:54:16.608Z"
    //     },
    //     "books": [
    //         {
    //             "id": 1,
    //             "isbn": "9780307700414",
    //             "title": "Girls in White Dresses",
    //             "starRating": "3.5",
    //             "reviews": [
    //                 "After reading this book, I had one of my first pangs of Kindle regret since purchasing the device a little over a year ago. Girls in White Dresses is the type of book that I wish I could drop in the mail to one of my college roommates, with explicit instructions to pass it on to the next lady in our little cluster after finishing."
    //             ],
    //             "notes": [
    //                 "The characters are going through very average, every day events--they don't get into these crazy, ridiculous situations that you see in some other novels of this genre"
    //             ],
    //             "quotes": [
    //                 "Sometimes she missed people before they even left her, got depressed about a vacation being over before it started.",
    //                 "In college, twenty-nine had seemed impossibly old. By now, she'd thought, she'd be married and have kids. But as each year went by, she didn't feel much different than she had before. Time kept going by and she was just here, the same.",
    //                 "The thing is that you don't meet someone until you do ... and the older we get, the harder it is. And maybe not all of us will meet someone."
    //             ],
    //             "user_id": 1,
    //             "created_at": "2020-08-16T15:54:16.650Z",
    //             "updated_at": "2020-08-16T15:54:16.650Z",
    //             "image_url": "https://images-na.ssl-images-amazon.com/images/I/81h0iLMqPVL.jpg"
    //         },
    //         {
    //             "id": 2,
    //             "isbn": "9781400031702",
    //             "title": "The Secret History",
    //             "starRating": "3.0",
    //             "reviews": [
    //                 "An accomplished psychological thriller. . . . Absolutely chilling. . . . Tartt has a stunning command of the lyrical.",
    //                 "A huge, mesmerizing, galloping read, pleasurably devoured. . . . .Gorgeously written, relentlessly erudite."
    //             ],
    //             "notes": [
    //                 "p.36",
    //                 "p.100"
    //             ],
    //             "quotes": [
    //                 "Beauty is rarely soft or consolatory. Quite the contrary. Genuine beauty is always quite alarming.",
    //                 "I suppose at one time in my life I might have had any number of stories, but now there is no other. This is the only story I will ever be able to tell."
    //             ],
    //             "user_id": 1,
    //             "created_at": "2020-08-16T15:54:16.658Z",
    //             "updated_at": "2020-08-16T15:54:16.658Z",
    //             "image_url": "https://www.hachette.co.uk/wp-content/uploads/2019/01/hbg-title-9781405529631-4.jpg?fit=441%2C675"
    //         },
    //         {
    //             "id": 3,
    //             "isbn": "9780140283297",
    //             "title": "On the Road",
    //             "starRating": "3.5",
    //             "reviews": [
    //                 "An authentic work of art . . . the most beautifully executed, the clearest and the most important utterance yet made by the generation Kerouac himself named years ago as 'beat,' and whose principal avatar he is.",
    //                 "Kerouac turned up the temperature in American letters, and it's never gone down since."
    //             ],
    //             "notes": [
    //                 "p.20",
    //                 "p.70",
    //                 "p.130"
    //             ],
    //             "quotes": [],
    //             "user_id": 1,
    //             "created_at": "2020-08-16T15:54:16.666Z",
    //             "updated_at": "2020-08-16T15:54:16.666Z",
    //             "image_url": "https://i.pinimg.com/originals/a5/dd/8e/a5dd8e875cf444fa67d24659054f94c3.jpg"
    //         },
    //         {
    //             "id": 4,
    //             "isbn": "9780743273565",
    //             "title": "The Great Gatsby",
    //             "starRating": "4.0",
    //             "reviews": [
    //                 "A true classic of twentieth-century literature"
    //             ],
    //             "notes": [],
    //             "quotes": [
    //                 "I hope she'll be a fool -- that's the best thing a girl can be in this world, a beautiful little fool"
    //             ],
    //             "user_id": 1,
    //             "created_at": "2020-08-16T15:54:16.673Z",
    //             "updated_at": "2020-08-16T15:54:16.673Z",
    //             "image_url": "https://images-na.ssl-images-amazon.com/images/I/41iers+HLSL._SX326_BO1,204,203,200_.jpg"
    //         }
    //     ]
    // }
}
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