
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";

// This is a test!!! Carter's Git repo push comment!

const App = (props) => {
  const { name } = props;
  return (
    <>
      <h1>Welcome, {name}</h1>
      <PostList />
    </>
  );
}

export default hot(App);
