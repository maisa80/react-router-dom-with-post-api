import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

function Post() {
    const [post, setPost] = useState({});
    // Retrives the id in the URL, through the placeholder, that was specified in App.js, row 25 (:callItWhateverYouWant)
    let params = useParams();
    console.log(params)
    
    const fetchPost = async () => {
        try {
            // Uses the placeholder ":callItWhateverYouWant" to make a request, for fetching a specific post by a post-id
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.callItWhateverYouWant);
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => { fetchPost() }, [])
    
    return (
    <div>
        <h1>Post with ID: {post.id}</h1>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
    )
}

export default Post