import React, { useState, useEffect } from "react";
import "./profile.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";
import jwtDecode from "jwt-decode";
import Friends from "../Friends/friends";

const Profile = (props) => {
    const [name, getName] = useState("");
    const [userName, getUserName] = useState("");
    const [password, getPassword] = useState("");
    const [email, getEmail] = useState("");
    const [mailingAddress, getMailingAddress] = useState("");
    const [contactInfo, getContactInfo] = useState();

    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);
    const currentUserId = decodedUser._id;

    async function handleSubmit(e) {
        e.preventDefault();

        const editUser = {
            name: name,
            userName: userName,
            email: email,
            mailingAddress: mailingAddress,
            password: password,
            contactInfo: contactInfo,
        };
        let response = await axios.put(`http://localhost:5000/api/users/editProfile/${currentUserId}/`, editUser);
        if(response.status === 200){
            alert("Profile changes successful!")
        }
    }

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${currentUserId}`, user)
        .then(res => {
            setUser(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(
        <div className="profileBackground">
            <NavBar />
            <h1 className="profilePageHeader">Your Profile Page</h1>
            <div classname="profileFeed">
                <img className="userAvatar" />
                <Friends />
                <form className="editProfile" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input onChange={(event) => getName(event.target.value)} type="text" />

                    <label>Username</label>
                    <input onChange={(event) => getUserName(event.target.value)} type="text" />

                    <label>Password</label>
                    <input onChange={(event) => getPassword(event.target.value)} type="text" />

                    <label>Email</label>
                    <input onChange={(event) => getEmail(event.target.value)} type="text" />

                    <label>Mailing Address</label>
                    <input onChange={(event) => getMailingAddress(event.target.value)} type="text" />

                    <label>Contact Information (phone number)</label>
                    <input onChange={(event) => getContactInfo(event.target.value)} type="text" />

                    <button href="/profile" type="submit">Edit Profile</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;