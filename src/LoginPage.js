
   
import React from "react";
import { testAuthentication } from "./api";

const LoginPage = () => {
    return(
    <div>
        <button onClick={testAuthentication}>Log in</button>
    </div>
    );
};

export default LoginPage;