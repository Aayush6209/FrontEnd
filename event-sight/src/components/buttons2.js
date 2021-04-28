import React, {useState} from "react";
import {Row, Col, Tooltip} from "reactstrap";
// import {GiFeather} from "react-icons/gi";
import {RiQuillPenLine, RiQuillPenFill} from "react-icons/ri"
import {FaRegBookmark, FaBookmark} from "react-icons/fa"
import {IoTimer} from "react-icons/io5";

import { connect } from "react-redux";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";
import ESAlert from "../UI/ESAlert";

const EventPageButtons2 = (props)=>{

    if(props.showAlert){
        setTimeout(()=>{
          props.hideAlert()
        }, 3500)
      }

      const date = new Date();
      const dateString=new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().substring(0, 19) + "Z";
      const dateTime=props.event.date_time;

    const reminderURL = "https://calendar.google.com/calendar/u/0/r/eventedit?text="+props.event.title.replace(/ /g, '+')+"&dates="+props.event.date_time.replace(/-/g, '').replace(/:/g, '').slice(0, -1)+"/"+props.event.date_time.replace(/-/g, '').replace(/:/g, '').slice(0, -1)+"&details="+props.event.description.replace(/ /g, '+')+" "+props.event.details.replace(/ /g, '+')+"&sf=true&output=xml&pli=1";
    
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
    const toggle1 = () => setTooltipOpen1(!tooltipOpen1);

    const [tooltipOpen2, setTooltipOpen2] = useState(false);
    const toggle2 = () => setTooltipOpen2(!tooltipOpen2);

    const [tooltipOpen3, setTooltipOpen3] = useState(false);
    const toggle3 = () => setTooltipOpen3(!tooltipOpen3);

    return <div className="EventPageButtonsDiv">
        <Row>
            <Col>{props.event.participants.includes(props.sid) ?
            <div className={dateTime>dateString? "Button2Selected" : "Button2SelectedDisabled"} style={{paddingTop : "8px"}}  id="ab" onClick={()=>{
                dateTime>dateString && props.cancelRegistration(props.sid, props.token, props.event.id)
            }}><RiQuillPenFill size="30px"/></div>  :

            <div className={dateTime>dateString? "Button2" : "Button2Disabled"} style={{paddingTop : "8px"}}  id="ab"onClick={()=>{
                dateTime>dateString && props.registerEvent(props.event.id, props.sid, props.token)
            }}><RiQuillPenLine size="30px"/></div>}
            </Col>
            <Tooltip placement="bottom" isOpen={tooltipOpen1} target="ab" toggle={toggle1}>
        {props.event.participants.includes(props.sid) ? "Unregister" : "Register"}
      </Tooltip>

            <Col>{props.event.interested.includes(props.sid) ?
             <div className={dateTime>dateString? "Button2Selected" : "Button2SelectedDisabled"} style={{paddingTop : "7px"}} id="bc" onClick={()=>{
                dateTime>dateString && props.cancelInterested(props.sid, props.token, props.event.id)
            }}><FaBookmark size="27px" /></div> :

            <div className={dateTime>dateString? "Button2" : "Button2Disabled"} style={{paddingTop : "7px"}} id="bc" onClick={()=>{
                dateTime>dateString && props.interested(props.event.id, props.sid, props.token)
            }}><FaRegBookmark size="27px" /></div>}
            </Col>
            <Tooltip placement="bottom" isOpen={tooltipOpen2} target="bc" toggle={toggle2}>
        {props.event.interested.includes(props.sid) ? "Remove from Interested" : "Mark as Interested"}
      </Tooltip>

            <Col>
            <a className="timerLink" href= {dateTime>dateString? reminderURL : null} target="_blank" rel="noopener noreferrer">
                <div className={dateTime>dateString? "Button2" : "Button2Disabled"} style={{paddingTop : "5px"}} id="cd">
                    <IoTimer size="34px" id="c" /></div></a></Col>
                    <Tooltip placement="bottom" isOpen={tooltipOpen3} target="cd" toggle={toggle3}>
        Set Reminder
      </Tooltip>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventPageButtons2);