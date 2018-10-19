import { Actions } from 'react-native-router-flux';
import { validateForm, setDataToLocalStorage, } from '../../../utils'
import { userSignUp } from '../../../services';

import {
  NAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_LOADING,

} from '../types';

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};


export const loginUser = ({ Name, Email, Password }) => {
  return async (dispatch) => {
    const valid = await validateForm({ Name, Password, Email });

    if (valid.status === '1') {
      console.log(valid)
      dispatch({ type: LOGIN_LOADING });
      const result = await userSignUp({ Name, Password, Email });
      loginUserSuccess(dispatch, result);
    }
    else {
      loginUserFail(dispatch, valid.message);
    }
  }
}

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: error });
}


const loginUserSuccess = async (dispatch, user) => {
  await setDataToLocalStorage(user, '@USER_DATA')
    .then(async () => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
      });
      Actions.profile();
    });
};

