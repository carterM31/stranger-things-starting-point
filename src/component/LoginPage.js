
   
import React, { useState } from "react";
import { testAuthentication } from "./api";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");  
    
    const loginButton = () => {
        setUsername("");
        setPassword("");
        testAuthentication();
    }
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div>
            <label>Username</label>
            <input type='email' value={username} onChange={handleUsername} placeholder='Enter E-mail' required/>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePassword} placeholder='Enter Password' minLength="8" required/>
            <button onClick={loginButton}>LogIn</button>
        </div>
    )
}


export default LoginPage;