import * as React from "react";
import "../Logout/logout.css";
function Logout() {
    const logOutBtn = () => {
        localStorage.removeItem("token");
        window.location.assign("/");
    }
    return (
        <button className="logoutButton" onClick={() => logOutBtn()}>Log out</button>
    )
};

export default Logout;