import React, {useState} from "react";
import "./signup.css";
import axios from "axios";

function Signup(props) {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function back(e) {
        e.preventDefault();
        window.location = "/login"
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const postUser = {
            name: name,
            userName: userName,
            email: email,
            password: password
        };
        let response = await axios.post(`http://localhost:5000/api/users/register`, postUser);
        if(response.status === 200){
            alert("User successfully created!");
            window.location = "/login"
        }
        const chatUser = {
            username: userName,
            secret: password,
        }
        let config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': '{{4a4967dd-1938-46ad-a8ef-09de89c6f421}}'
            },
            data: chatUser
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })

        .catch(function (error) {
            console.log(error);
        })

    }

    return(
        <div className="signUpBackground">
            <form className="signup" onSubmit={handleSubmit}>
                <div className="signupRows">
                <label>Name</label>
                <input value={name} onChange={(event) => setName(event.target.value)} type="text" />
                </div>
                <div className="signupRows">
                <label>Username</label>
                <input value={userName} onChange={(event) => setUserName(event.target.value)} type="text" />
                </div>
                <div className="signupRows">
                <label>Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" />
                </div>
                <div className="signupRows">
                <label>Password</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
                </div>
                <div className="signupRows">
                <button type="submit">Create User</button>
                </div>
            </form>
            <form onSubmit={back}>
            <button type="submit">Back to Login Screen</button>
            </form>
            <img className="signUpImg" src="Images/signupImage.jpg" />
        </div>
    )
}

export default Signup;