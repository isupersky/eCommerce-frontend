import * as actionTypes from "./actionTypes";

export const loginSuccess = (access_token) => {
  console.log("Action triggered", access_token);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    access_token: access_token,
  };
};

export const passwordChangeLogoutSuccess = () => {
  console.log("Action triggered");
  return {
    type: actionTypes.PASSWORD_CHANGE_LOGOUT_SUCCESS
  };
};