import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
} from '../actions/types'

const initState = {
    userToken : 0,
    Logined : false,
}

const users = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, userToken: state.userToken + 1}
        case REGISTER_USER:
            return {...state, registerSuccess : action.payload}
        case AUTH_USER:
            return {...state, userToken: state.userToken ++}
        default:
            return state;
    }
}


export default users;