import React, {useState, useEffect} from 'react'
import PostItem from '../components/PostItem';

function Posts() {
    const [posts, setPosts] = useState([]);
    
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            // console.log(error)
        }
    }

    useEffect(() => { fetchPosts() }, [])
    

    return (
        <div>
            <h1>Posts</h1>

            <section>
                {
                    posts.map(post => <PostItem key={post.id} post={post} />)
                }
            </section>
        </div>
    )
}

export default Posts