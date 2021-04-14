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
            const userData = {
                firstName :  res.data.credentials.first_name,
                lastName :  res.data.credentials.last_name,
                sid :  res.data.credentials.student_id,
                branch : res.data.credentials.branch,
                email : res.data.credentials.email,
                password :  res.data.credentials.password,
                token : res.data.token,
                role : user.role,
                OCName : user.OC 
            }
            dispatch({
                type : actionTypes.LOGIN_SUCCESS,
                userInfo : userData
            })
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type : actionTypes.LOGIN_FAILED
            })
        })
    }
}

export const logout = (sid, token)=>{
    return (dispatch)=>{
        const requestURL = "http://127.0.0.1:8000/logout/";
        const data = {
            "student_id" : sid,
            "token" : token
        }
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res)
            dispatch({
                type : actionTypes.LOGOUT
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}