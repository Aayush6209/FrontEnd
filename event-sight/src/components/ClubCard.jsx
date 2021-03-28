import React from 'react';
import {
  Card,CardText, CardBody,
  CardTitle, CardSubtitle, Container
} from 'reactstrap';

function ClubCard (){
  return (
    <div className="ESClubCard">
      <Card>
        <CardBody className="cardBody">
          <div className="ClubBody">
            <CardTitle tag="h5">Club Name</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Description</CardSubtitle>
            <CardText className="clubText">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </div>
          <div className="overflow"><img className="CardImage" src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Card cap" /></div>
        </CardBody>
      </Card>
    </div>
    
  );
};

export default ClubCard;