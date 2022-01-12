import React, { useState, useEffect } from "react";
import "./armyForge.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";
import jwtDecode from "jwt-decode";
import ArmyCreator from "./armyCreator";
import ArmyDeleter from "./armyDeleter";

const ArmyForge = (props) => {

    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);
    const currentUserId = decodedUser._id;

    const [userArmies, setUserArmies] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${currentUserId}`, userArmies)
        .then(res => {
            setUserArmies(res.data.armies);
        })
        .catch(err => {
            console.log(err)
        })
    })

    const Armies = (props) => {
        return(
            <table className="armyListPosition">
                <thead >
                    <tr className="armiesHeader">
                        <th className="armiesHeaderRow">Your Armies</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="armiesBody">
                        <td colSpan="2">
                            {
                                userArmies.map(army => <li key={army._id}>{army.army}</li>)
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return(
        <>
            <div className="forgeBackground">
                <NavBar />
                <h1>Forge an Army</h1>
                <ArmyCreator />
                <ArmyDeleter />
                <Armies />
                <h6 className="footer">Footer</h6>
            </div>
        </>
    )
}

export default ArmyForge;