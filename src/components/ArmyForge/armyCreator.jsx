import React, { useState, useEffect } from "react";
import "./armyForge.css";
import "../Home/home";
import axios from "axios";
import jwtDecode from "jwt-decode";

const ArmyCreator = (props) => {

    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);
    const currentUserId = decodedUser._id;

    const [army, setArmy] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const addArmy = {
            army: army,
        };
        let response = await axios.post(`http://localhost:5000/api/users/addArmy/${currentUserId}/`, addArmy);
        if(response.status === 200){
            alert("Army successfully added to your list!")
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
                <label>List Army Here</label>
                <input name="army" onChange={handleChange} onChange={(event) => setArmy(event.target.value)} type="text"></input>
                <button type="submit">Add Army</button>
            </form>
        </div>
    )
}

export default ArmyCreator;