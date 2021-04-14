import * as actionTypes from "./actionTypes";
import axios from "axios";

export const signupInit = (user)=>{
    return (dispatch)=>{
        const requestURl = "http://127.0.0.1:8000/register/";
        const data = {
          "password": user.password,
          "student_id": user.sid,
          "first_name": user.firstName,
          "last_name": user.lastName,
          "email": user.email,
          "branch": user.branch
        };
        axios.post(requestURl, data).then((res)=>{
          console.log(res)
          dispatch({
              type : actionTypes.SIGNUP_SUCCESS,
              userInfo : {
                  ...user,
                  token : res.data.token
              }
          })
        }).catch((err)=>{
          console.log(err)
          dispatch({
              type : actionTypes.SIGNUP_FAILED
          })
        });
    }
}

export const loginInit = (user)=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/login/";
        const data = {
            "password" : user.password,
            "student_id" : user.sid,
            "role" : user.role,
            "club" : user.OC
        }
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