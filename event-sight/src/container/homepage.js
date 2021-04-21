import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import EventCard from "../components/EventCard";
import Sidebar from "../components/sidebar";
import { Img } from "../assets/URLImages";
import ESSpinner from "../UI/ESSpinner";
import { connect } from "react-redux";
import * as eventActions from "../store/actions/eventActions";

const Homepage = (props) => {

  useEffect(() => {
    props.displayEvents(props.sid, props.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.showAlert]);

  let eventsrender = null;

  if (props.loading) {

    eventsrender = <ESSpinner />;

  } else {

    let allEvents = [];
    if (props.events !== null && typeof props.events!== "undefined" && typeof props.events.member_club_events!=="undefined" && typeof props.events.followed_club_events!=="undefined") {

      let memberEvents=[];
      props.events.member_club_events.forEach(event=>{
        if(event.open_to_all === false){
          memberEvents.push(event);
        }
      });

      let followedEvents=[];
      props.events.followed_club_events.forEach(event=>{
        if(event.open_to_all === true){
          followedEvents.push(event);
        }
      });

      allEvents = [...allEvents, ...memberEvents, ...followedEvents];
    }

    eventsrender =<Row lg="2" md="2" sm="1" xs="1">{
        allEvents.map((event, index) => (
          <Col key={index}>
            <EventCard id={event.id} img={Img.img} event={event}/>
          </Col>
        ))}
      </Row>;
  }
  return (
    <>
      <Sidebar />
      {eventsrender}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.event.loading,
    events: state.event.events,
    sid : state.user.sid,
    token : state.user.token,
    showAlert : state.event.showAlert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayEvents: (sid, token) => dispatch(eventActions.displayEvents(sid, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
