import React, { useEffect, useState } from 'react';
import api from '../services/serviceConfig';
import moment from 'moment';
import { getPost } from '../services/PostsService';

function ReadPost({match}) {

    const [post,setPost] = useState([]);

    useEffect(() => {
        getPost(match.params.slug).then(response => {
            setPost(response.data)
        })   
    }, []);

    return (
    <div className="post">
        <div className="author">
            <img src="" />
            {/* <p>{post.user.name}</p> */}
            <p>{(post.length != 0)? moment(post.created_at).format("LL"):''}</p>
            {/* {console.log(post.user.name)} */}
        </div>
        <h1 className="title">{post.title}</h1>
        <h2 className="description">{post.description}</h2>
        <p className="post-content" dangerouslySetInnerHTML={{ __html: post.content}}></p>
    </div>  
    );    
}

export default ReadPost;