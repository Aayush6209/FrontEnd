import React from "react";
import { Jumbotron, Container } from 'reactstrap';

const registeredEvents = (props)=>{
    return <div>
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-4">Registered Events</h1>
      </Container>
    </Jumbotron>
  </div>
}

export default registeredEvents;