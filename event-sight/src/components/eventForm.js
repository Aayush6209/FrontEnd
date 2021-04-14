import React, {useState} from "react";
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';


const EventForm = ()=>{
  const [event, setEvent] = useState({
    eventTitle : "",
    eventDescription : "",
    eventDate : "",
    eventTime : "",
    eventDetails : "",
    eventType : "",
    eventImgURL : ""
  })

  const changeHandler = (changeEvent)=>{
    setEvent((prev)=>{
      return {
        ...prev,
        [changeEvent.target.name] : changeEvent.target.value
      }
    })
  }

    return <div><h1 >Event Form</h1>
     <div >
     <FormGroup>
         <Row>
         <Col>
        <Label>Event Title</Label>
          <Input type="text" name="eventTitle" placeholder="Event Title" value={event.eventTitle} onChange={changeHandler}/>
          </Col>
          </Row>
      </FormGroup>
      <FormGroup>
         <Row>
         <Col>
        <Label>Event Description</Label>
          <Input type="textarea" rows="5" name="eventDescription" placeholder="Desribe Your Event" value={event.eventDescription} onChange={changeHandler}/>
          </Col>
          </Row>
      </FormGroup>
      <FormGroup>
         <Row>
         <Col>
        <Label>Date</Label>
          <Input type="date" name="eventDate" value={event.eventDate} onChange={changeHandler}/>
          </Col>
          <Col>
        <Label>Time</Label>
          <Input type="time" name="eventTime" value={event.eventTime} onChange={changeHandler}/>
          </Col>
          </Row>
      </FormGroup>
      <FormGroup>
         <Row>
         <Col>
        <Label>Event Details/Rules</Label>
          <Input type="textarea" rows="7" name="eventDetails" placeholder="Mention Details or Rules" value={event.eventDetails} onChange={changeHandler} />
          </Col>
          </Row>
      </FormGroup>
      <Row ><Col>
      <FormGroup>
      <Row lg="4" md="4" sm="3" xs="1">
            <Col><Label for="eventType">Select Event Type</Label></Col>
            
            <Col><Input type="radio" name="eventType" value="MemberSpecific"  onChange={changeHandler}/>{"Member Specific"}</Col>
            <Col><Input type="radio"  name="eventType" value="General"  onChange={changeHandler} />{"General"}</Col>
            </Row>
          </FormGroup>
      </Col></Row>
      <FormGroup>
         <Row>
         <Col>
        <Label>Event Poster URL</Label>
          <Input type="url" name="eventImgURL" placeholder="Paste Event Poster URL (OPTIONAL)" value={event.eventImgURL} onChange={changeHandler}/>
          </Col>
          </Row>
      </FormGroup>
      <Button onClick={()=>{
        console.log(event)
      }}>Add Event</Button>
    </div>
    </div>
}

export default EventForm;