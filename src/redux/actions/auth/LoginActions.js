import { Actions } from 'react-native-router-flux';
import { validateLoginForm, setDataToLocalStorage, } from '../../../utils'
import { userSignIn } from '../../../services';

import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_LOADING,

} from '../types';



export const loginEmailChanged = (text) => {
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text
  };
};

export const loginPasswordChanged = (text) => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text
  };
};


export const signInUser = ({ Login_Email, Login_Password }) => {
  return async (dispatch) => {
    const valid = await validateLoginForm({ Login_Password, Login_Email });
    if (valid.status === '1') {
      console.log(valid)
      dispatch({ type: LOGIN_LOADING });
      const result = await userSignIn({ Login_Email, Login_Password });
      console.log(result)
      loginUserSuccess(dispatch, result);

    } else {
      loginUserFail(dispatch, valid.message);
    }
  }
}

const loginUserFail = (dispatch, Login_error) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: Login_error });
}


const loginUserSuccess = async (dispatch, user) => {
  await setDataToLocalStorage(user, '@USER_DATA')
    .then(async () => {
      dispatch({
        type: LOGIN_USER,
        payload: user
      });
      Actions.profile();
    });
};

