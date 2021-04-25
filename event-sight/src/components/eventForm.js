import React, {useState} from "react";
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import {connect} from "react-redux";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";
import ESAlert from "../UI/ESAlert";

const EventForm = (props)=>{
  const [event, setEvent] = useState({
    eventTitle : "",
    eventDescription : "",
    eventDate : "",
    eventTime : "",
    eventDetails : "",
    eventType : "",
    eventImgURL : ""
  })

  const [image, setImage]=useState();
  const [label, setLabel]=useState("");

  if(props.showAlert){
    setTimeout(()=>{
      props.hideAlert()
    },3500)
  }


  const changeHandler = (changeEvent)=>{
    setEvent((prev)=>{
      return {
        ...prev,
        [changeEvent.target.name] : changeEvent.target.value
      }
    })
  }

  const imageHandler = (event)=>{
    const file = event.target.files[0];
    const fileType = file['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (!validImageTypes.includes(fileType)) {
      setLabel("( Valid Image types are jpeg, png, gif )");
    }else{
      if(file.size > 1572864){
        setLabel("( Image size is too Large " + (file.size/1048576).toFixed(2) + "  MB )");
      }else{
        setImage(file);
      }
    }
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
          <br />
          <Row>
            <Col>
              <Input type="file" name="image" id="image" onChange={imageHandler} className="inputfile"/>
              <Label for="image">{typeof image=="undefined" ? "Upload Image" : image.name}</Label>
              <br />
              <Label>Less than 1.5 MB {label}</Label>
            </Col>
          </Row>
      </FormGroup>
      <Button onClick={()=>{
        console.log(event);
        props.createNewEvent(props.sid, props.token, event, image)
      }}
      disabled={!(event.eventTitle.length > 0 && event.eventDate.length > 0 && event.eventTime.length > 0 && typeof image != "undefined")}
      >Add Event</Button>
    </div>
    {props.showAlert && <ESAlert AlertColor = {props.AlertColor} AlertText = {props.AlertText} />}
    </div>
}

const mapStateToProps = (state)=>{
  return {
    sid : state.user.sid,
    token : state.user.token,
    showAlert : state.event.showAlert,
    AlertText : state.event.AlertText,
    AlertColor : state.event.AlertColor
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    createNewEvent : (sid, token, event, image)=>dispatch(eventActions.createNewEvent(sid, token, event, image)),
    hideAlert : ()=>dispatch({type : actionTypes.HIDE_EVENT_ALERT})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);