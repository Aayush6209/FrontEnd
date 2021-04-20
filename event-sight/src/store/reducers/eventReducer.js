import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  events: null,
  selectedEvent: null,
  comments: null,
  showAlert: false,
  AlertText: null,
  AlertColor: null,
};

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HIDE_EVENT_ALERT:
      return {
        ...state,
        showAlert: false,
        AlertText: null,
        AlertColor: null,
      };

    case actionTypes.EVENT_CREATE_SUCCESS:
      return {
        ...state,
        showAlert: true,
        AlertText: "Event Created Successfully",
        AlertColor: "success",
      };

    case actionTypes.EVENT_CREATE_FAILED:
      return {
        ...state,
        showAlert: true,
        AlertText: "Event Creation Failed",
        AlertColor: "danger",
      };

    case actionTypes.EVENT_UPDATE_SUCCESS:
      return {
        ...state,
        showAlert: true,
        AlertColor: "success",
      };
    case actionTypes.EVENT_UPDATE_FAILED:
      return {
        ...state,
        showAlert: true,
        AlertColor: "danger",
      };
    case actionTypes.EVENT_LOADING:
      return {
        ...state,
        loading: true,
      };

    //EVENTS DISPLAY
    case actionTypes.EVENTS_DISPLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.events,
      };
    case actionTypes.EVENTS_DISPLAY_FAILURE:
      return {
        ...state,
        loading: false,
        showAlert: true,
        AlertText: "Unable to Load Events",
        AlertColor: "danger",
      };

    case actionTypes.SELECT_EVENT:
      return {
        ...state,
        selectedEvent: action.selectedEvent,
      };

    case actionTypes.CLUB_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.events,
      };
    case actionTypes.CLUB_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        showAlert: true,
        AlertText: "Unable to Load Events",
        AlertColor: "danger",
      };

    //EVENT REGISTRATION
    case actionTypes.EVENT_REGISTRATION_SUCCESS:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.EVENT_REGISTRATION_FAILURE:
      return {
        ...state,
        showAlert: true,
      };

    //DISPLAY REGISTERED EVENTS
    case actionTypes.DISPLAY_REGISTERED_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.events,
      };
    case actionTypes.DISPLAY_REGISTERED_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        showAlert: true,
        AlertText: "Unable to Load Registered Events",
        AlertColor: "danger",
      };

    //ADD EVENT TO INTERESTED
    case actionTypes.EVENT_INTERESTED_SUCCESS:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.EVENT_INTERESTED_FAILURE:
      return {
        ...state,
        showAlert: true,
      };

    //DISPLAY INTERESTED EVENTS
    case actionTypes.DISPLAY_INTERESTED_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.events,
      };
    case actionTypes.DISPLAY_INTERESTED_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        showAlert: true,
        AlertText: "Unable to Load Interested Events",
        AlertColor: "danger",
      };

    // POST COMMENT
    case actionTypes.POST_COMMENT_SUCCESS:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.POST_COMMENT_FAILURE:
      return {
        ...state,
        showAlert: true,
      };

    // DISPLAY COMMENTS
    case actionTypes.DISPLAY_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments,
      };
    case actionTypes.DISPLAY_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        showAlert: true,
        AlertText: "Unable to Load Interested Events",
        AlertColor: "danger",
      };

    default:
      return state;
  }
};

export default EventReducer;
