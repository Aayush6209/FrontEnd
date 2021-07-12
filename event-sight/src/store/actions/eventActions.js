import * as actionTypes from "./actionTypes";
import axios from "../../axios";


export const eventLoading = ()=>{
    return {
        type: actionTypes.EVENT_LOADING,
    }
}

export const createNewEvent = (sid, token, event, image)=>{
    return (dispatch) =>{
        const requestURL = "create_event/";
        const data = new FormData();
        // const data = {
        //     "title" : event.eventTitle,
        //     "description" : event.eventDescription,
        //     "details" : event.eventDetails,
        //     "date_time" : event.eventDate + " " + event.eventTime + ":00",
        //     "open_to_all" : event.eventType === "MemberSpecific" ? "False" : "True",
        //     "image_url" : event.eventImgURL,
        //     "student_id" : sid,
        //     "token" : token
        // };
        data.append("title", event.eventTitle);
        data.append("description", event.eventDescription);
        data.append("details", event.eventDetails);
        data.append("date_time", event.eventDate + " " + event.eventTime + ":00");
        data.append("open_to_all", event.eventType === "MemberSpecific" ? "False" : "True");
        data.append("image_url", event.eventImgURL);
        data.append("image", image);
        data.append("student_id", sid);
        data.append("token", token);
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({type : actionTypes.EVENT_CREATE_SUCCESS})
        })
        .catch((err)=>{
            dispatch({type : actionTypes.EVENT_CREATE_FAILED})
        })
    }
}

export const updateEvent = (sid, token, event, id)=>{
    return (dispatch)=>{
        const requestURL = "update_event/"+id+"/";
        const data = {
            "title" : event.eventTitle,
            "description" : event.eventDescription,
            "details" : event.eventDetails,
            "date_time" : event.eventDate + " " + event.eventTime + ":00",
            "open_to_all" : event.eventType === "MemberSpecific" ? "False" : "True",
            "image_url" : event.eventImgURL,
            "student_id" : sid,
            "token" : token
        };
        axios.put(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.EVENT_UPDATE_SUCCESS
            })
        })
        .catch((err)=>{
            dispatch({
                type : actionTypes.EVENT_UPDATE_FAILED
            })
        })
    }
}

// EVENT DISPLAY
export const displayEvents = ()=>{
    return dispatch =>{
        dispatch(eventLoading)
        const requestURL = "event-display/?ordering=-date_time";
        axios
        .get(requestURL,
            {   headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            }
            )
        .then((res)=>{
            dispatch(displayEventsSuccess(res.data));
            console.log(res)
        })
        .catch((err)=>{
            dispatch(displayEventsFailure(err));
        })
    }
}

export const displayEventsSuccess = data=>{
    return {
        type: actionTypes.EVENTS_DISPLAY_SUCCESS,
        events: data,
    }
}

export const displayEventsFailure = error=>{
    return {
        type: actionTypes.EVENTS_DISPLAY_FAILURE,
        payload: error
    }
}

export const selectEvent=(id)=>{
    return dispatch=>{
        const requestURL = "get_event_via_id/";
        const data={
            "event_id": id
        };
        axios
        .post(requestURL, data)
        .then((res)=>{
            dispatch(selectEventSuccess(res.data));
        })
        .catch((err)=>{
        })
    }
}

export const clubEvents = (sid, token, clubID)=>{
    return dispatch =>{
        dispatch(eventLoading)
        const requestURL = "get_events_via_club/";
        const data = {
            "student_id" : sid,
            "token" : token,
            "club_id": clubID,
        };
        axios
        .post(requestURL, data)
        .then((res)=>{
            dispatch(clubEventsSuccess(res.data));
        })
        .catch((err)=>{
            dispatch(clubEventsFailure(err));
        })
    }
}

export const clubEventsSuccess = data=>{
    return {
        type: actionTypes.CLUB_EVENTS_SUCCESS,
        events: data,
    }
}

export const clubEventsFailure = error=>{
    return {
        type: actionTypes.CLUB_EVENTS_FAILURE,
        payload: error
    }
}

export const selectEventSuccess=data=>{
    return {
        type: actionTypes.SELECT_EVENT,
        selectedEvent: data,
    }
}

// EVENT REGISTRATION
export const registerEvent = (id, sid, token)=>{
    return dispatch =>{
        const requestURL="event_register/";
        const data={
            "id": id,
            "student_id": sid,
            "token": token,
        }
        axios
        .post(requestURL, data)
        .then(res => {
            dispatch(registerEventSuccess(res))
        })
        .catch(error => {
            dispatch(registerEventFailure(error))
        })
    }
}

export const registerEventSuccess = data=>{
    return {
        type: actionTypes.EVENT_REGISTRATION_SUCCESS,
        payload: data
    }
}

export const registerEventFailure = error=>{
    return {
        type: actionTypes.EVENT_REGISTRATION_FAILURE,
        payload: error
    }
}
export const cancelRegistration = (sid, token, id)=>{
    return dispatch =>{
        const requestURL="remove_interest_participation/";
        const data={
            "student_id": sid,
            "token": token,
            "event_id": id,
            "interested": false,
        }
        axios
        .post(requestURL, data)
        .then(res => {
            dispatch(cancelRegistrationSuccess(res))
        })
        .catch(error => {
            dispatch(cancelRegistrationFailure(error))
        })
    }
}

export const cancelRegistrationSuccess = data=>{
    return {
        type: actionTypes.CANCEL_REGISTRATION_SUCCESS,
        payload: data
    }
}

export const cancelRegistrationFailure = error=>{
    return {
        type: actionTypes.CANCEL_REGISTRATION_FAILURE,
        payload: error
    }
}

