import React from "react";
import { connect } from "react-redux";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";
import {Row, Col, Button} from "reactstrap";
import {MdEvent, MdTimer} from "react-icons/md";
import {HiSaveAs} from "react-icons/hi";
import ESAlert from "../UI/ESAlert";

const EventPageButtons = (props)=>{

    if(props.showAlert){
        setTimeout(()=>{
          props.hideAlert()
        }, 2000)
      }

    return <div className="EventPageButtonsDiv">
        <Row>{props.event.participants.includes(props.sid)?<Button className="EventPageButtonsUpper" color="danger" onClick={()=>{props.cancelRegistration(props.sid, props.token, props.event.id)}}><MdEvent size="23px"/> Unregister</Button> : <Button className="EventPageButtonsUpper" outline color="success" onClick={()=>{props.registerEvent(props.event.id, props.sid, props.token)}}><MdEvent size="23px"/> Register</Button>}</Row>
        <Row> 
            <Col>{props.event.interested.includes(props.sid)?<Button className="EventPageButtonsLower" color="primary" onClick={()=>{props.cancelInterested(props.sid, props.token, props.event.id)}}><HiSaveAs size="23px"/> Interested</Button>: <Button className="EventPageButtonsLower" outline color="primary" onClick={()=>{props.interested(props.event.id, props.sid, props.token)}}><HiSaveAs size="23px"/> Interested</Button>}</Col>
            <Col><a href={"https://calendar.google.com/calendar/u/0/r/eventedit?text="+props.event.title.replace(/ /g, '+')+"&dates="+props.event.date_time.replace(/-/g, '').replace(/:/g, '').slice(0, -1)+"/"+props.event.date_time.replace(/-/g, '').replace(/:/g, '').slice(0, -1)+"&details="+props.event.description.replace(/ /g, '+')+" "+props.event.details.replace(/ /g, '+')+"&sf=true&output=xml&pli=1"} target="_blank" rel="noopener noreferrer"><Button className="EventPageButtonsLower" outline color="danger"><MdTimer size="23px"/> Remind Me</Button></a></Col>
        </Row>
        {props.showAlert && <ESAlert AlertText = {props.AlertText} AlertColor = {props.AlertColor} />}
    </div>
}

const mapStateToProps = (state)=>{
    return {
      sid : state.user.sid,
      token : state.user.token,
      showAlert : state.event.showAlert,
      AlertText : state.event.AlertText,
      AlertColor : state.event.AlertColor,
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
      registerEvent : (id, sid, token)=>dispatch(eventActions.registerEvent(id, sid, token)),
      cancelRegistration : (sid, token, id)=>dispatch(eventActions.cancelRegistration(sid, token, id)),
      interested : (id, sid, token)=>dispatch(eventActions.interested(id, sid, token)),
      cancelInterested : (sid, token, id)=>dispatch(eventActions.cancelInterested(sid, token, id)),
      hideAlert : ()=>dispatch({type : actionTypes.HIDE_EVENT_ALERT}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EventPageButtons);