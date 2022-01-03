import React, { useState, useEffect } from "react";
// import { Route, Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./profile.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";
import jwtDecode from "jwt-decode";

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
            console.log(response.data);
            alert("Profile changes successful!")
        }
    }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${currentUserId}`, messages)
        .then(res => {
            setMessages(res.data.inbox);
        })
        .catch(err => {
            console.log(err)
        })
    })

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

    const [friends, setFriends] = useState([]);

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/api/users/${currentUserId}`, friends)
    //     .then(res => {
    //         setFriends(res.data.acceptedFriends);
    //         console.log(friends);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // })

    const Messages = (props) => {
        return(
            <table className="messagesPosition">
                <thead>
                    <tr>
                        <th>Your Messages</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="1">
                            {
                            messages.map(message => <li key={message._id}>{message.userName}</li>)
                            }
                        </td>
                        <td colSpan="2">
                            {
                            messages.map(message => <li key={message._id}>{message.text}</li>)
                            }
                       </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const Friends = (props) => {
        return(
            <table className="friendsPosition">
                <thead>
                    <tr>
                        <th>Friends</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="1">
                            {/* {
                                friends.map(friend => <li key={friend._id}>{friend.userName}</li>)
                            } */}
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return(
        <div className="profileBackground">
            <NavBar />
            <h1 className="profilePageHeader">Your Profile Page</h1>
            <div classname="profileFeed">
                <img className="userAvatar" />
                <Friends />
                <Messages />
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