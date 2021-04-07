import React from "react";
import {Row, Col, Button} from "reactstrap";
import EventCard from "../components/EventCard";
import {MdCardMembership} from "react-icons/md";
import {AiOutlineUserAdd} from "react-icons/ai";

const OCPage = ()=>{
    const imgURL = "https://images.jdmagicbox.com/comp/chandigarh/c4/0172p1762.1762.110201201416.l1c4/catalogue/punjab-engineering-college-sector-12-chandigarh-placement-services-candidate--3er9sw3.jpg?clr=#006600";
    //for testing only
    var foo = [];
    for (var i = 1; i <= 5; i++) {foo.push(i);}
    
    return <>
    <div className="OCPageHeader">
        <Row>
            <Col lg="3"><img src={imgURL} alt="pec" className="OCPageHeaderImg"/></Col>
            <Col lg="9">
            <Row className="OCPageHeaderR1">
                <Col lg="7"><h1 className="OCPageHeaderText">Punjab Engineering College</h1></Col>
                <Col lg="5">
            <Button outline color="primary" className="OCPageButtons">Follow <AiOutlineUserAdd size="25px"/></Button>
            <Button outline color="danger" className="OCPageButtons">Request Membership <MdCardMembership size="25px"/></Button>
            </Col>
            </Row>
            <Row className="OCPageHeaderR2">
                <Col>{251} Followers</Col>
                <Col>{153} Members</Col>
            </Row>
            <Row className="OCPageHeaderR3">
                <h5>{"PEC : A pioneer engineering college"}</h5>
            </Row>
            </Col>
        </Row>    
    </div>
    <div className="OCPageBody">
        <Row lg="2" md="1" sm="1" xs="1">
    {
        foo.map(k=><Col key={k} ><EventCard/></Col>)
    }
    </Row>
    </div>

    </>
}

export default OCPage;