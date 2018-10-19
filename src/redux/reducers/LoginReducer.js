import {
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER_FAILED,
    LOGIN_USER,
    LOGIN_LOADING,
} from '../actions/types';

const INITIAL_STATE = {
    //Login Form
    Login_Email: '',
    Login_Password: '',
    Login_error: '',
    Login_user: null,
    Login_loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_EMAIL_CHANGED:
            return { ...state, Login_Email: action.payload };
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, Login_Password: action.payload };
        case LOGIN_LOADING:
            return { ...state, Login_error: '', Login_loading: true };
        case LOGIN_USER:
            return { ...state, ...INITIAL_STATE, Login_user: action.payload };
        case LOGIN_USER_FAILED:
            return { ...state, Login_loading: false, Login_error: action.payload  };
        default:
            return state;
    }

};
