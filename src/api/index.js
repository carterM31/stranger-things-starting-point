const baseUrl = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT';
// const token = ;

export const getPosts = async () => {
    const url = `${baseUrl}/posts/`;
    const response = await fetch(url)
    const json = await response.json()
    return json;
} 

export const testAutentication = async () => {

    const url = `${baseUrl}/test/me`;
    const token = localStorage.setItem('stranger_things_JWT');
    const response = await fetch(url, {
        method:"GET",
        headers: {
            'Authorization': `bearer ${token}`
        } 
    });
    console.log(response)

    const json = await response.json();
        console.log(json);
        return json;
};

export const registerUser = async (username, password) => {

    const url = `${baseUrl}/users/register`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {username: username,
            password: password}
        })

    });

    const json = await response.json();
        console.log(json);
        localStorage.setItem('stranger_things_JWT', json.data.token);
        return json;
}

export const createNewPost = async (newPost) => {
    console.log(newPost)
    //auth tell who makes post , if alowed
    const token = localStorage.getItem('stranger_things_JWT')
    const url = `${baseUrl}/posts`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        },
        body: JSON.stringify({
            post: newPost 
            
        })
    
    });
    const json = await response.json();
        console.log(json);

        localStorage.setItem('stranger_things_JWT', json.data.token);
        return json;
}

export const deletePostById = async (postId) => {
    const url = `${baseUrl}/post/${postId}`;
    const response = await fetch(url, {
        method: "DELETE"
    });
    
    const json = await response.json();
    console.log(json);
    return json;
}