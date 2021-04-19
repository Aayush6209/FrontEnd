import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {
  Card,CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col 
} from 'reactstrap';
import { connect } from "react-redux";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";
import {MdEvent} from "react-icons/md";
import {HiSaveAs} from "react-icons/hi";
import {BsInfoCircle} from "react-icons/bs";

const EventCard = (props) => {
  return (
    <div className="ESEventCard">
      <Card>
        <div className="overflow"><img className="CardImage" src={props.img} alt="Card cap" /></div>
        <CardBody>
          <CardTitle tag="h5"><span className="CardTitle">{props.event.title}</span></CardTitle>
          <div className="CardContent">
          <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Date: </strong>{props.event.date_time.substring(0, 10)}<br /><strong>Time: </strong>{props.event.date_time.substring(11, 19)}</CardSubtitle>
          <CardText>{(props.event.details.length>99)?(props.event.details.substring(0, 100)+"..."):props.event.details}</CardText>
          </div>
          <div className="CardIconsDiv">
          <Container>
            <Row>
              <Col><div style={{display:"inline-block"}}><HiSaveAs size="36px" className="CardIcon"/></div></Col>
              <Col><div style={{display:"inline-block"}}><MdEvent size="36px" className="CardIcon"/></div></Col>
              <Col><div style={{display:"inline-block"}}><Link to={"/event/" + props.event.title} onClick={()=>{props.selectEvent(props.Event)}}><BsInfoCircle size="32px" className="CardIcon"/></Link></div></Col>
            </Row>
          </Container>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sid : state.user.sid,
    token : state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectEvent : (event)=>dispatch({
      type : actionTypes.SELECT_EVENT,
      selectedEvent : event
  }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);