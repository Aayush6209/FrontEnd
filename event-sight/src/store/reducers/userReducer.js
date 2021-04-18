import * as actionTypes from "../actions/actionTypes";

const initialState = {
        firstName :  null || localStorage.getItem("firstName"),
        lastName :  null || localStorage.getItem("lastName"),
        sid :  null || localStorage.getItem("sid"),
        branch : null || localStorage.getItem("branch"),
        email : null || localStorage.getItem("email"),
        password :  null || localStorage.getItem("password"),
        token : null || localStorage.getItem("token"),
        showAlert : false,
        AlertColor : null,
        AlertText : null,
        role : null || localStorage.getItem("role"),
        OCName : null || localStorage.getItem("OCName")
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SIGNUP_SUCCESS :
            return {
                ...state,
                ...action.userInfo,
                role : "Student",
                showAlert : true,
                AlertColor : "success",
                AlertText : "Welcome " + action.userInfo.firstName
            }
        case actionTypes.HIDE_ALERT :
            return {
                ...state,
                showAlert : false,
                AlertText : null,
                AlertColor : null
            }
        case actionTypes.SIGNUP_FAILED :
            return {
                ...state,
                showAlert : true,
                AlertColor : "danger",
                AlertText : "Invalid Credentials or User Already Exists"
            }
        case actionTypes.LOGOUT :
            return {
                firstName :  null,
                lastName :  null,
                sid :  null,
                branch : null,
                email : null,
                password :  null,
                token : null,
                showAlert : false,
                AlertColor : null,
                AlertText : null,
                role : null,
                OCName : null
            }
        case actionTypes.LOGIN_SUCCESS :
            return {
                ...state,
                ...action.userInfo,
                showAlert : true,
                AlertColor : "success",
                AlertText : "Welcome " + action.userInfo.firstName
            }
        case actionTypes.LOGIN_FAILED :
            return {
                ...state,
                showAlert : true,
                AlertColor : "danger",
                AlertText : "Invalid Login Credentials"
            }
        default : return state;
    }
}

export default userReducer;