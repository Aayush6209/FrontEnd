import React from 'react';
import {Link} from "react-router-dom";
import {
  Card,CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col 
} from 'reactstrap';
import { connect } from "react-redux";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";
// import {MdEvent} from "react-icons/md";
// import {HiSaveAs} from "react-icons/hi";
import {RiQuillPenLine, RiQuillPenFill} from "react-icons/ri"
import {FaRegBookmark, FaBookmark} from "react-icons/fa"
import {BsInfo} from "react-icons/bs";
import ESAlert from "../UI/ESAlert";

const EventCard = (props) => {
  if(props.showAlert){
    setTimeout(()=>{
      props.hideAlert()
    }, 3000)
  }
  return (
    <div className="ESEventCard">
      <Card>
        <div className="overflow"><img className="CardImage" src={"http://127.0.0.1:8000"+props.event.photo} alt="Card cap" /></div>
        <CardBody>
          <CardTitle tag="h5"><span className="CardTitle">{props.event.title}</span></CardTitle>
          <div className="CardContent">
          <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Date: </strong>{props.event.date_time.substring(0, 10)}<br /><strong>Time: </strong>{props.event.date_time.substring(11, 19)}</CardSubtitle>
          <CardText>{(props.event.description.length>99)?(props.event.description.substring(0, 100)+"..."):props.event.description}</CardText>
          </div>
          <div className="CardIconsDiv">
          <Container>
            <Row>
          { props.role === "Admin" ? null :  
           <>  <Col>{props.event.participants.includes(props.sid) ?
            <div className="Button2Selected" style={{paddingTop : "8px"}}  id="ab" onClick={()=>{
                props.cancelRegistration(props.sid, props.token, props.event.id)
            }}><RiQuillPenFill size="30px"/></div>  :

            <div className="Button2" style={{paddingTop : "8px"}}  id="ab"onClick={()=>{
                props.registerEvent(props.event.id, props.sid, props.token)
            }}><RiQuillPenLine size="30px"/></div>}
            </Col>

            <Col>{props.event.interested.includes(props.sid) ?
             <div className="Button2Selected" style={{paddingTop : "7px"}} id="bc" onClick={()=>{
                props.cancelInterested(props.sid, props.token, props.event.id)
            }}><FaBookmark size="27px" /></div> :

            <div className="Button2" style={{paddingTop : "7px"}} id="bc" onClick={()=>{
                props.interested(props.event.id, props.sid, props.token)
            }}><FaRegBookmark size="27px" /></div>}
            </Col>
               </>}
              <Col><Link className="timerLink" to={"/event/" + props.event.id +"/"+ props.event.title.replace(/ /g, '-')} onClick={()=>{props.selectEvent(props.event)}}>
              <div className="Button2" style={{paddingTop : "2px"}}><BsInfo size="40px"/></div></Link></Col>
            </Row>
          </Container>
          </div>
        </CardBody>
      </Card>
      {props.showAlert && <ESAlert AlertText = {props.AlertText} AlertColor = {props.AlertColor} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sid : state.user.sid,
    token : state.user.token,
    showAlert : state.event.showAlert,
    AlertText : state.event.AlertText,
    AlertColor : state.event.AlertColor,
    role : state.user.role
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectEvent: (event) =>
      dispatch({
        type: actionTypes.SELECT_EVENT,
        selectedEvent: event,
      }),
    registerEvent: (id, sid, token) =>
      dispatch(eventActions.registerEvent(id, sid, token)),
    cancelRegistration: (sid, token, id) =>
      dispatch(eventActions.cancelRegistration(sid, token, id)),
    interested: (id, sid, token) =>
      dispatch(eventActions.interested(id, sid, token)),
    cancelInterested: (sid, token, id) =>
      dispatch(eventActions.cancelInterested(sid, token, id)),
    hideAlert: () => dispatch({ type: actionTypes.HIDE_EVENT_ALERT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);