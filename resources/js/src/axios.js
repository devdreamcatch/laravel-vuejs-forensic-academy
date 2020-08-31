// axios
import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000'

const instance = axios.create({
    baseURL
});
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    })

export default instance
