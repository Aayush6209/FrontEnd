import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios";


export const fetchAllOC = ()=>{
    return (dispatch)=>{
        dispatch({type : actionTypes.LOADING})
        const requestURL = "club_display/"
        axios.get(requestURL)
        .then((res)=>{
            dispatch({
                type : actionTypes.ALL_OC_FETCHED,
                OCList : res.data
            })
        })
        .catch((err)=>{
        })
    }
}

export const followRequestInit = (sid, token, OCName)=>{
    return (dispatch) => {
        const requestURL = "club_follow/";
        const data = {
            "student_id" : sid,
            "token" : token,
            "name" : OCName
        };
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.FOLLOW_REQUEST_ACCEPTED,
                newOC : res.data
            })
        })
        .catch((err)=>{
            dispatch({
                type : actionTypes.FOLLOW_REQUEST_DENIED
            })
        })
    }
}

export const unfollowRequestInit = (sid, token, OCName)=>{
    return (dispatch) => {
        const requestURL = "club_unfollow/";
        const data = {
            "student_id" : sid,
            "token" : token,
            "name" : OCName
        };
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.UNFOLLOW_REQUEST_ACCEPTED,
                newOC : res.data
            })
        })
        .catch((err)=>{
            dispatch({
                type : actionTypes.UNFOLLOW_REQUEST_DENIED
            })
        })
    }
}

export const fetchOC = (OCName)=>{
    return (dispatch)=>{
        const requestURL = "fetch_club/";
        const data = {
            "name" : OCName
        }
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.FETCHED_OC,
                OC : res.data
            })
        })
        .catch((err)=>{
        })
    }
}

export const sendMemberRequest = (sid, token, OCName)=>{
    return (dispatch)=>{
        const requestURL = "member_request/";
        const data = {
            "name" : OCName,
            "student_id" : sid,
            "token" : token
        }
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.MEMBER_REQUEST_SENT
            })
        })
        .catch((err)=>{
        })
    }
}

export const checkMemberRequest = (sid, token, OCName)=>{
    return (dispatch)=>{
        const requestURL = "member_request_check/";
        const data = {
            "name" : OCName,
            "student_id" : sid,
            "token" : token
        }
        axios.post(requestURL, data)
        .then((res)=>{
            if(res.statusText === "OK"){
            dispatch({type : actionTypes.MEMBER_REQUEST_EXISTS})}
            else {
                dispatch({type : actionTypes.MEMBER_REQUEST_NOT_EXISTS})
            }
        })
        .catch((err)=>{
            dispatch({type : actionTypes.MEMBER_REQUEST_NOT_EXISTS})
        })
    }
}


export const sendMemberRemoveRequest = (sid, token, OCName)=>{
    return (dispatch)=>{
        const requestURL = "remove_member/";
        const data = {
            "name" : OCName,
            "student_id" : sid,
            "token" : token
        };
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.MEMBER_REMOVED,
                OC : res.data
            })
        })
        .catch((err)=>{
        })
    }
}


//---------------------------------ADMIN ACTIONS---------------------------

export const fetchMemberRequests = (sid, token)=>{
    return (dispatch)=>{
        const requestURL = "get_members_requested/";
        const data = {
            "student_id" : sid,
            "token" : token
        }
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.FETCHED_MEMBER_REQUESTS,
                fetchedMemberRequests : res.data
            })
        })
        .catch((err)=>{
        })
    }   
}

export const respondMemberRequests = (sid, token, OCName, response, adminSID)=>{
    return (dispatch)=>{
        const requestURL = "member_request_verify/";
        const data = {
            "student_id" : sid,
            "club" : OCName,
            "token" : token,
            "accepted" : response,
            "admin_id" : adminSID
        };
        axios.post(requestURL, data)
        .then((res)=>{
            if(response){
                dispatch({type : actionTypes.MEMBER_REQUEST_ACCEPTED})
            }else{
                dispatch({type : actionTypes.MEMBER_REQUEST_REJECTED})
            }
        })
        .catch((err)=>{
        })
    }
}
