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
            "token" : "CtqbsteIyuHm20jpLAEh87Oyl6CQ4J2w",
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
            "token" : "CtqbsteIyuHm20jpLAEh87Oyl6CQ4J2w",
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