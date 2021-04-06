import React from "react";
import {Row, Col, Button} from "reactstrap";
import {MdEvent, MdTimer} from "react-icons/md";
import {HiSaveAs} from "react-icons/hi";

const EventPageButtons = ()=>{
    return <div className="EventPageButtonsDiv">
        <Row><Button className="EventPageButtonsUpper" color="success"><MdEvent size="23px"/> Register</Button></Row>
        <Row> 
            <Col><Button className="EventPageButtonsLower" color="primary"><HiSaveAs size="23px"/> Interested</Button></Col>
            <Col><Button className="EventPageButtonsLower" color="danger"><MdTimer size="23px"/> Remind Me</Button></Col>
        </Row>
    </div>
}

export default EventPageButtons;