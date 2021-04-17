import * as actionTypes from "./actionTypes";
import axios from "axios";

// export const createNewEvent = (event, sid, token)=>{
export const createNewEvent = (event)=>{
    return (dispatch) =>{
        const requestURL = "http://127.0.0.1:8000/create_event/";
        const data = {
            "title" : event.eventTitle,
            "description" : event.eventDescription,
            "details" : event.eventDetails,
            "date_time" : event.eventDate + " " + event.eventTime + ":00",
            "open_to_all" : event.eventType === "MemberSpecific" ? "False" : "True",
            "image_url" : event.eventImgURL,
            // "student_id" : sid,
            // "token" : token
            "student_id" : "19103007",
            "token" : "1WmHEuta8nQI1dqbG5Wxuamus6ThIRYi"
        };
        console.log(data)
        axios.post(requestURL, data)
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

// POST COMMENT
export const postComment = (comment)=>{
    return dispatch =>{
        dispatch(postCommentReq)
        axios
        .post("", comment)
        .then(res => {
            dispatch(postCommentSuccess(res))
        })
        .catch(error => {
            dispatch(postCommentFailure(error))
        })
    }
}
export const postCommentReq = ()=>{
    return {
        type: actionTypes.POST_COMMENT_REQ,
    }
}

export const postCommentSuccess = comment=>{
    return {
        type: actionTypes.POST_COMMENT_SUCCESS,
        payload: comment
    }
}

export const postCommentFailure = error=>{
    return {
        type: actionTypes.POST_COMMENT_FAILURE,
        payload: error
    }
}

//DISPLAY COMMENTS
export const displayComments = ()=>{
    return dispatch =>{
        dispatch(displayCommentsReq)
        axios
        .get('')
        .then(res => {
            const comments = res.data
            dispatch(displayCommentsSuccess(comments))
        })
        .catch(error => {
            dispatch(displayCommentsFailure(error))
        })
    }
}

export const displayCommentsReq = ()=>{
    return {
        type: actionTypes.DISPLAY_COMMENTS_REQ,
    }
}

export const displayCommentsSuccess = comments=>{
    return {
        type: actionTypes.DISPLAY_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const displayCommentsFailure = error=>{
    return {
        type: actionTypes.DISPLAY_COMMENTS_FAILURE,
        payload: error
    }
}