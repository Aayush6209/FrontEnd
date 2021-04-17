import React, {useState, useEffect} from "react";
import {Popover, Row, Col, Button} from 'reactstrap';
import {FaUser} from "react-icons/fa";
import {FiCheck} from "react-icons/fi"
import {ImCross} from "react-icons/im"

import {connect} from "react-redux";
import * as OCActions from "../store/actions/OCActions";

const MemberRequests = (props)=>{

    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    const [flag, setFlag] = useState(true)
    useEffect(()=>{
        props.fetchMemberRequests()
    },[flag])

    return <Popover placement="bottom" isOpen={popoverOpen} target="showMemberRequests" toggle={toggle}>
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
                                    props.respondMemberRequests(request.student_id, "True")
                                    setFlag(!flag)
                                }}><FiCheck size="18px"/></Button>
                                <Button color="danger" outline className="MemberRequestButton Right"><ImCross size="13px"/></Button>
                            </Col>
                        </Row>
                    </div>
                })}
            </div>
    </Popover>
}

const mapStateToProps = (state)=>{
    return {
        fetchedMemberRequests : state.OC.fetchedMemberRequests
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchMemberRequests : ()=>dispatch(OCActions.fetchMemberRequests()),
        respondMemberRequests : (sid,response)=>dispatch(OCActions.respondMemberRequests(sid, response))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberRequests);