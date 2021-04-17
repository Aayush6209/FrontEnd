import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

//export const fetchAllOC = (sid, token)=>{
export const fetchAllOC = ()=>{
    return (dispatch)=>{
        dispatch({type : actionTypes.LOADING})
        const requestURL = "http://127.0.0.1:8000/club_display/"
        axios.get(requestURL)
        .then((res)=>{
            console.log(res)
            dispatch({
                type : actionTypes.ALL_OC_FETCHED,
                OCList : res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

// export const followRequestInit = (sid, token, OCName)=>{
export const followRequestInit = (OCName)=>{
    return (dispatch) => {
        const requestURL = "http://127.0.0.1:8000/club_follow/";
        const data = {
            "student_id" : "19103007",
            "token" : "1WmHEuta8nQI1dqbG5Wxuamus6ThIRYi",
            "name" : OCName
        };
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res)
            dispatch({
                type : actionTypes.FOLLOW_REQUEST_ACCEPTED,
                newOC : res.data
            })
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type : actionTypes.FOLLOW_REQUEST_DENIED
            })
        })
    }
}

// export const unfollowRequestInit = (sid, token, OCName)=>{
export const unfollowRequestInit = (OCName)=>{
    return (dispatch) => {
        const requestURL = "http://127.0.0.1:8000/club_unfollow/";
        const data = {
            "student_id" : "19103007",
            "token" : "1WmHEuta8nQI1dqbG5Wxuamus6ThIRYi",
            "name" : OCName
        };
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res)
            dispatch({
                type : actionTypes.UNFOLLOW_REQUEST_ACCEPTED,
                newOC : res.data
            })
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type : actionTypes.UNFOLLOW_REQUEST_DENIED
            })
        })
    }
}

export const fetchOC = (OCName)=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/fetch_club/";
        const data = {
            "name" : OCName
        }
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res)
            dispatch({
                type : actionTypes.FETCHED_OC,
                OC : res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

// export const sendMemberRequest = (sid, token, OCName)=>{
export const sendMemberRequest = (OCName)=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/member_request/";
        const data = {
            "name" : OCName,
            "student_id" : "19103007",
            "token" : "1WmHEuta8nQI1dqbG5Wxuamus6ThIRYi"
        }
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res)
            dispatch({
                type : actionTypes.MEMBER_REQUEST_SENT
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

// export const checkMemberRequest = (sid, token, OCName)=>{
export const checkMemberRequest = (OCName)=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/member_request_check/";
        const data = {
            "name" : OCName,
            "student_id" : "19103007",
            "token" : "1WmHEuta8nQI1dqbG5Wxuamus6ThIRYi"
        }
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res)
            if(res.statusText === "OK"){
            dispatch({type : actionTypes.MEMBER_REQUEST_EXISTS})}
            else {
                dispatch({type : actionTypes.MEMBER_REQUEST_NOT_EXISTS})
            }
        })
        .catch((err)=>{
            console.log(err)
            dispatch({type : actionTypes.MEMBER_REQUEST_NOT_EXISTS})
        })
    }
}


// export const sendMemberRemoveRequest = (sid, token, OCName)=>{
export const sendMemberRemoveRequest = (OCName)=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/remove_member/";
        const data = {
            "name" : OCName,
            "student_id" : "19103007",
            "token" : "1WmHEuta8nQI1dqbG5Wxuamus6ThIRYi"
        };
        console.log(data)
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res)
            dispatch({
                type : actionTypes.MEMBER_REMOVED,
                OC : res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


//---------------------------------ADMIN ACTIONS---------------------------

// export const fetchMemberRequests = (sid, token)=>{
export const fetchMemberRequests = ()=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/get_members_requested/";
        const data = {
            "student_id" : "19103007",
            "token" : "1WmHEuta8nQI1dqbG5Wxuamus6ThIRYi"
        }
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res.data)
            dispatch({
                type : actionTypes.FETCHED_MEMBER_REQUESTS,
                fetchedMemberRequests : res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }   
}

// export const respondMemberRequests = (sid, token, OCName, response)=>{
export const respondMemberRequests = (sid, response)=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/member_request_verify/";
        const data = {
            "student_id" : sid,
            "club" : "Hindi Editorial Board",
            "token" : "1WmHEuta8nQI1dqbG5Wxuamus6ThIRYi",
            "accepted" : response
        };
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
