
   
import React from "react";
import { testAutentication } from "./api";

const LoginPage = () => {
    return(
    <div>
        <button onClick={testAutentication}>Log in</button>
    </div>
    );
};

export default LoginPage;