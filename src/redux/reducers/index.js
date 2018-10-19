import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
    auth : AuthReducer,
    loginReducer : LoginReducer,
})