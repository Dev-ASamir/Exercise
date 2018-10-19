import {
    NAME_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGIN_LOADING,


} from '../actions/types';

const INITIAL_STATE = {
    //Register Form
    Name: '',
    Email: '',
    Password: '',
    error: '',
    user: null,
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return { ...state, Name: action.payload };
        case EMAIL_CHANGED:
            return { ...state, Email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, Password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: false, error: '' };
        case LOGIN_LOADING:
            return { ...state, error: '', loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE,loading: false, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }

};
