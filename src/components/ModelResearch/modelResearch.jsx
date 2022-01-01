import React, { useState } from "react";
// import Button from "@mui/material/Button";
import "./modelResearch.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar"
import { useEffect } from "react";

const ModelResearch = (props) => {

    const [allModels, setAllModels] = useState([]);

    async function GetModels(e) {
        let response = await axios.get(`http://localhost:5000/api/models/getAllModels`, allModels);
        if(response.status === 200){
            console.log(response.data);
            setAllModels(response.data);
        }
    }

    useEffect(() => {
        GetModels();
    }, []);

    return(
        <>
            <div className="modelResearchBackground">
                <NavBar />
                <div >
                    <h1 className="header">Research Models</h1>
                    <GetModels />
                </div>
            </div>
        </>
    )
}

export default ModelResearch;