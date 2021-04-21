import React, {useState, useEffect} from "react";
import {Popover, Row, Col, Button} from 'reactstrap';
import {FaUser} from "react-icons/fa";
import {FiCheck} from "react-icons/fi"
import {ImCross} from "react-icons/im"

import {connect} from "react-redux";
import * as OCActions from "../store/actions/OCActions";
import * as actionTypes from "../store/actions/actionTypes";
import ESAlert from "../UI/ESAlert";

const MemberRequests = (props)=>{

    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    useEffect(()=>{
        props.fetchMemberRequests(props.sid, props.token)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.showAlert])


  if(props.showAlert){
    setTimeout(()=>{
      props.hideAlert()
    }, 3500)
  }

    return <><Popover placement="bottom" isOpen={popoverOpen} target="showMemberRequests" toggle={()=>{
        toggle()
        props.fetchMemberRequests(props.sid, props.token)
        }}>
            <div className="MemberRequestDiv">
                { props.fetchedMemberRequests && props.fetchedMemberRequests.map((request, index)=>{
                    return <div key={index} className="MemberRequest">
                        <Row>
                            <Col lg="8">
                                <Col><div className="MRUpperText"><FaUser size="15px"/> {request.student_id}</div></Col>
                                <Col><div className="MRLowerText">{request.first_name} {request.last_name}</div></Col>
                                </Col>
                            <Col lg="4">
                                <Button color="success" outline className="MemberRequestButton Left" onClick={()=>{
                                    props.respondMemberRequests(request.student_id, props.token, props.OCName , true, props.sid)
                                }}><FiCheck size="18px"/></Button>
                                <Button color="danger" outline className="MemberRequestButton Right" onClick={()=>{
                                    props.respondMemberRequests(request.student_id, props.token, props.OCName , false, props.sid)
                                }}><ImCross size="13px"/></Button>
                            </Col>
                        </Row>
                    </div>
                })}
            </div>
    </Popover>
    {props.showAlert && <ESAlert AlertText = {props.AlertText} AlertColor = {props.AlertColor} />}</>
}

const mapStateToProps = (state)=>{
    return {
        fetchedMemberRequests : state.OC.fetchedMemberRequests,
        showAlert : state.OC.showAlert,
        AlertText : state.OC.AlertText,
        AlertColor : state.OC.AlertColor,
        sid : state.user.sid,
        token : state.user.token,
        OCName : state.user.OCName
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchMemberRequests : (sid, token)=>dispatch(OCActions.fetchMemberRequests(sid, token)),
        respondMemberRequests : (sid, token, OCName, response, adminSID)=>dispatch(OCActions.respondMemberRequests(sid, token, OCName, response, adminSID)),
        hideAlert : ()=>dispatch({type : actionTypes.HIDE_OC_ALERT}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberRequests);