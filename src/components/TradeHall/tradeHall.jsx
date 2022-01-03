import React, { useState, useEffect } from "react";
// import { Route, Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./tradeHall.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";
import { PostAddSharp } from "@mui/icons-material";

const TradeHall = () => {
    const [tradePosts, setTradePosts] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/trades/getAllOffers`, tradePosts)
             .then(res => {
                 setTradePosts(res.data)
             })
             .catch(err => {
                 console.log(err)
             })
    })

    const MainFeed = (props) => {
        return (
            <table className="tradehallMainFeed">
                <thead >
                    <tr >
                        <th className="tableHeader">Posted Offers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="trSpacer">
                        <td colSpan="1">
                            {
                            tradePosts.map(post => <li key={post.id}>{post.owner}</li>)
                            }
                        </td> 
                        <td colSpan="2">
                            {
                            tradePosts.map(post => <li key={post.id}>{post.offer}</li>)
                            }
                        </td> 
                    </tr>
                    <tr className="trSpacer">
                        <td className="mainFeedRows" colSpan="2">
                            {
                                
                            }
                        </td>
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