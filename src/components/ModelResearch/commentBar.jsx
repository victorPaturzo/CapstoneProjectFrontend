import React, { useState, useEffect } from "react";
import "./modelResearch.css";
import "../Home/home";
import axios from "axios";
import "bootstrap";
import jwtDecode from "jwt-decode";

const CommentBar = (props) => {
    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);

    const [text, setText] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        const postComment = {
            text: text
        };
        let response = await axios.post(`http://localhost:5000/api/users/modelComment/${decodedUser.userName}/${props.model.modelName}`, postComment);
        if(response.status === 200){
            console.log(response.data);
            alert("Comment successfully added!")
        }
    }

    const handleChange = (event) => {
        setText({
            [event.target.name]: event.target.value
        });
    }



    return(
        <form onSubmit={handleSubmit}>
            <div className="searchBarA">
                <div>
                    <label>Comment on Model</label>
                    <input name="text" onChange={handleChange} value={text} onChange={(event) => setText(event.target.value)} type="text" />
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default CommentBar;