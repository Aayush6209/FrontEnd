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

