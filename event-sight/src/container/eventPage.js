import React from "react";
import {Row, Col} from "reactstrap";
import EventInfo from "../components/eventInfo";
import CommentSection from "../components/commentSection";
import EventPageButtons from "../components/eventPageButtons";

const EventPage = ()=>{
    return <div style={{
        width : "100%"
    }}>
        <Row>
            <Col lg="8"><EventInfo/></Col>
            <Col lg="4">
                <Row><EventPageButtons/></Row>
                <Row><CommentSection/></Row>
                </Col>
        </Row>
    
    </div>;
}

export default EventPage;