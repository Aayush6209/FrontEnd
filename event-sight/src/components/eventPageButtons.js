import React, { useEffect } from "react";
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
        }, 3500)
      }

    return <div className="EventPageButtonsDiv">
        <Row>{props.event.participants.includes(props.sid)?<Button className="EventPageButtonsUpper" color="success"><MdEvent size="23px"/> Registered</Button> : <Button className="EventPageButtonsUpper" outline color="success" onClick={()=>{props.registerEvent(props.event.id, props.sid, props.token)}}><MdEvent size="23px"/> Register</Button>}</Row>
        <Row> 
            <Col><Button className="EventPageButtonsLower" outline color="primary"><HiSaveAs size="23px"/> Interested</Button></Col>
            <Col><Button className="EventPageButtonsLower" outline color="danger"><MdTimer size="23px"/> Remind Me</Button></Col>
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
      hideAlert : ()=>dispatch({type : actionTypes.HIDE_EVENT_ALERT})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EventPageButtons);