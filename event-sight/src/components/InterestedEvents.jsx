import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import EventCard from "./EventCard";
import { Img } from "../assets/URLImages";
import ESSpinner from "../UI/ESSpinner";
import { connect } from "react-redux";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";
import ESAlert from "../UI/ESAlert";

const InterestedEvents = (props) => {
  if(props.showAlert){
    setTimeout(()=>{
      props.hideAlert()
    }, 3500)
  }

  useEffect(() => {
    props.displayInterestedEvents(props.sid, props.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.showAlert]);

  let eventsrender = null;

  if (props.loading) {

    eventsrender = <ESSpinner />;

  } else {
    let allEvents = [];
    if(Array.isArray(props.events)){
      allEvents = props.events;
    }
    eventsrender = <Row lg="2" md="2" sm="1" xs="1">{
        allEvents.map((event, index) => (
          <Col key={index}>
            <EventCard id={event.id} img={Img.img} event={event}/>
          </Col>
        ))}
      </Row>;
  }
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-4">Interested Events</h1>
        </Container>
      </Jumbotron>
      {eventsrender}
      {props.showAlert && <ESAlert AlertText = {props.AlertText} AlertColor = {props.AlertColor} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.event.loading,
    events: state.event.events,
    sid : state.user.sid,
    token : state.user.token,
    showAlert : state.event.showAlert,
    AlertText : state.event.AlertText,
    AlertColor : state.event.AlertColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayInterestedEvents: (sid, token) => dispatch(eventActions.displayInterestedEvents(sid, token)),
    hideAlert: () => dispatch({ type: actionTypes.HIDE_EVENT_ALERT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestedEvents);
