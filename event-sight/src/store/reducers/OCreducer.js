import * as actionTypes from "../actions/actionTypes";

const initialState = {
    OCList : null,
    loading : false,
    selectedOC : null,
    showAlert : false,
    AlertText : null,
    AlertColor : null,
    membershipRequested : false,
    fetchedMemberRequests : null
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
        case actionTypes.FETCHED_OC :
            return {
                ...state,
                selectedOC : action.OC
            }
        case actionTypes.MEMBER_REQUEST_SENT :
            return {
                ...state,
                showAlert : true,
                AlertText : "Member Request Sent",
                AlertColor : "success"
            }
        case actionTypes.MEMBER_REQUEST_EXISTS :
            return {
                ...state,
                membershipRequested : true
            }
        case actionTypes.MEMBER_REQUEST_NOT_EXISTS :
            return {
                ...state,
                membershipRequested : false
            }
        case actionTypes.MEMBER_REMOVED :
            return {
                ...state,
                selectedOC : action.OC,
                showAlert : true,
                AlertText : "You are NOT a member now",
                AlertColor : "danger"
            }
        case actionTypes.FETCHED_MEMBER_REQUESTS :
            return {
                ...state,
                fetchedMemberRequests : action.fetchedMemberRequests
            }
        case actionTypes.MEMBER_REQUEST_ACCEPTED :
            return {
                ...state,
                showAlert : true,
                AlertColor : "success",
                AlertText : "Membership Accepted"
            }
        case actionTypes.MEMBER_REQUEST_REJECTED :
            return {
                ...state,
                showAlert : true,
                AlertColor : "danger",
                AlertText : "Membership Rejected"
            }
        default : return state;
    }
    
}

export default OCReducer;