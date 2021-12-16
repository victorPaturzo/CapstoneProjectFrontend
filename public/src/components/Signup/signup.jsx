import React, {useState} from "react";
import "./signup.css";
import axios from "axios";

function Signup(props) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const postUser = {
            name: userName,
            email: email,
            password: password,
            isAdmin: false
        };
        let response = await axios.post(`http://localhost:5000/api/users/register`, postUser);
        if(response.status === 200){
            window.location = "/login"
        }
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <label>Username</label>
            <input value={userName} onChange={(event) => setUserName(event.target.value)} type="text" />

            <label>Email</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" />

            <label>Password</label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="text" />

            <button type="submit">Create User</button>
        </form>
    )
}

export default Signup;