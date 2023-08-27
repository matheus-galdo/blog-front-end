import axios from 'axios';

const serviceConfig = axios.create({

    baseURL: 'http://localhost:8000/api/',
    // headers: {
    // 'Authorization': 'Bearer '+localStorage.token_jwt,

    // //'Content-Type': 'application/json',
    // //'Content-Type': 'multipart/form-data'
    // }
});

export default serviceConfig;