import * as actionTypes from "../actions/actionTypes";

const initialState = {
        firstName :  null,
        lastName :  null,
        sid :  null,
        branch : null,
        email : null,
        password :  null,
        token : null,
        showAlert : false,
        AlertColor : null,
        AlertText : null
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SIGNUP_SUCCESS :
            return {
                ...state,
                ...action.userInfo,
                showAlert : true,
                AlertColor : "success",
                AlertText : "Welcome" + action.userInfo.firstName
            }
        case actionTypes.HIDE_ALERT :
            return {
                ...state,
                showAlert : false,
                AlertText : null,
                AlertColor : null
            }
        default : return state;
    }
}

export default userReducer;