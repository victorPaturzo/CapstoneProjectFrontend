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

        useEffect(() => {
            doThing()
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
           
                     //promises.push(axios.get(`http://localhost:5000/api/users/${el}`))
              
           
        }

        const Friends = () => {
            return(
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
            )
        }
    
    return(
        <div>
            {Friends()}
           
        </div>
    )
}

export default Friends;