import axios from "axios";

const baseURL = 'http://localhost:9000'

export default axios.create({
    baseURL,
})