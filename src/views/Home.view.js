import React, { useEffect, useState } from 'react';
import TerminalLocation from '../components/TerminalLocation';
import PostCard from '../components/PostCard';
import { getPosts } from '../services/PostsService';

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
        });
    }, []);


    return <div>
        <TerminalLocation />
        {posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
}

export default Home;
