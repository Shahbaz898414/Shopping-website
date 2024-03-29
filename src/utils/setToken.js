import axios from "axios"


const setToken = (token) => {
    if (token) {
        axios.defaults.headers.authorization = token
    } else {
        delete axios.defaults.headers.authorization
    }
}

export default setToken