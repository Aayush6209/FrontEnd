import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const signupInit = (user)=>{
    return (dispatch)=>{
        axios.post("",user)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}