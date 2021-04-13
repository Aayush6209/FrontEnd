import React from "react";
import { Row, Col, Button } from "reactstrap";
import EventCard from "../components/EventCard";
import { MdCardMembership } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import {Img} from "../assets/URLImages";

const OCPage = () => {
  const imgURL =
    "https://images.jdmagicbox.com/comp/chandigarh/c4/0172p1762.1762.110201201416.l1c4/catalogue/punjab-engineering-college-sector-12-chandigarh-placement-services-candidate--3er9sw3.jpg?clr=#006600";
  //for testing only
  var foo = [];
  for (var i = 1; i <= 5; i++) {
    foo.push(i);
  }

  return (
    <>
      <div className="OCPageHeader">
        <Row>
          <Col lg="3" md="3" sm="3">
            <img src={imgURL} alt="pec" className="OCPageHeaderImg" />
          </Col>
          <Col lg="6" md="6" sm="6">
            <Row className="OCPageHeaderR1">
              <Col>
                <h1 className="OCPageHeaderText">Punjab Engineering College</h1>
              </Col>
            </Row>
            <Row className="OCPageHeaderR2">
              <Col lg="6" md="6" sm="6">
                <div className="Followers">{251} Followers</div>
              </Col>
              <Col lg="6" md="6" sm="6">
                <div className="Members">{153} Members</div>
              </Col>
            </Row>
            <Row className="OCPageHeaderR3">
              <h5>{"PEC : A pioneer engineering college"}</h5>
            </Row>
          </Col>
          <Col lg="3" md="3" sm="3">
            <div className="Follow">
              <Button outline color="primary" className="OCPageButtons">
                Follow <AiOutlineUserAdd size="25px" />
              </Button>
            </div>
            <Button outline color="danger" className="OCPageButtons">
              Request Membership <MdCardMembership size="25px" />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="OCPageBody">
        <Row lg="2" md="2" sm="1" xs="1">
          {foo.map((k) => (
            <Col key={k}>
              <EventCard img={Img.img} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default OCPage;
