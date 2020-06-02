import * as actionTypes from '../actions/actionTypes';

const initialState={
    token : null,
    isAuthenticated:false
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

// const loginFail = (state,action) => {
//     return updateObject(state,{
//         error:action.error,
//         loading: false
//     });
// }

// const setLoginRedirectPath = (state,action) => {
//     return updateObject(state,{loginRedirectPath: action.path});
// } 

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        // case actionTypes.LOGIN_FAIL: return loginFail(state,action);
        default: return state;
    }
}
export default reducer;