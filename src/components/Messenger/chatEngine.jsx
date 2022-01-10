import React, { useState } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import jwtDecode from "jwt-decode";


const DirectChatPage = () => {
    const currentUser = localStorage.getItem("token");
    const decodedUser = jwtDecode(currentUser);

    const [username, setUsername] = useState("")
    const [password, getPassword] = useState("");

    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            {is_direct_chat: true, usernames: [username] },
            () => setUsername("")
        )
    }

    function renderChatForm(creds) {
        return (
            <div>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={() => createDirectChat(creds)}>
                    Create
                </button>
            </div>
        )
    }

    return (
        <div>
            <ChatEngine
                height='100vh'
                userName={decodedUser.userName}
                userSecret={decodedUser.userName}
                projectID='d6ce7d72-e26a-4368-94bf-97400aa9d5ca'
                renderNewChatForm={(creds) => renderChatForm(creds)}
            />
        </div>
    )
}


export default DirectChatPage;