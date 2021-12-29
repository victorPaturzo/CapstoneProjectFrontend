import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./login.css";
import axios from "axios";
import { Login } from "@mui/icons-material";
import PropTypes from "prop-types";


function LoginForm(props){
    const [userName, getUserName] = useState("");
    const [password, getPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const getUser = {
            userName: userName,
            password: password,
        };
        let response = await axios.post(`http://localhost:5000/api/users/login`, getUser);
        if(response.status === 200){
            console.log(response.data);
            localStorage.setItem("token", response.data)
            window.location = "/";
        }
    }

    return (
        <>
            <div className="login">
                <h1 className="headerFontColor">Greetings, Marine!  This is your portal for the Warhammer 40k community</h1>
                <img className="loginImg" src="Images/Login.png" />
                <div className="loginCover">
                    <div>
                        <form className="headerFontColor" onSubmit={handleSubmit}>
                            <label>UserName</label>
                            <input value={userName} onChange={(event) => getUserName(event.target.value)} type="text" />

                            <label>Password</label>
                            <input value={password} onChange={(event) => getPassword(event.target.value)} type="text" />

                            <button className="buttonColor" href="/profile" type="submit">ENTER THE FRAY</button>
                            <Button className="buttonColor" href="/signup" variant="text">Join the cause here!</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
Login.propTypes={
    setToken:PropTypes.func.isRequired
  }

export default LoginForm;