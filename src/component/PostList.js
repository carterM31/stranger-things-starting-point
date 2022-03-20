import React, { useState, useEffect } from 'react';
import { getPosts } from './api';
//useEffect example
const PostList = () => {
    const [posts, setPosts] = useState(["default value"]);

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
    }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{ "$" + post.price}</p>
                    <p>{post.location}</p>
                    <p>{post.willDeliver}</p>
                </div>
            )}
        </div>
    );
};
//useEffect example
export default PostList;