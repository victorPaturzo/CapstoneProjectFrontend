import React, { useState } from "react";
import "./tradeHall.css";
import "../Home/home";
import axios from "axios";
import jwtDecode from "jwt-decode";

const OfferPoster = (props) => {
    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);

    const [offer, setOffer] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        const postOffer = {
            offer: offer
        };
        let response = await axios.post(`http://localhost:5000/api/trades/postOffer/${decodedUser.userName}`, postOffer);
        if(response.status === 200){
            console.log(response.data);
            alert("Offer successfully posted!")
        }
    }

    const handleChange = (event) => {
        setOffer({
            [event.target.name]: event.target.value
        });
    }



    return(
        <form className="postOfferForm" onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Make Offer Post</label>
                    <input name="offer" onChange={handleChange} value={offer} onChange={(event) => setOffer(event.target.value)} type="text" />
                    <button className="buttonColor" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default OfferPoster;