import axios from 'axios'

const axiosPrivate =  axios.create({
    baseURL: 'http://localhost:9000',
})

export default axiosPrivate