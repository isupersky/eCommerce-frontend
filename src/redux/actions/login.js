import * as actionTypes from "./actionTypes";

export const loginSuccess = (access_token) => {
  console.log("loginSuccess Action triggered", access_token);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    access_token: access_token,
  };
};

export const passwordChangeLogoutSuccess = () => {
  console.log("passwordChangeLogoutSuccess Action triggered");
  return {
    type: actionTypes.PASSWORD_CHANGE_LOGOUT_SUCCESS
  };
};

export const logoutSuccess = () => {
  console.log("logoutSuccess Action triggered");
  return {
    type: actionTypes.PASSWORD_CHANGE_LOGOUT_SUCCESS
  };
};