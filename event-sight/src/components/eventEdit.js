import React, {useState} from "react";
import {FiEdit} from "react-icons/fi";
import { Tooltip, Modal, ModalHeader, ModalBody, ModalFooter, 
Row, Col, Input, Label, FormGroup, Button } from 'reactstrap';

import {connect} from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";
import * as eventActions from "../store/actions/eventActions";

import {MdErrorOutline, MdUpdate} from "react-icons/md";

const EventEdit = (props)=>{
    const [event, setEvent] = useState({
        eventTitle : props.selectedEvent.title,
        eventDescription : props.selectedEvent.description,
        eventDate : "",
        eventTime : "",
        eventDetails : props.selectedEvent.details,
        eventType : props.OCName === "General Organising Committee" ? "General" :"",
        eventImgURL : props.selectedEvent.image_url
      })
    
    if(props.showAlert){
      setTimeout(()=>{
        props.hideAlert()
      }, 3500)
    }
    
      const changeHandler = (changeEvent)=>{
        setEvent((prev)=>{
          return {
            ...prev,
            [changeEvent.target.name] : changeEvent.target.value
          }
        })
      }

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const [modal, setModal] = useState(false);
    const modelToggle = () => setModal(!modal);

    return <>
    <div className="eventEditButton" id="eventEdit" onClick={modelToggle}><FiEdit size="32px"/></div>
    <Tooltip placement="bottom" isOpen={tooltipOpen} target="eventEdit" toggle={toggle}>
        Edit Event
      </Tooltip>
      <Modal isOpen={modal} toggle={modelToggle}>
          <ModalHeader></ModalHeader>
          <ModalBody>
          <div>
     <FormGroup>
         <Row>
         <Col>
        <Label>Event Title</Label>
          <Input type="text" name="eventTitle" placeholder="Event Title" value={event.eventTitle} onChange={changeHandler} autoComplete="off" maxLength={40}/>
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

      {props.OCName !== "General Organising Committee" && <> <FormGroup>
     <Row lg="4" md="4" sm="3" xs="1">
            <Col><Label for="eventType">Select Event Type</Label></Col>
            
            <Col><Input type="radio" name="eventType" value="MemberSpecific"  onChange={changeHandler}/>{"Member Specific"}</Col>
            <Col><Input type="radio"  name="eventType" value="General"  onChange={changeHandler} />{"General"}</Col>
            </Row>
          </FormGroup></>}
      </Col></Row>
      {/* <FormGroup>
         <Row>
         <Col>
        <Label>Event Poster URL</Label>
          <Input type="url" name="eventImgURL" placeholder="Paste Event Poster URL (OPTIONAL)" value={event.eventImgURL} onChange={changeHandler}/>
          </Col>
          </Row>
      </FormGroup> */}
     <Row>
       <Col> <Button onClick={()=>{
          props.updateEvent(props.sid, props.token, event, props.selectedEvent.id)
      }}>Update Event</Button></Col>
      <Col>
      {(props.showAlert && props.AlertColor === "success") &&  <><MdUpdate size="35px" color="green"/> Event Updated </>}
      {(props.showAlert && props.AlertColor === "danger") && <> <MdErrorOutline size="35px" color="red"/> Can't Be Updated </>} 
      </Col>
       </Row>
    </div>
          </ModalBody>
          <ModalFooter>       
          </ModalFooter>
          
      </Modal>
    </>;
}

const mapStateToProps = (state)=>{
  return {
    sid : state.user.sid,
    token : state.user.token,
    selectedEvent : state.event.selectedEvent,
    showAlert : state.event.showAlert,
    AlertColor : state.event.AlertColor,
    OCName : state.user.OCName
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    updateEvent : (sid, token, event, id)=>dispatch(eventActions.updateEvent(sid, token, event, id)),
    hideAlert : ()=>dispatch({type : actionTypes.HIDE_EVENT_ALERT})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventEdit);