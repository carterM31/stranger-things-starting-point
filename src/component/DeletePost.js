import React from "react";
import { deletePostById } from "./api";

const DeletePost = () => {
  return(
    <div>
        <button onClick={deletePostById}>Delete Post</button>
    </div>
  );
};

export default DeletePost;