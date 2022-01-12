import React, { useState, useEffect } from "react";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";
import jwtDecode from "jwt-decode";

const Friends = (props) => {

    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);
    const currentUserId = decodedUser._id;
    
    const [friends, setFriends] = useState([]);
    const [pendingFriends, setPendingFriends] = useState([]);

        useEffect(() => {
            doThing()
        }, [])

        useEffect(() => {
            getPendingFriends()
        }, [])

        const doThing = async()=>{
            let response = await axios.get(`http://localhost:5000/api/users/getFriends/${currentUserId}`)
            console.log("Friend Ids", response.data)
            let allResult = await Promise.all(response.data.map((el)=>
                axios.get(`http://localhost:5000/api/users/${el}`)
            ))
            let friendsList = [];
            allResult.forEach((el)=> friendsList.push(el.data))
            console.log(friendsList)
            setFriends(friendsList)  
        }

        const getPendingFriends = async()=>{
            let response = await axios.get(`http://localhost:5000/api/users/getPendingFriends/${currentUserId}`)
            console.log("Friend Ids", response.data)
            let allResult = await Promise.all(response.data.map((el)=>
                axios.get(`http://localhost:5000/api/users/${el}`)
            ))
            let friendsList = [];
            allResult.forEach((el)=> friendsList.push(el.data))
            console.log(friendsList)
            setPendingFriends(friendsList)  
        }

        const Friends = () => {
            return(
                <div>
                <table className="friendsPosition">
                    <thead>
                        <tr>
                            <th>Friends</th>
                        </tr>
                    </thead>
                    <tbody>
                        {friends.map((el)=>{
                            return <tr className="friendsTableBody">
                                <td colSpan="1">
                                    {el.userName}
                                </td>
                            </tr>
                        })}
                       
                    </tbody>
                </table>
                <table >
                    <thead>
                        <tr>
                            <th>Pending Friend Requests</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingFriends.map((el)=>{
                            return <tr className="friendsTableBody">
                                <td colSpan="1">
                                    {el.userName}
                                </td>
                            </tr>
                        })}
                       
                    </tbody>
                </table>
                </div>
            )
        }
    
    return(
        <div>
            {Friends()}
           
        </div>
    )
}

export default Friends;