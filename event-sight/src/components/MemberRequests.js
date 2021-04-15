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

    useEffect(()=>{
        props.fetchMemberRequests()
    },[])

    //testing
    var requests = [["19103007","Shivam Arora"],["19103022","Sarthak Chauhan"],["19103026","Aayush Gupta"],["19103028","Arjun Kathail"],
    ["19103007","Shivam Arora"],["19103022","Sarthak Chauhan"],["19103026","Aayush Gupta"],["19103028","Arjun Kathail"],
    ["19103007","Shivam Arora"],["19103022","Sarthak Chauhan"],["19103026","Aayush Gupta"],["19103028","Arjun Kathail"],
    ["19103007","Shivam Arora"],["19103022","Sarthak Chauhan"],["19103026","Aayush Gupta"],["19103028","Arjun Kathail"],];


    return <Popover placement="bottom" isOpen={popoverOpen} target="showMemberRequests" toggle={toggle}>
            <div className="MemberRequestDiv">
                {requests.map((request, index)=>{
                    return <div key={index} className="MemberRequest">
                        <Row>
                            <Col lg="8">
                                <Col><div className="MRUpperText"><FaUser size="15px"/> {request[0]}</div></Col>
                                <Col><div className="MRLowerText">{request[1]}</div></Col>
                                </Col>
                            <Col lg="4">
                                <Button color="success" outline className="MemberRequestButton Left"><FiCheck size="18px"/></Button>
                                <Button color="danger" outline className="MemberRequestButton Right"><ImCross size="13px"/></Button>
                            </Col>
                        </Row>
                    </div>
                })}
            </div>
    </Popover>
}

const mapStateToProps = (state)=>{
    return {}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchMemberRequests : ()=>dispatch(OCActions.fetchMemberRequests())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberRequests);