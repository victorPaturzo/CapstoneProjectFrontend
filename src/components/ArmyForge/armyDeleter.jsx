import React, { useState, useEffect } from "react";
import "./armyForge.css";
import "../Home/home";
import axios from "axios";
import jwtDecode from "jwt-decode";

const ArmyDeleter = (props) => {
    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);
    const currentUserId = decodedUser._id;

    const [army, setArmy] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const deleteArmy = {
            army: army,
        };
        let response = await axios.delete(`http://localhost:5000/api/users/deleteArmy/${currentUserId}/`, deleteArmy);
        if(response.status === 200){
            alert("Army successfully deleted!")
        }
    }

    const handleChange = (event) => {
        setArmy({
            [event.target.name]: event.target.value
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>List Army to Delete Here</label>
                <input name="text" onChange={handleChange} onChange={(event) => setArmy(event.target.value)} type="text"></input>
                <button type="submit">Delete Army</button>
            </form>
        </div>
    )
}

export default ArmyDeleter;