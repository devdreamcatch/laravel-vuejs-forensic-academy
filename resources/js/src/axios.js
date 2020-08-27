// axios
import axios from 'axios'

const baseURL = 'http://localhost:8082'

export default axios.create({
    baseURL,
    // You can add your headers here
    transformRequest: [function (data, headers) {
        headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
        return JSON.stringify(data)
    }],
    headers: {
        'Content-Type': 'application/json'
    }
})
