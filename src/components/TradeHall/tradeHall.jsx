import React, { useState, useEffect } from "react";
// import { Route, Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./tradeHall.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";

const TradeHall = () => {
    const [tradePosts, setTradePosts] = useState([]);
    
    async function getData(e) {

        let response = await axios.get(`http://localhost:5000/api/trades/getAllOffers`, tradePosts);
        if(response.status === 200){
            console.log(response.data);
            setTradePosts(response.data);
        }
    }

    useEffect(() => {
        getData();
        },  []);  

    const MainFeed = (props) => {
        return (
            <table className="tradehallMainFeed">
                <thead >
                    <tr >
                        <th className="tableHeader">Posted Offers</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className="trSpacer">
                        {/* <td className="mainFeedRows" colSpan="2">{tradePosts[4].offer}</td>  */}
                    </tr>
                    <tr className="trSpacer">
                        {/* <td className="mainFeedRows" colSpan="2">{tradePosts[3].offer}</td> */}
                    </tr>
                    <tr className="trSpacer">
                        {/* <td className="mainFeedRows" colSpan="2">{tradePosts[2].offer}</td> */}
                    </tr>
                    <tr className="trSpacer">
                        {/* <td className="mainFeedRows" colSpan="2">{tradePosts[1].offer}</td> */}
                    </tr>
                    <tr className="trSpacer">
                        {/* <td className="mainFeedRows" colSpan="2">{tradePosts[0].offer}</td> */}
                    </tr>
                    <tr className="trSpacer">
                        {/* <td className="mainFeedRows" colSpan="2">Event</td> */}
                    </tr>
                </tbody>
            </table>
        )
    }

    return(
        <>
        <div className="tradehallBackgroundImg">
            <NavBar />
            <h1 className="tradehallHeader">TradeHall</h1>
            <MainFeed />
        </div>
        </>
    )
}

export default TradeHall;