import React from "react";
import {OCnames} from "../assets/OCname";
import { Col, Row, Button, FormGroup, Label, Input , option} from 'reactstrap';
const Login = ()=>{
    return <div>
        <h1 className="LoginHeader">Login</h1>
    <div className="LoginForm">
    <Row form>
        <Col>
        <FormGroup>
            <Label for="sid">SID</Label>
            <Input type="text" name="sid" id="sid" placeholder="Your SId" />
          </FormGroup>
        </Col>
      </Row>
      <Row><Col>
      <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Enter Your Password" />
          </FormGroup>
      </Col></Row>
      <Label>Select Role</Label>
      <Row lg="4" md ="4"  sm="4" >
         
          <Col>
      <FormGroup check>
          <Label check>
            <Input type="radio" name="role" />{'Student'}</Label>
        </FormGroup></Col>
        <Col>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="role" />{'Admin'}</Label>
        </FormGroup></Col>
        </Row>
        <Row style={{marginTop : "1%"}}>
            <Col>
        <FormGroup>
        <Label for="role">Select Club/Society/Ed-Board </Label>
        <Input type="select" name="role" id="role">
          {OCnames.map((oc, index)=>{
              return <option key={index} >{oc}</option>
          })}
        </Input>
      </FormGroup></Col></Row>
      <Button>Login</Button>
     </div>
    </div>
}

export default Login;