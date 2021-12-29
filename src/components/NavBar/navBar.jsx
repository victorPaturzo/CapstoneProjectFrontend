import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./navBar.css";
import Logout from "../Logout/logout";
import "../Logout/logout.css";

const NavBar = (props) => {
    
    return(
        <div className="navBarBackground">
            <div>
                <Button className="buttonProperties" href="/" type="submit">Home</Button>
                <Button className="buttonProperties" href="/profile" type="submit">Profile</Button>
                <Button className="buttonProperties" href="/tradeHall" type="submit">Enter Tradehall</Button>
                <Button className="buttonProperties" href="/armyForge" type="submit">Enter Army Forge</Button>
                <Button className="buttonProperties" href="/modelResearch" type="submit">Conduct Model Research</Button>
                <Logout className="logoutButton" />
            </div>
            
        </div>
    )
}

export default NavBar;