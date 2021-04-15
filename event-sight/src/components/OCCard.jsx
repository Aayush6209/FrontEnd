import React from 'react';
import {Row, Col} from "reactstrap";

function OCCard (props){
  const imgURL = "https://images.jdmagicbox.com/comp/chandigarh/c4/0172p1762.1762.110201201416.l1c4/catalogue/punjab-engineering-college-sector-12-chandigarh-placement-services-candidate--3er9sw3.jpg?clr=#006600";

  return  <div className="OCCard">
    <Row>
    <Col sm="3"><img src={imgURL} alt="pec" className="OCCardImg"/></Col>
   <Col sm="9"><h1 className="OCCardText">{props.OCName}</h1></Col>
    </Row>
  </div>;
};

export default OCCard;