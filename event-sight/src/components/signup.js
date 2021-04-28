import React, {useState} from "react";
import {Branches} from "../assets/Branches";
import { Col, Row, Button, FormGroup, Label, Input, FormText } from 'reactstrap';


import * as actionTypes from "../store/actions/actionTypes";
import * as userActions from "../store/actions/userActions";
import {connect} from "react-redux";

import ESAlert from "../UI/ESAlert";

import {formValidation} from "../formValidation";
import {Link} from "react-router-dom";

const SignUp = (props)=>{

  const [user, onUserChange] = useState({
    firstName : "",
    lastName : "",
    sid : "",
    branch : "Aerospace Engineering",
    email : "",
    password : ""
  });

  const [reEnteredPassword, setReEnteredPassword] = useState({
    value : "",
    valid : false,
    invalid : false
  })

  const changeHandler = (event)=>{
      onUserChange((prevUser)=>{
        return{
          ...prevUser,
          [event.target.name] : event.target.value
        }
      })
      if(event.target.name !== "branch"){
      let flag = formValidation(event.target.name, event.target.value)
      setValidCRED((prev)=>{return{
        ...prev,
        [event.target.name] : {
          valid : flag,
          invalid : !flag
        }
      }})
    }
  }

  const [validCRED, setValidCRED] = useState({
    "sid" : {valid : false, invalid : false},
    "firstName" : {valid : false, invalid : false},
    "lastName" : {valid : false, invalid : false},
    "email" : {valid : false, invalid : false},
    "password" : {valid : false, invalid : false},
  })

  if(props.showAlert){
    setTimeout(()=>{
      props.hideAlert();
    }, 3500);
  }

  const validator = ()=>{
    let arr = Object.values(validCRED)
    return arr.reduce((flag, key)=>{
      return (key.valid && flag)
    }, reEnteredPassword.valid)
  }

    return <> <div className="SignupDiv">
      <h1 className="Signupheader">Sign Up</h1>
      <div className="SignupForm">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input name="firstName" id="firstName" type="text" value = {user.firstName} onChange={changeHandler}
            valid = {validCRED["firstName"].valid} invalid = {validCRED["firstName"].invalid}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" id="lastName" name="lastName" value = {user.lastName} onChange={changeHandler}
            valid = {validCRED["lastName"].valid} invalid = {validCRED["lastName"].invalid}/>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="sid">SID</Label>
            <Input type="text" id="sid" name="sid" value = {user.sid} onChange={changeHandler}
            valid = {validCRED["sid"].valid} invalid = {validCRED["sid"].invalid}/>
          </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
            <Label for="branch">Select Branch</Label>
            <Input type="select" id="branch" name="branch" value = {user.branch} onChange={changeHandler}>
            {Branches.map((branch, index)=>{
              return <option key={index} >{branch}</option>
          })}</Input>
          </FormGroup>
        </Col>
      </Row>
      <Row><Col>
      <FormGroup>
            <Label for="email">Email Address</Label>
            <Input type="email" id="email" name="email" value = {user.email} onChange={changeHandler}
            valid = {validCRED["email"].valid} invalid = {validCRED["email"].invalid}/>
          </FormGroup>
      </Col></Row>
      <Row><Col>
      <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" name="password" value = {user.password} onChange={changeHandler} 
            valid = {validCRED["password"].valid} invalid = {validCRED["password"].invalid}/>
            <FormText>Password must be 7-20 Characters long and must contain one numeric and one special character</FormText>
          </FormGroup>
      </Col></Row>
      <Row><Col>
      <FormGroup>
            <Label for="repassword">Confirm Password</Label>
            <Input type="password" id="repassword" name="repassword" value = {reEnteredPassword.value} onChange={(event)=>{
              setReEnteredPassword((prev)=>{return {
                value : event.target.value,
                valid : event.target.value === user.password,
                invalid : !(event.target.value === user.password)
              }
              })
            }} valid = {reEnteredPassword.valid} invalid = {reEnteredPassword.invalid} 
            disabled = {!validCRED["password"].valid}/>
          </FormGroup>
      </Col></Row>
      <Button onClick={()=>{
        props.signupInit(user);
        }}
        color="primary"
        disabled = {!validator()}>Sign Up</Button>
    </div>
    {props.showAlert && <ESAlert AlertColor = {props.AlertColor} AlertText = {props.AlertText} />}
    </div>
    <div className="LoginOptionDiv">
        <Link to="/">Login</Link> instead?
    </div>
    </>;
}

const mapStateToProps = (state)=>{
  return{
    showAlert : state.user.showAlert,
    AlertText : state.user.AlertText,
    AlertColor : state.user.AlertColor
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    hideAlert : ()=>dispatch({type : actionTypes.HIDE_ALERT}),
    signupInit : (user)=>dispatch(userActions.signupInit(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);