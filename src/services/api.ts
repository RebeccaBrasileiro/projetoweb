import axios from "axios";

const api = axios.create({
    baseURL:"https://adonisweb2.herokuapp.com/",
    headers:{
        'Content-Type': 'application/json'
    }
})

export default api