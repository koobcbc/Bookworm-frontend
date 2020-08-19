import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from '../../../shared/Nav';
import Footer from '../../../shared/Footer';

const EditProfile = ({ handleSubmitForUpdatedProfileFromApp }) => {

    console.log('editProfile')

    const [userProfile, setUserProfile] = useState({nickname:"",
                                                    description:"",
                                                    profilePicture:"",
                                                    readingGoal:""
                                                    })

    const handleChange = (event) => {
        console.log("event", event.target.name, event.target.value);
        setUserProfile({
          ...userProfile,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        // makes all the form input fields
        console.log('handling Submit updatedUserProfile' - userProfile) 
        e.preventDefault()
        handleSubmitForUpdatedProfileFromApp(userProfile)
        setUserProfile({})
        document.getElementById("profile_form").reset();
        
    }

                                                    
    return (
        <div className="app">
            <Nav/>
            <div className="add_profile_div">
                <h3>Edit Your Profile</h3>
                <Form id="profile_form" onSubmit={handleSubmit}>
                    <div id="profile_form_nickname">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control
                        type="nickname"
                        placeholder="Nickname"
                        value={userProfile.nickname}
                        name="nickname"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div id="profile_form_description">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                        type="description"
                        placeholder="Description"
                        value={userProfile.description}
                        name="description"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div id="profile_form_profile_pic">
                        <Form.Label>URL to Your Profile Picture</Form.Label>
                        <Form.Control
                        type="profilePicture"
                        placeholder="Profile Picture URL"
                        value={userProfile.profilePicture}
                        name="profilePicture"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div id="profile_form_reading_goal">
                        <Form.Label>Reading Goal For a Year</Form.Label>
                        <Form.Control
                        type="readingGoal"
                        placeholder="Reading Goal"
                        value={userProfile.readingGoal}
                        name="readingGoal"
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <br/>
                    <Button variant="secondary" type="submit">
                        Click to Confirm
                    </Button>
                </Form>
            </div>
            <Footer/>
        </div>
    )
}

export default EditProfile