import React, {useEffect} from "react";
import { Row, Col, Button } from "reactstrap";
import EventCard from "../components/EventCard";
import { MdCardMembership } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import {Img} from "../assets/URLImages";
import {RiUserUnfollowLine} from "react-icons/ri";
import {IoBan} from "react-icons/io5";

import {connect} from "react-redux";
import * as OCActions from "../store/actions/OCActions";
import * as actionTypes from "../store/actions/actionTypes";

import ESAlert from "../UI/ESAlert";

const OCPage = (props) => {
  const imgURL =
    "https://images.jdmagicbox.com/comp/chandigarh/c4/0172p1762.1762.110201201416.l1c4/catalogue/punjab-engineering-college-sector-12-chandigarh-placement-services-candidate--3er9sw3.jpg?clr=#006600";
  //for testing only
  var foo = [];
  for (var i = 1; i <= 5; i++) {
    foo.push(i);
  }

useEffect(()=>{
  props.fetchOC(props.match.params.name)
},[props.showAlert])

  if(props.showAlert){
    setTimeout(()=>{
      props.hideAlert()
    }, 3500)
  }
  console.log(props.OC)
  let MemberButton = null;
    if(props.OC !== null){
      props.checkMemberRequest(props.OC.name)
      if(props.OC.members.includes("19103007")){
        MemberButton = <Button outline color="danger" className="OCPageButtons" onClick={()=>{
          props.sendMemberRemoveRequest(props.OC.name)
        }}>
        Cancel Membership <IoBan size="25px" />
      </Button>
      }
      else if(props.membershipRequested){
        MemberButton = <Button outline color="success" className="OCPageButtons" disabled>
        Membership Requested <MdCardMembership size="25px" />
      </Button>
      }
      else {
        MemberButton =<Button outline color="success" className="OCPageButtons" onClick = {()=>{
          props.sendMemberRequest(props.OC.name)
        }}>
    Request Membership <MdCardMembership size="25px" />
  </Button>
      }
      
  }
  

  return (
    <div>
     { props.OC && <><div className="OCPageHeader">
        <Row>
          <Col lg="3" md="3" sm="3">
            <img src={imgURL} alt="pec" className="OCPageHeaderImg" />
          </Col>
          <Col lg="6" md="6" sm="6">
            <Row className="OCPageHeaderR1">
              <Col>
                <h1 className="OCPageHeaderText">{props.OC.name}</h1>
              </Col>
            </Row>
            <Row className="OCPageHeaderR2">
              <Col lg="6" md="6" sm="6">
                <div className="Followers">{props.OC.followers.length} Followers</div>
              </Col>
              <Col lg="6" md="6" sm="6">
                <div className="Members">{props.OC.members.length} Members</div>
              </Col>
            </Row>
            <Row className="OCPageHeaderR3">
              <h5>{props.OC.description}</h5>
            </Row>
          </Col>
          <Col lg="3" md="3" sm="3">
            <div className="Follow">
              {/* Not rendering the follow button if the student is the member */}
              { !props.OC.members.includes("19103007") && (!props.OC.followers.includes("19103007") ? <Button outline color="primary" className="OCPageButtons" onClick={()=>{
                props.followRequestInit(props.OC.name)
              }}>
                Follow <AiOutlineUserAdd size="25px" />
              </Button> : <Button outline color="info" className="OCPageButtons" onClick={()=>{
                props.unfollowRequestInit(props.OC.name)
              }}>
                Unfollow <RiUserUnfollowLine size="25px" />
              </Button>) }
            </div>
            {MemberButton}
            
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
      </div> </> }
      {props.showAlert && <ESAlert AlertText = {props.AlertText} AlertColor = {props.AlertColor} />}
    </div>
  );
};

const mapStateToProps = (state)=>{
  return {
    OC : state.OC.selectedOC,
    showAlert : state.OC.showAlert,
    AlertText : state.OC.AlertText,
    AlertColor : state.OC.AlertColor,
    membershipRequested : state.OC.membershipRequested
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    followRequestInit : (OCName)=>dispatch(OCActions.followRequestInit(OCName)),
    unfollowRequestInit : (OCName)=>dispatch(OCActions.unfollowRequestInit(OCName)),
    hideAlert : ()=>dispatch({type : actionTypes.HIDE_OC_ALERT}),
    fetchOC : (OCName)=>dispatch(OCActions.fetchOC(OCName)),
    sendMemberRequest : (OCName)=>dispatch(OCActions.sendMemberRequest(OCName)),
    checkMemberRequest : (OCName)=>dispatch(OCActions.checkMemberRequest(OCName)),
    sendMemberRemoveRequest : (OCName)=>dispatch(OCActions.sendMemberRemoveRequest(OCName))
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(OCPage);
