import React from "react";
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const EventForm = ()=>{
    return <div><h1 >Event Form</h1>
     <div >
     <FormGroup>
         <Row>
         <Col>
        <Label>Event Title</Label>
          <Input type="text" name="title" placeholder="Event Title"/>
          </Col>
          </Row>
      </FormGroup>
      <FormGroup>
         <Row>
         <Col>
        <Label>Event Description</Label>
          <Input type="textarea" rows="5" name="description" placeholder="Desribe Your Event"/>
          </Col>
          </Row>
      </FormGroup>
      <FormGroup>
         <Row>
         <Col>
        <Label>Date</Label>
          <Input type="date"/>
          </Col>
          <Col>
        <Label>Time</Label>
          <Input type="time"/>
          </Col>
          </Row>
      </FormGroup>
      <FormGroup>
         <Row>
         <Col>
        <Label>Event Details/Rules</Label>
          <Input type="textarea" rows="7" name="details-rules" placeholder="Mention Details or Rules"/>
          </Col>
          </Row>
      </FormGroup>
      <Row ><Col>
      <FormGroup>
      <Row lg="4" md="4" sm="3" xs="1">
            <Col><Label for="eventType">Select Event Type</Label></Col>
            
            <Col><Input type="radio" name="eventType"/>{"Member Specific"}</Col>
            <Col><Input type="radio"  name="eventType"/>{"General"}</Col>
            </Row>
          </FormGroup>
      </Col></Row>
      <FormGroup>
         <Row>
         <Col>
        <Label>Event Poster URL</Label>
          <Input type="url" name="imgURL" placeholder="Paste Event Poster URL (OPTIONAL)"/>
          </Col>
          </Row>
      </FormGroup>
      <Button>Add Event</Button>
    </div></div>
}

export default EventForm;