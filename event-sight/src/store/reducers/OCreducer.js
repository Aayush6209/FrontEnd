import * as actionTypes from "../actions/actionTypes";

const initialState = {
    OCList : null,
    loading : false,
    selectedOC : null,
    showAlert : false,
    AlertText : null,
    AlertColor : null
};

const OCReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.LOADING :
            return {
                ...state,
                loading : true
            }
        case actionTypes.ALL_OC_FETCHED :
            return {
                ...state,
                loading : false,
                OCList : action.OCList
            }
        case actionTypes.SELECT_OC :
            return {
                ...state,
                selectedOC : action.OC
            }
        case actionTypes.FOLLOW_REQUEST_ACCEPTED :
            return {
                ...state,
                showAlert : true,
                AlertText : "Following " + action.newOC.name,
                AlertColor : "success",
                selectedOC : action.newOC
            }
        case actionTypes.FOLLOW_REQUEST_DENIED :
            return {
                ...state,
                showAlert : true,
                AlertText : "Follow Request Denied",
                AlertColor : "danger",
            }
        case actionTypes.HIDE_OC_ALERT :
            return {
                ...state,
                showAlert : false,
                AlertColor : null,
                AlertText : null
            }
        case actionTypes.UNFOLLOW_REQUEST_ACCEPTED :
            return {
                ...state,
                showAlert : true,
                AlertText : "Unfollowed " + action.newOC.name,
                AlertColor : "warning",
                selectedOC : action.newOC
            }
        case actionTypes.UNFOLLOW_REQUEST_DENIED :
            return {
                ...state,
                showAlert : true,
                AlertText : "Unfollow Request Denied",
                AlertColor : "danger",
            }
        default : return state;
    }
    
}

export default OCReducer;