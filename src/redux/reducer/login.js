import * as actionTypes from '../actions/actionTypes';

const initialState={
    token : "16da799f-e1f6-4b0e-b1a1-05914a118db3",
    isAuthenticated:true,
    role: "ROLE_SELLER"
}

const loginSuccess = (state, action) => {
    console.log("Reducer Triggered");
    console.log("Reducer", action.access_token);   
    return {
      ...state,
      token:action.access_token,
      isAuthenticated:true
    }   
}

const onUserRole = (state, action) => {
  console.log("Reducer Triggered");
  console.log("Reducer", action);   
  return {
    ...state,
    role:action.role
  }   
}

const logoutSuccess = (state) => {
    
    return {
      ...state,
      token:"",
      isAuthenticated:false
    }   
}

const passwordChangeLogoutSuccess = (state) => {
    // console.log("passwordChangeLogoutSuccess Reducer Triggered");
    
    return {
      ...state,
      token:"",
      isAuthenticated:false
    }   
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state);
        case actionTypes.USER_ROLE: return onUserRole(state,action)
        case actionTypes.PASSWORD_CHANGE_LOGOUT_SUCCESS: return passwordChangeLogoutSuccess(state);
        default: return state;
    }
}
export default reducer;