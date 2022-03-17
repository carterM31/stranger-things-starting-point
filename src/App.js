
import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from "react-router-dom";
import PostList from "./PostList";
import LoginPage from "./LoginPage";
import NewUser from "./NewUser";
import PostForm from "./PostForm";
import DeletePost from "./DeletePost";
import { loginAsUser, registerUser, testAuthentication } from "./api";

const App = (props) => {
  const { name } = props;
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
    <>
    <div>
      <h1>Stranger Things</h1>
    </div>
      <BrowserRouter>
        <LoginPage />
        <NewUser />
        <PostForm />
        <PostList />
        <DeletePost />
      </BrowserRouter>
    </>
  );
}

export default hot(App);