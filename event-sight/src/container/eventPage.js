import React from "react";
import {Row, Col} from "reactstrap";
import EventInfo from "../components/eventInfo";
import CommentSection from "../components/commentSection";

const EventPage = ()=>{
    return <div style={{
        width : "100%"
    }}>
        <Row>
            <Col lg="8"><EventInfo/></Col>
            <Col lg="4"><CommentSection/></Col>
        </Row>
    
    </div>;
}

export default EventPage;