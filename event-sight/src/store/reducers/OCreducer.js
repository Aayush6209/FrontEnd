import * as actionTypes from "../actions/actionTypes";

const initialState = {
    OCList : null,
    loading : false,
    selectedOC : null,
    showAlert : false,
    AlertText : null,
    AlertColor : null
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
        default : return state;
    }
    
}

export default OCReducer;