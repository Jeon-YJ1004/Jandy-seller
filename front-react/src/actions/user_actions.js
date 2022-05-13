import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    AUTH_USER
} from "./types";

// import axios from 'axios';

export const loginUser = (dataToSubmit) => {
    const request = "LoginSuccess"
    console.log("login")
    // axios.post('/api/v1/users/login', dataToSubmit)
    // .then(response => response.data);
    return {
        type : LOGIN_USER,
        payload : request
    }
}

export const registerUser = (dataToSubmit) => {
    const request = setTimeout(() => {
        return "LOGINSUCCESS"
    }, 3000);
    // axios.post('/api/v1/users/register', dataToSubmit)
    // .then(response => response.data)
    return {
        type : REGISTER_USER,
        payload : request
    }
}


    


