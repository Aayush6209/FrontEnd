import React from 'react';
import {Row, Col} from "reactstrap";
import {OCLogos} from "../assets/OClogo";

function OCCard (props){

  return  <div className="OCCard">
    <Row>
    <Col sm="3" xs="3"><img src={OCLogos[props.OCName]} alt={props.OCName} className="OCCardImg"/></Col>
   <Col sm="9" xs="9"><h1 className="OCCardText">{ props.OCName.length < 30 ? props.OCName : props.OCName.substring(0,30)+"..."}</h1></Col>
    </Row>
  </div>;
};

export default OCCard;