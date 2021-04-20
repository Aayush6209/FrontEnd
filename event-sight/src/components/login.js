import React, {useState} from "react";
import {OCnames} from "../assets/OCname";
import { Col, Row, Button, FormGroup, Label, Input, FormText } from 'reactstrap';

import * as  userActions from "../store/actions/userActions";
import * as actionTypes from "../store/actions/actionTypes";
import {connect} from "react-redux";
import {formValidation} from "../formValidation";

import ESAlert from "../UI/ESAlert";

const Login = (props)=>{

  const [user, onUserChange] = useState({
    sid : "",
    password : "",
    role : "Student",
    OC : "Aerospace Technical Society",
  });

  const [validCRED, setValidCRED] = useState({
    "sid" : {valid : false, invalid : false},
    "password" : {valid : false, invalid : false}
  })

  const [roleChanged, setRoleChanged] = useState(false);

  const changeHandler = (event)=>{
      onUserChange((prevUser)=>{
        return{
          ...prevUser,
          [event.target.name] : event.target.value
        }
      })
      if(event.target.name === "sid" || event.target.name === "password" ){
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

  if(props.showAlert){
    setTimeout(()=>{
      props.hideAlert();
    },3500)
  }

    return  <div>
    <Row>
        <Col>
        <FormGroup>
            <Label for="sid">SID</Label>
            <Input type="text" name="sid" value={user.sid} onChange={changeHandler} 
            valid = {validCRED["sid"].valid} invalid = {validCRED["sid"].invalid}
             />

          </FormGroup>
        </Col>
      </Row>
      <Row><Col>
      <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" value={user.password} onChange={changeHandler}
            valid = {validCRED["password"].valid} invalid = {validCRED["password"].invalid}
            />
            <FormText>Password must be 7-20 Characters long and must contain one numeric and one special character</FormText>
          </FormGroup>
      </Col></Row>

      <Row ><Col>
      <FormGroup>
      <Row lg="4" md="4" sm="3" xs="1">
            <Col><Label for="role1">Select Role</Label></Col>
            
            <Col><Input type="radio" name="role" value="Student" onChange={(event)=>{
              changeHandler(event)
              setRoleChanged(true);
            }
          }/>{"Student"}</Col>
            <Col><Input type="radio"  name="role" value="Admin" onChange={(event)=>{
              changeHandler(event)
              setRoleChanged(true);
            }
          }/>{"Admin"}</Col>
            </Row>
          </FormGroup>
      </Col></Row>
     
     { user.role === "Admin" && <Row><Col>
      <FormGroup>
            <Label for="OC">Select Society / Club / Ed-Board</Label>
            <Input type="select" name="OC" value={user.oc} onChange={changeHandler}>
            {OCnames.map((oc, index)=>{
              return <option key={index} >{oc}</option>
          })}</Input>
          </FormGroup>
      </Col></Row>}
      <Button onClick={()=>{
        console.log(user)
        props.loginInit(user);
      }} color="info"
      disabled = {!(roleChanged && validCRED["sid"].valid && validCRED["password"].valid)}
      >Login</Button>

    {props.showAlert && <ESAlert AlertColor = {props.AlertColor} AlertText = {props.AlertText} />}
     </div>;
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
    loginInit : (user)=>dispatch(userActions.loginInit(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);