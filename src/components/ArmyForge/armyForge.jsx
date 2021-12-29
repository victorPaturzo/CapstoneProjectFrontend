import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./armyForge.css";
import "../Home/home";
// import axios from "axios";
import NavBar from "../NavBar/navBar";

const ArmyForge = (props) => {

    return(
        <>
            <NavBar />
            <h1>Forge an Army</h1>
            <div className="homeLink">
            <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default ArmyForge;