import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./modelResearch.css";
import "../Home/home";
// import axios from "axios";
import NavBar from "../NavBar/navBar"

const ModelResearch = (props) => {

    async function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <>
            <NavBar />
            <h1>Research Models</h1>
            <div className="homeLink">
            <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default ModelResearch;