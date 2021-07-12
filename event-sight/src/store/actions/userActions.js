import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const signupInit = (user)=>{
    return (dispatch)=>{
        const requestURl = "register/";
        console.log("new code");
        const data = {
          "password": user.password,
          "username": user.sid,
          "first_name": user.firstName,
          "last_name": user.lastName,
          "email": user.email,
          //"branch": user.branch
        };
        axios.post(requestURl, data).then((res)=>{
            console.log(res);
        localStorage.setItem("firstName", user.firstName)
        localStorage.setItem("lastName", user.lastName)
        localStorage.setItem("sid", user.sid)
        localStorage.setItem("branch", user.branch)
        localStorage.setItem("email", user.email)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("role", "Student")
        localStorage.setItem("OCName", "")
        //   dispatch({
        //       type : actionTypes.SIGNUP_SUCCESS,
        //       userInfo : {
        //           ...user,
        //           token : res.data.token,
        //           role : "Student",
        //       }
        //   })
        }).catch((err)=>{
          dispatch({
              type : actionTypes.SIGNUP_FAILED
          })
        });
    }
}

export const loginInit = (user)=>{
    return (dispatch)=>{
        const requestURL = "/";
        console.log(user.sid);
        const data = {
            "password" : String(user.password),
            "username" : user.sid,
           // "role" : user.role,
           // "club" : user.OC
        }
        console.log("Hello world");
        axios.post(requestURL, data)
        .then((res)=>{
            console.log(res);
            // localStorage.setItem("firstName", res.data.credentials.first_name)
            // localStorage.setItem("lastName", res.data.credentials.last_name)
            // localStorage.setItem("sid", res.data.credentials.student_id)
            // localStorage.setItem("branch", res.data.credentials.branch)
            // localStorage.setItem("email", res.data.credentials.email)
            localStorage.setItem("token", res.data.access)
            localStorage.setItem("role", user.role)
            // localStorage.setItem("OCName", user.OC)
            // const userData = {
            //     firstName :  res.data.credentials.first_name,
            //     lastName :  res.data.credentials.last_name,
            //     sid :  res.data.credentials.student_id,
            //     branch : res.data.credentials.branch,
            //     email : res.data.credentials.email,
            //     // password :  res.data.credentials.password,
            //     token : res.data.token,
            //     role : user.role,
            //     OCName : user.OC 
            // }
            // dispatch({
            //     type : actionTypes.LOGIN_SUCCESS,
            //     userInfo : userData
            // })
            
        })
        .catch((err)=>{
            dispatch({
                type : actionTypes.LOGIN_FAILED
            })
        })
    }
}

export const userProfile = ()=>{
    return dispatch =>{
        dispatch(profileLoading)
        const requestURL = "user-profile/";
        axios
        .get(requestURL,
            {   headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            }
            )
        .then((res)=>{
            dispatch(userProfileSuccess(res.data));
            console.log(res)
        })
        .catch((err)=>{
            dispatch(userProfileFailure(err));
        })
    }
}
export const profileLoading = ()=>{
    return {
        type: actionTypes.PROFILE_LOADING,
    }
}

export const userProfileSuccess = data=>{
    return {
        type: actionTypes.USER_PROFILE_SUCCESS,
        profile: data,
    }
}

export const userProfileFailure = error=>{
    return {
        type: actionTypes.USER_PROFILE_FAILURE,
        payload: error
    }
}


export const logout = (sid, token)=>{
    return (dispatch)=>{
        // const requestURL = "logout/";
        // const data = {
        //     "student_id" : sid,
        //     "token" : token
        // }
        //axios.post(re)
       //axios.post(requestURL, data, 
        //    headers : {
        //        "Authorization" : "Token "+token
        //    }
       //)
       // .then((res)=>{
            localStorage.removeItem("firstName")
            localStorage.removeItem("lastName")
            localStorage.removeItem("sid")
            localStorage.removeItem("branch")
            localStorage.removeItem("email")
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            localStorage.removeItem("OCName")
            dispatch({
                type : actionTypes.LOGOUT
            })
        // })
        // .catch((err)=>{
        // })
    }
}