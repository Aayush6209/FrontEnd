import React, {useEffect} from "react";
import {Row, Col} from "reactstrap";
import EventInfo from "../components/eventInfo";
import CommentSection from "../components/commentSection";
import EventPageButtons from "../components/eventPageButtons";

import {connect} from "react-redux";
import * as OCActions from "../store/actions/OCActions";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";

import ESAlert from "../UI/ESAlert";
import { Redirect } from "react-router-dom";

const EventPage = (props)=>{

      if(props.showAlert){
        setTimeout(()=>{
          props.hideAlert()
        }, 3500)
      }
    return <div style={{
        width : "100%"
    }}>
        <Row>
            <Col lg="8"><EventInfo event={props.selectedEvent}/></Col>
            <Col lg="4">
                <Row><EventPageButtons/></Row>
                <Row><CommentSection/></Row>
                </Col>
        </Row>
    
    </div>;
}

const mapStateToProps = (state) => {
    return {
      loading: state.event.loading,
      selectedEvent: state.event.selectedEvent,
      sid : state.user.sid,
      token : state.user.token,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EventPage);