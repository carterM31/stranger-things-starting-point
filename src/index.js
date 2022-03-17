import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import App from "./App";

// npm installed browserRouter and then wrapped it in our App.
var mountNode = document.getElementById("app");
ReactDOM.render(
    <BrowserRouter>
        <App />, 
    </BrowserRouter>,    
    mountNode
);