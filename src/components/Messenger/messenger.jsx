import React, { useState, useEffect } from "react";
import "../Home/home";
import axios from "axios";
import "../Messenger/messenger.css";
import jwtDecode from "jwt-decode";
import NavBar from "../NavBar/navBar";
import Friends from "../Friends/friends";
import DirectChatPage from "./chatEngine";

const Messenger = (props) => {
   
    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);
    const currentUserId = decodedUser._id;

    const [recipient, setRecipient] = useState([]);

    const handleChange = (event) => {
        setRecipient({
            [event.target.name]: event.target.value
        });
    }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${currentUserId}`, messages)
        .then(res => {
            setMessages(res.data.inbox);
        })
        .catch(err => {
            console.log(err)
        })
    })

    const [sendMessage, setSendMessage] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();

        const sendMessage = {
            text: sendMessage
        };
        let response = await axios.post(`/sendMessage/${recipient}/${decodedUser.userName}`, sendMessage);
        if(response.status === 200){
            console.log(response.data);
            alert("Message sent!")
        }
    }

    const Messages = (props) => {
        return(
            <table className="messagesPosition">
                <thead>
                    <tr>
                        <th>Your Messages</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="friendsTableBody" colSpan="1">
                            {
                            messages.map(message => <li key={message._id}>{message.userName}</li>)
                            }
                        </td>
                        <td className="friendsTableBody" colSpan="2">
                            {
                            messages.map(message => <li key={message._id}>{message.text}</li>)
                            }
                       </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return(
        <div className="messengerBackground">
            <NavBar />
            {/* <Friends />
            <Messages /> */}
            <DirectChatPage />
            {/* <div>
                <form onSubmit={handleSubmit}>
                    <div className="messageInputPosition">
                        <label>To:</label>
                        <input name="recipient" onChange={handleChange} value={recipient} onChange={(event) => setRecipient(event.target.value)} type="text" />
                        <label>Message</label>
                        <input name="sendMessage" onChange={handleSubmit} value={sendMessage} onChange={(event) => setSendMessage(event.target.value)} type="text" />
                        <button>Send</button>
                    </div>
                </form>
            </div> */}
        </div>
    )
}

export default Messenger;
// export default Messenger;