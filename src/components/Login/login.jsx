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
                <div>
                    <div>
                        <p className="sideText">
                            "They shall be my finest warriors, these men who give of themselves to me. Like clay I shall mold them, 
                            and in the furnace of war forge them. They will be of iron will and steely muscle. In great armor shall 
                            I clad them and with the mightiest guns will they be armed. They will be untouched by plague or disease, 
                            no sickness will blight them. They will have tactics, strategies and machines so that no foe can best 
                            them in battle. They are my bulwark against the Terror. They are the Defenders of Humanity. They are my 
                            Space Marines and they shall know no fear."
                        </p>
                        <a className="sideTextFooter">
                            -The Emperor of Mankind
                        </a>
                    </div>
                    <div className="loginCover">
                        <form className="loginText" onSubmit={handleSubmit}>
                            <label>UserName</label>
                            <input value={userName} onChange={(event) => getUserName(event.target.value)} type="text" />

                            <label>Password</label>
                            <input value={password} onChange={(event) => getPassword(event.target.value)} type="password" />

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