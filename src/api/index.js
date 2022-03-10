export const getPosts = async () => {
    // The URL that we are reaching out to get.
    const url = 'https://jsonplaceholder.typicode.com/posts/';

    // Get the body of given API 
    const response = await fetch(url);
    console.log(response);

    const json = await response.json();
    console.log(json);

    return json;
}

export const createNewPost = async (newPost) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });
    
    const json = await response.json();
    console.log(json);
    return json;
}