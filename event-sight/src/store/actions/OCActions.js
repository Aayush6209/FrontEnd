import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

//export const fetchAllOC = (sid, token)=>{
export const fetchAllOC = ()=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/club_display/"
        axios.get(requestURL)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}