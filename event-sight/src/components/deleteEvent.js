import React,{useState} from "react";
import {MdDelete} from "react-icons/md";

import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import * as eventActions from "../store/actions/eventActions";

import { Tooltip,
    Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteEvent = (props)=>{
    const [eventDelete , toggleDeleted] = useState(false);

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    async function asyncDelete() {
      await props.deleteEvent(props.sid, props.token , props.event.id);
      }


    const {
        className
      } = props;

    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);

    return <>
    {eventDelete ? <Redirect to="/ocpage/-"/> :
    <div className="eventDeleteButton" id="deleteEvent" 
    onClick={()=>{
        // props.deleteEvent(props.sid, props.token , props.event.id);
        // toggleDeleted(true)
        modalToggle()
    }
    }
        >

        <MdDelete size="32px"/>
        <Tooltip placement="bottom" isOpen={tooltipOpen} target="deleteEvent"  toggle={toggle}>
        Delete Event
      </Tooltip>

      <Modal isOpen={modal} toggle={modalToggle} className={className}>
        <ModalHeader toggle={modalToggle}>Confirm Deletion</ModalHeader>
        <ModalBody>
            Do you want to delete {props.event.title} ?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={()=>{modalToggle()
       asyncDelete().then(()=>{
        toggleDeleted(true)
       })
        
        }}>Delete</Button>{' '}
          <Button color="secondary" onClick={modalToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </div>}
    </>
}

const mapStateToProps = (state)=>{
    return {
        sid : state.user.sid,
        event : state.event.selectedEvent,
        token : state.user.token
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        deleteEvent : (sid, token, eventID)=>dispatch(eventActions.deleteEvent(sid, token, eventID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteEvent);