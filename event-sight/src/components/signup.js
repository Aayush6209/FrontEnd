import React from "react";
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';

const SignUp = ()=>{
    return <div>
    <h1 className="SignUpHeader">Sign Up</h1>
    <div className="SignUpForm">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" id="firstName" placeholder="Your First Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" placeholder="Your Last Name" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="sid">SID</Label>
            <Input type="text" name="sid" id="sid" placeholder="Your SId" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="branch">Branch</Label>
            <Input type="text" name="branch" id="branch" placeholder="Your Branch" />
          </FormGroup>
        </Col>
      </Row>
      <Row><Col>
      <FormGroup>
            <Label for="email">Email Address</Label>
            <Input type="email" name="email" id="email" placeholder="Your Email Address" />
          </FormGroup>
      </Col></Row>
      <Row><Col>
      <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Set Your Password" />
          </FormGroup>
      </Col></Row>
      <Button>Sign Up</Button>
    </div>
    </div>
}

export default SignUp;