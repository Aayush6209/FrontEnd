import React from "react";
import {Row, Col, Button} from "reactstrap";
import EventCard from "../components/EventCard";

const OCPage = ()=>{
    const imgURL = "https://images.jdmagicbox.com/comp/chandigarh/c4/0172p1762.1762.110201201416.l1c4/catalogue/punjab-engineering-college-sector-12-chandigarh-placement-services-candidate--3er9sw3.jpg?clr=#006600";
    //for testing only
    var foo = [];
    for (var i = 1; i <= 5; i++) {foo.push(i);}
    
    return <>
    <div className="OCPageHeader">
        <Row>
            <Col lg="4" ><img src={imgURL} alt="pec" className="OCPageHeaderImg"/></Col>
            <Col lg="8">
            <Row><h1 className="OCPageHeaderText">Punjab Engineering College</h1></Row>
            <Row>
                <Col>{251} Followers</Col>
                <Col>{153} Members</Col>
            </Row>
            <Row>
                <h5>{"PEC University of Technology (Punjab Engineering College University of Technology) is one the pioneer engineering college in Punjab."}</h5>
            </Row>
            <Row>
            <Button outline color="primary">Follow</Button>
            <Button outline color="danger">Request Membership</Button>
            </Row>
            </Col>
        </Row>    
    </div>
    <div className="OCPageBody">
        <Row lg="3" md="2" sm="2" xs="1">
    {
        foo.map(k=><Col key={k} ><EventCard/></Col>)
    }
    </Row>
    </div>

    </>
}

export default OCPage;