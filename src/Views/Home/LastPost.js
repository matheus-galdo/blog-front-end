import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom'


function LastPost(props) {

    const [post, setPost]  = useState(props.post)
    return (
        <div>
            Mais Recente
            
            <Link to={"post/"+post.slug}>
                <h1 style={{color: "red"}}>{post.title}</h1>
                <p>{post.description}</p>
            </Link>
        </div>
    );
}

export default LastPost