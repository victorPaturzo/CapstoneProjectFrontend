import React, { useState, useEffect } from "react";
import "../Profile/profile.css";
import "./home.css";
import "../TradeHall/tradeHall";
import "../ModelResearch/modelResearch";
import NavBar from "../NavBar/navBar";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios";
import jwtDecode from "jwt-decode";
import Armies from "../ArmyForge/armyForge";

const Home = (props) => {

    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);

const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/trades/getEvents`, events)
        .then(res => {
            setEvents(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <>
            <div className="home">
            <NavBar />
                <img className="profileUserImg" src="Images/Profile/Default.png" />
                <FormGroup className="onlineSwitch">
                    <FormControlLabel control={<Switch defaultChecked />} label="Online" />
                </FormGroup>
                <table className="mainFeed">
                    <thead>
                        <tr>
                            <h1 className="header">What's New?</h1>
                        </tr>
                     </thead>
                    <tbody>
                        {
                            events.map(event => <tr className="line-height: 14px;" ><td className="eventPosition" key={event.id}>{event.event}</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </>
    )
}

export default Home;