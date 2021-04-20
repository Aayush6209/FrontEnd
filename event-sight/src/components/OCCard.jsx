import React from 'react';
import {Row, Col} from "reactstrap";
import {OCLogos} from "../assets/OClogo";

function OCCard (props){

  return  <div className="OCCard">
    <Row>
    <Col sm="3"><img src={OCLogos[props.OCName]} alt={props.OCName} className="OCCardImg"/></Col>
   <Col sm="9"><h1 className="OCCardText">{props.OCName}</h1></Col>
    </Row>
  </div>;
};

export default OCCard;