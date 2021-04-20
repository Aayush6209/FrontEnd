import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import EventCard from "./EventCard";
import { Img } from "../assets/URLImages";
import ESSpinner from "../UI/ESSpinner";
import { connect } from "react-redux";
import * as eventActions from "../store/actions/eventActions";

const InterestedEvents = (props) => {

  useEffect(() => {
    props.displayInterestedEvents(props.sid, props.token);
  }, []);

  let eventsrender = null;

  if (props.loading) {

    eventsrender = <ESSpinner />;

  } else {
    let allEvents = [];
    if(props.events!==null){
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.event.loading,
    events: state.event.events,
    sid : state.user.sid,
    token : state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayInterestedEvents: (sid, token) => dispatch(eventActions.displayInterestedEvents(sid, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestedEvents);
