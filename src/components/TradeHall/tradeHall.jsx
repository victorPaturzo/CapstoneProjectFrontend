import React, { useState, useEffect } from "react";
// import { Route, Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./tradeHall.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";

const TradeHall = (props) => {
    const [tradePosts, getTradePosts] = useState([]);

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/api/trades/getAllOffers`, tradePosts)
    //          .then((response) => {
    //             getTradePosts(response.data);
    //           })
    //          .catch((err) => {
    //             console.log(err);
    //           })
    // },  [tradePosts, props.index]);  

    return(
        <>
        <div className="tradehallBackgroundImg">
            <NavBar />
            <h1 className="tradehallHeader">TradeHall</h1>
                <table className="tradehallMainFeed">
                    <thead>
                        <tr>
                            <th className="tradehallHeader">Posted Offers</th>
                        </tr>
                     </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            {tradePosts && <td>{tradePosts[4]}</td>} 
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

export default TradeHall;