import axios from "axios"

const config = {
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json' 
    }
}

const axiosInstance = axios.create({
    baseUrl: 'http://localhost:3001', config  
})

export default axiosInstance