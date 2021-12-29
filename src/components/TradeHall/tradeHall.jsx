import React, { useState } from "react";
// import { Route, Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./tradeHall.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";

function TradeHall(props){
    const [tradePosts, getTradePosts] = useState([]);

    async function handleSubmit(e){
        let response = await axios.get(`http://localhost:5000/api/trades/getAllOffers`, tradePosts);
        if(response.status === 200){
            console.log(response.data);
        }
        return tradePosts.setState(response.data)
    }   

   

    return(
        <>
        <div>
            <NavBar />
            <h1>TradeHall</h1>
                <table>
                    <thead>
                        <tr>
                            <h1>What's New?</h1>
                        </tr>
                     </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{tradePosts[4]}</td>
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
                <button onClick={() => handleSubmit}>See Trade Offers!</button>
                
            </div>
        </>
    )
}

export default TradeHall;