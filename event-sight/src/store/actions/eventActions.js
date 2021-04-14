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

// EVENT REGISTRATION
export const registerEvent = (event)=>{
    return dispatch =>{
        dispatch(registerEventReq)
        axios
        .post("", event)
        .then(res => {
            dispatch(registerEventSuccess(res))
        })
        .catch(error => {
            dispatch(registerEventFailure(error))
        })
    }
}

export const registerEventReq = ()=>{
    return {
        type: actionTypes.EVENT_REGISTRATION_REQ,
    }
}

export const registerEventSuccess = events=>{
    return {
        type: actionTypes.EVENT_REGISTRATION_SUCCESS,
        payload: events
    }
}

export const registerEventFailure = error=>{
    return {
        type: actionTypes.EVENT_REGISTRATION_FAILURE,
        payload: error
    }
}


// DISPLAY REGISTERED EVENTS
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

// ADD EVENT TO INTERESTED
export const interested = (event)=>{
    return dispatch =>{
        dispatch(interestedReq)
        axios
        .post("", event)
        .then(res => {
            dispatch(interestedSuccess(res))
        })
        .catch(error => {
            dispatch(interestedFailure(error))
        })
    }
}

export const interestedReq = ()=>{
    return {
        type: actionTypes.EVENT_INTERESTED_REQ,
    }
}

export const interestedSuccess = events=>{
    return {
        type: actionTypes.EVENT_INTERESTED_SUCCESS,
        payload: events
    }
}

export const interestedFailure = error=>{
    return {
        type: actionTypes.EVENT_INTERESTED_FAILURE,
        payload: error
    }
}

//DISPLAY INTERESTED EVENTS
export const displayInterestedEvents = ()=>{
    return dispatch =>{
        dispatch(displayInterestedEventsReq)
        axios
        .get('')
        .then(res => {
            const events = res.data
            dispatch(displayInterestedEventsSuccess(events))
        })
        .catch(error => {
            dispatch(displayInterestedEventsFailure(error))
        })
    }
}

export const displayInterestedEventsReq = ()=>{
    return {
        type: actionTypes.DISPLAY_INTERESTED_EVENTS_REQ,
    }
}

export const displayInterestedEventsSuccess = events=>{
    return {
        type: actionTypes.DISPLAY_INTERESTED_EVENTS_SUCCESS,
        payload: events
    }
}

export const displayInterestedEventsFailure = error=>{
    return {
        type: actionTypes.DISPLAY_INTERESTED_EVENTS_FAILURE,
        payload: error
    }
}