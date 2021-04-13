import * as actionTypes from "../actions/actionTypes";

const initialState = {
  showAlert: false,
};

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_REGISTERED_EVENTS_REQ:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.DISPLAY_REGISTERED_EVENTS_REQ_SUCCESS:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.DISPLAY_REGISTERED_EVENTS_REQ_FAILURE:
      return {
        ...state,
        showAlert: true,
      };
    default:
      return state;
  }
};

export default EventReducer;
