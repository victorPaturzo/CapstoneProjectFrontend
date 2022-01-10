import React, { useState, useEffect } from "react";
import "./tradeHall.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";

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
                    <tr>
                    {
                        tradePosts.map(post => <tr className="trSpacer"><td key={post.id}>{post.owner}------{post.offer}</td></tr>)
                    }
                    </tr>
                    {/* <tr>
                    {
                        tradePosts.map(post => <tr className="trSpacer"><td key={post.id}>{post.offer}</td></tr>)
                    }
                    </tr> */}
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
            <h6 className="tradeHallFooter">Footer</h6>
        </div>
        </>
    )
}

export default TradeHall;