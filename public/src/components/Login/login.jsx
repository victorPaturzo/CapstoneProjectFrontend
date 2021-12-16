import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./login.css";
import axios from "axios";
import { Login } from "@mui/icons-material";

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
        <form className="signup" onSubmit={handleSubmit}>
            <label>UserName</label>
            <input value={userName} onChange={(event) => getUserName(event.target.value)} type="text" />

            <label>Password</label>
            <input value={password} onChange={(event) => getPassword(event.target.value)} type="text" />

            <button href="/profile" type="submit">Login</button>
            <Button href="/signup" variant="text">Signup</Button>
        </form>
    );
}

export default LoginForm;