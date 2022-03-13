import React, { useEffect, useState } from 'react';
import api from '../../services/serviceConfig';
import {Link} from 'react-router-dom'
import moment from 'moment';

export default function Dashboard(props) {
    const [posts,setPosts] = useState([]);

    

    useEffect(() => {
        async function fetchAllPosts() {
            await api.get('list-all-posts')
            .then(res => {
                setPosts( res.data )
            })
        }
        fetchAllPosts();    
    }, []);

    function handleTyping(ev) {
        // setContent(contentStr + ev.key);
        // console.log(ev);
        // props.onChange({target: {value: contentStr}});
    }

    function deletePost(id) {
        // console.log(id);
        // api.post('delete-post', {id: id})
        //     .then(res => {
        //         setPosts( res.data )
        // })
    }


    function renderPosts() {
        console.log(posts);
        if (posts.length > 0) {
            const postsComponents = posts.map(function (post, key) {

                return (
                    <div className="post-card-admin" to={post.slug} key={post.id}>
                        <p>{post.title}</p>
                        <p className="post-date-admin">{moment(post.created_at).format("LL")}</p>
    
                        <button onClick={()=> deletePost(post.id)}></button>
                    </div>
                )
            })
            
            return postsComponents  
        }
        
    }





    return (
        <>
            <Link to="/escrever">Escrever</Link>
        {renderPosts()}
        {/* {console.log(posts)} */}
        </>
    );
}

