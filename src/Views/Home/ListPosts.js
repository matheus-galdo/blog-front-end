import React, { useEffect, useState } from 'react';
import api from '../../services/serviceConfig';
import LastPost from './LastPost';
import { Link } from 'react-router-dom'
import moment from 'moment';
import PostCard from '../../components/PostCard';
import { getPosts } from '../../services/PostService';

function ListPosts(params) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
        });
    }, []);





    function renderPosts() {
        const postsComponents = posts.map(function (post, key) {

            return <PostCard post={post} />
            return (
                <Link className="post-card" to={post.slug} key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <p className="post-date">{moment(post.created_at).format("LL")}</p>
                </Link>
            )
        })

        return postsComponents
    }





    return (
        <>{renderPosts()}
            {/* {console.log(posts)} */}
        </>
    );
}

export default ListPosts