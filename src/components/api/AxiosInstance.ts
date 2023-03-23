import axios from "axios";

export const AxiosInstance = axios.create({
    method: 'GET',
    baseURL :'https://api.github.com'
})