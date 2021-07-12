import * as actionTypes from "../actions/actionTypes";

const initialState = {
        firstName :  null || localStorage.getItem("firstName"),
        lastName :  null || localStorage.getItem("lastName"),
        sid :  null || localStorage.getItem("sid"),
        branch : null || localStorage.getItem("branch"),
        email : null || localStorage.getItem("email"),
        token : null || localStorage.getItem("token"),
        showAlert : false,
        AlertColor : null,
        AlertText : null,
        role : null || localStorage.getItem("role"),
        OCName : null || localStorage.getItem("OCName"),
        profile: null
}

const userReducer = (state = initialState, action)=>{
    switch (action.type) {
      case actionTypes.SIGNUP_SUCCESS:
        return {
          ...state,
          ...action.userInfo,
          role: "Student",
          showAlert: true,
          AlertColor: "success",
          AlertText: "Welcome " + action.userInfo.firstName,
        };
      case actionTypes.HIDE_ALERT:
        return {
          ...state,
          showAlert: false,
          AlertText: null,
          AlertColor: null,
        };
      case actionTypes.SIGNUP_FAILED:
        return {
          ...state,
          showAlert: true,
          AlertColor: "danger",
          AlertText: "Invalid Credentials or User Already Exists",
        };
      case actionTypes.LOGOUT:
        return {
          firstName: null,
          lastName: null,
          sid: null,
          branch: null,
          email: null,
          password: null,
          token: null,
          showAlert: false,
          AlertColor: null,
          AlertText: null,
          role: null,
          OCName: null,
        };
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          ...action.userInfo,
          showAlert: true,
          AlertColor: "success",
          AlertText: "Welcome " + action.userInfo.firstName,
        };
      case actionTypes.LOGIN_FAILED:
        return {
          ...state,
          showAlert: true,
          AlertColor: "danger",
          AlertText: "Invalid Login Credentials",
        };

      //User-Profile
      case actionTypes.PROFILE_LOADING:
        return {
          ...state,
          loading: true,
        };
      case actionTypes.USER_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          profile: action.profile,
        };
      case actionTypes.USER_PROFILE_FAILURE:
        return {
          ...state,
          loading: false,
          showAlert: true,
          AlertText: "Unable to Load Profile",
          AlertColor: "danger",
        };
      default:
        return state;
    }
  
}

export default userReducer;