import React, { useState } from "react";
import "../Profile/profile.css";
import "./home.css";
import "../TradeHall/tradeHall";
import "../ModelResearch/modelResearch";
import NavBar from "../NavBar/navBar";
// import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Home = (props) => {
    return (
        <>
            <div className="home">
            <NavBar />
                <img className="profileUserImg" src="Images/Profile/Default.png" />
                <FormGroup className="onlineSwitch">
                    <FormControlLabel control={<Switch defaultChecked />} label="Online" />
                </FormGroup>
                <div>
                    
                </div>
                <table className="mainFeed">
                    <thead>
                        <tr>
                            <h1 className="header">What's New?</h1>
                        </tr>
                     </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td colspan="2">Event</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td colspan="2">Event</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td colspan="2">Event</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </>
    )
}

export default Home;