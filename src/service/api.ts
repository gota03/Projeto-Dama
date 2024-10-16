import axios from "axios";

const api = axios.create({
    baseURL: "http://45.181.230.74:8080/api"
})

export default api;