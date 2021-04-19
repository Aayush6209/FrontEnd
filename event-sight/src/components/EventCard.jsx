import React from 'react';
import {Link} from "react-router-dom";
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
        <div className="overflow"><img className="CardImage" src={props.img} alt="Card cap" /></div>
        <CardBody>
          <CardTitle tag="h5"><span className="CardTitle">{props.title}</span></CardTitle>
          <div className="CardContent">
          <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Date: </strong>{props.dateTime.substring(0, 10)}<br /><strong>Time: </strong>{props.dateTime.substring(11, 19)}</CardSubtitle>
          <CardText>{(props.details.length>99)?(props.details.substring(0, 100)+"..."):props.details}</CardText>
          </div>
          <div className="CardIconsDiv">
          <Container>
            <Row>
              <Col><div style={{display:"inline-block"}}><HiSaveAs size="36px" className="CardIcon"/></div></Col>
              <Col><div style={{display:"inline-block"}}><MdEvent size="36px" className="CardIcon"/></div></Col>
              <Col><div style={{display:"inline-block"}}><Link to="/event"><BsInfoCircle size="32px" className="CardIcon"/></Link></div></Col>
            </Row>
          </Container>
          </div>
        </CardBody>
      </Card>
    </div>
    
  );
};

export default EventCard;