import axios from "axios";

const instance = axios.create({
    baseURL: "https://new-blogs-backend.onrender.com/api",
});

export default instance;
