import Axios from "axios";

const BASE_URL = 'http://localhost:8000/api';

const getPosts = () => {
    return Axios.get(`${BASE_URL}/posts`);
}

const getPost = (slug) => {
    return Axios.get(`${BASE_URL}/posts/${slug}`);
}

const searchPost = (search) => {
    return Axios.post(`${BASE_URL}/posts/search`, {search});
}

export {
    getPosts,
    getPost,
    searchPost,
};