import React from 'react';
import {
  Card,CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col 
} from 'reactstrap';
import {MdEvent} from "react-icons/md";
import {HiSaveAs} from "react-icons/hi";
import {BsInfoCircle} from "react-icons/bs";

const EventCard = (props) => {
  return (
    <div className="ESEventCard">
      <Card>
        <div className="overflow"><img className="CardImage" src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Card cap" /></div>
        <CardBody>
          <CardTitle tag="h5">Event Name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Date and Time</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Container>
            <Row>
              <Col><div style={{display:"inline-block"}}><HiSaveAs size="32px" className="CardIcons"/></div></Col>
              <Col><div style={{display:"inline-block"}}><MdEvent size="32px" className="CardIcons"/></div></Col>
              <Col><div style={{display:"inline-block"}}><BsInfoCircle size="32px" className="CardIcons"/></div></Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
    
  );
};

export default EventCard;