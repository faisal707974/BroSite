import axios from "axios"

const config = {
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
}

const axiosInstance = axios.create({
    baseUrl: 'http://100.24.52.152/', config
})

export default axiosInstance