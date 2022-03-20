
import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostList from "./PostList";
import LoginPage from "./LoginPage";
import NewUser from "./NewUser";
import PostForm from "./PostForm";
import DeletePost from "./DeletePost";
import Messages from "./Messages"
import { testAuthentication } from "./api";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function isValidJWT() {
    const token = localStorage.getItem("stranger_things-JWT");
    if (!token) setIsLoggedIn(false);
    else {
      const isValid = await testAuthentication();
      setIsLoggedIn(isValid);
    }
  }

  useEffect(() => {
    isValidJWT();
  }, []);

  console.log("Logged in: ", isLoggedIn);

  return (
    
    <Router>
    <div>
      <h1>Stranger Things API</h1>
    </div>
    <ul>
      <li><Link to="./login-page">LoginPage</Link></li>
      <li><Link to="./new-user">NewUser</Link></li>
      <li><Link to="./post-list">PostList</Link></li>
    </ul>
    <Switch> 
        <Messages />
        <Route exact path="./loginPage">
          <LoginPage />
        </Route>
        <NewUser />
        <PostForm />
        <DeletePost />
        <PostList />
    </Switch>
    </Router>
    
  );
}

export default hot(App);