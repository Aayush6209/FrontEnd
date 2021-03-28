import React, {useState} from "react";
import {OCnames} from "../assets/OCname";
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';

const Login = ()=>{

  const [user, onUserChange] = useState({
    sid : "",
    password : "",
    role : "Student",
    OC : "Aerospace Technical Society",
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
        <h1>Login</h1>
    <div>
    <Row>
        <Col>
        <FormGroup>
            <Label for="sid">SID</Label>
            <Input type="text" name="sid" value={user.sid} onChange={changeHandler} />
          </FormGroup>
        </Col>
      </Row>
      <Row><Col>
      <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" value={user.password} onChange={changeHandler}/>
          </FormGroup>
      </Col></Row>

      <Row ><Col>
      <FormGroup>
      <Row lg="4" md="4" sm="3" xs="1">
            <Col><Label for="role1">Select Role</Label></Col>
            
            <Col><Input type="radio" name="role" value="Student" onChange={changeHandler}/>{"Student"}</Col>
            <Col><Input type="radio"  name="role" value="Admin" onChange={changeHandler}/>{"Admin"}</Col>
            </Row>
          </FormGroup>
      </Col></Row>
     
     { user.role === "Admin" && <Row><Col>
      <FormGroup>
            <Label for="OC">Select Society/Club/Ed-Board</Label>
            <Input type="select" name="OC" value={user.oc} onChange={changeHandler}>
            {OCnames.map((oc, index)=>{
              return <option key={index} >{oc}</option>
          })}</Input>
          </FormGroup>
      </Col></Row>}
      <Button onClick={()=>{
        console.log(user)
      }}>Login</Button>
     </div>
    </div>
}

export default Login;