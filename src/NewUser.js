import React, {useState} from "react";
import { registerUser } from "./api";

const NewUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterUserButtonClick = () => {
        console.log("Making a post request...");
      
        registerUser(username, password);

        setUsername("");
        setPassword("");
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      }
    return (
        <div>
            <label>Username</label>
            <input type="email" value={username} onChange={handleUsernameChange} placeholder="username@email.com"/>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>
            <button onClick={() => {
        handleRegisterUserButtonClick();
    }}>
      Register User
    </button>
</div>
    );
};


export default NewUser;