// DISPLAY REGISTERED EVENTS
export const displayRegisteredEvents = ()=>{
    return dispatch =>{
        dispatch(eventLoading)
        const requestURL="participated-events-display/?ordering=-date_time";
        axios
        .get(requestURL,
            {   headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            }
            )
        .then(res => {
            dispatch(displayRegisteredEventsSuccess(res.data));
            console.log(res)
        })
        .catch(error => {
            dispatch(displayRegisteredEventsFailure(error))
        })
    }
}

export const displayRegisteredEventsSuccess = data=>{
    return {
        type: actionTypes.DISPLAY_REGISTERED_EVENTS_SUCCESS,
        events: data
    }
}

export const displayRegisteredEventsFailure = error=>{
    return {
        type: actionTypes.DISPLAY_REGISTERED_EVENTS_FAILURE,
        payload: error
    }
}

// ADD EVENT TO INTERESTED
export const interested = (id, sid, token)=>{
    return dispatch =>{
        const requestURL="event_interested/"
        const data={
            "id": id,
            "student_id": sid,
            "token": token,
        }
        axios
        .post(requestURL, data)
        .then(res => {
            dispatch(interestedSuccess(res))
        })
        .catch(error => {
            dispatch(interestedFailure(error))
        })
    }
}

export const interestedSuccess = data=>{
    return {
        type: actionTypes.EVENT_INTERESTED_SUCCESS,
        payload: data,
    }
}

export const interestedFailure = error=>{
    return {
        type: actionTypes.EVENT_INTERESTED_FAILURE,
        payload: error
    }
}

export const cancelInterested = (sid, token, id)=>{
    return dispatch =>{
        const requestURL="remove_interest_participation/";
        const data={
            "student_id": sid,
            "token": token,
            "event_id": id,
            "interested": true,
        }
        axios
        .post(requestURL, data)
        .then(res => {
            dispatch(cancelInterestedSuccess(res))
        })
        .catch(error => {
            dispatch(cancelInterestedFailure(error))
        })
    }
}

export const cancelInterestedSuccess = data=>{
    return {
        type: actionTypes.CANCEL_INTERESTED_SUCCESS,
        payload: data
    }
}

export const cancelInterestedFailure = error=>{
    return {
        type: actionTypes.CANCEL_INTERESTED_FAILURE,
        payload: error
    }
}

//DISPLAY INTERESTED EVENTS
export const displayInterestedEvents = ()=>{
    return dispatch =>{
        dispatch(eventLoading)
        const requestURL="interested-events-display/?ordering=-date_time";
        
        axios
        .get(requestURL,
            {   headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            }
            )
        .then(res => {
            dispatch(displayInterestedEventsSuccess(res.data));
            console.log(res)
        })
        .catch(error => {
            dispatch(displayInterestedEventsFailure(error))
        })
    }
}

export const displayInterestedEventsSuccess = data=>{
    return {
        type: actionTypes.DISPLAY_INTERESTED_EVENTS_SUCCESS,
        events: data
    }
}

export const displayInterestedEventsFailure = error=>{
    return {
        type: actionTypes.DISPLAY_INTERESTED_EVENTS_FAILURE,
        payload: error
    }
}

// POST COMMENT
export const postComment = (sid, token, comment, id)=>{
    return dispatch =>{
        const requestURL = "create_comment/";
        const data={
            "student_id":sid,
            "token": token,
            "comment_text": comment,
            "event_id": id,
        }
        axios
        .post(requestURL, data)
        .then(res => {
            dispatch(postCommentSuccess(res))
        })
        .catch(error => {
            dispatch(postCommentFailure(error))
        })
    }
}

export const postCommentSuccess = data=>{
    return {
        type: actionTypes.POST_COMMENT_SUCCESS,
        payload: data
    }
}

export const postCommentFailure = error=>{
    return {
        type: actionTypes.POST_COMMENT_FAILURE,
        payload: error
    }
}

//DISPLAY COMMENTS
export const displayComments = (id)=>{
    return dispatch =>{
        dispatch(eventLoading)
        const requestURL="display_comments/";
        const data={
            "event_id": id,
        }
        axios
        .post(requestURL, data)
        .then(res => {
            dispatch(displayCommentsSuccess(res.data))
        })
        .catch(error => {
            dispatch(displayCommentsFailure(error))
        })
    }
}

export const displayCommentsSuccess = data=>{
    return {
        type: actionTypes.DISPLAY_COMMENTS_SUCCESS,
        comments: data,
    }
}

export const displayCommentsFailure = error=>{
    return {
        type: actionTypes.DISPLAY_COMMENTS_FAILURE,
        payload: error
    }
}


export const fetchRegisteredStudents = (sid, eventID, token)=>{
    return (dispatch)=>{
        const requestURL = "all_interested_participants/";
        const data = {
            "student_id" : sid,
            "admin_id" : sid,
            "event_id" : eventID,
            "token" : token,
            "interested" : false
        }
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.REGISTERED_STUDENTS_FETCHED,
                registeredStudents : res.data
            })
        })
        .catch((err)=>{
            dispatch({
                type : actionTypes.REGISTERED_STUDENTS_FETCH_FAILED
            })
        })
    }
}


export const deleteEvent = (sid, token, eventID)=>{
    return (dispatch)=>{
        const requestURL = "delete_event/";
        const data = {
            "student_id" : sid,
            "token" : token,
            "event_id" : eventID
        }
        axios.post(requestURL, data)
        .then((res)=>{
            dispatch({
                type : actionTypes.DELETE_EVENT
            })
        })
        .catch((err)=>{})
    }
}