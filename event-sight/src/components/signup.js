import React, {useState} from "react";
import {Branches} from "../assets/Branches";
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';

const SignUp = ()=>{

  const [user, onUserChange] = useState({
    firstName : "",
    lastName : "",
    sid : "",
    branch : "Aerospace Engineering",
    email : "",
    password : ""
  });

  const changeHandler = (event)=>{
      onUserChange((prevUser)=>{
        return{
          ...prevUser,
          [event.target.name] : event.target.value
        }
      })
  }

    return <div>
    <h1 >Sign Up</h1>
    <div>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input name="firstName" id="firstName" type="text" value = {user.firstName} onChange={changeHandler}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" id="lastName" name="lastName" value = {user.lastName} onChange={changeHandler}/>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="sid">SID</Label>
            <Input type="text" id="sid" name="sid" value = {user.sid} onChange={changeHandler}/>
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
            <Input type="email" id="email" name="email" value = {user.email} onChange={changeHandler}/>
          </FormGroup>
      </Col></Row>
      <Row><Col>
      <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" name="password" value = {user.password} onChange={changeHandler} />
          </FormGroup>
      </Col></Row>
      <Button onClick={()=>{
        console.log(user);
      }}>Sign Up</Button>
    </div>
    </div>
}

export default SignUp;