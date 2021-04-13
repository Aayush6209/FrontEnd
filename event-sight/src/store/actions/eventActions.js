import * as actionTypes from "./actionTypes";
import axios from "axios";

export const createNewEvent = (event)=>{
    return dispatch =>{
        axios.post("", event)
        .then((res)=>{
            console.log(res)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const displayRegisteredEvents = ()=>{
    return dispatch =>{
        dispatch(displayRegisteredEventsReq)
        axios
        .get('')
        .then(res => {
            const events = res.data
            dispatch(displayRegisteredEventsSuccess(events))
        })
        .catch(error => {
            dispatch(displayRegisteredEventsFailure(error))
        })
    }
}

export const displayRegisteredEventsReq = ()=>{
    return {
        type: actionTypes.DISPLAY_REGISTERED_EVENTS_REQ,
    }
}

export const displayRegisteredEventsSuccess = events=>{
    return {
        type: actionTypes.DISPLAY_REGISTERED_EVENTS_SUCCESS,
        payload: events
    }
}

export const displayRegisteredEventsFailure = error=>{
    return {
        type: actionTypes.DISPLAY_REGISTERED_EVENTS_FAILURE,
        payload: error
    }
}