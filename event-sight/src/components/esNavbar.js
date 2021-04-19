
import {AiFillHome, AiOutlineLogout} from "react-icons/ai"
import {MdEvent} from "react-icons/md";
import {HiSaveAs, HiUserAdd} from "react-icons/hi";
import {IoMdCreate} from "react-icons/io";
import {RiBuilding2Line} from "react-icons/ri";
import MemberRequests from "./MemberRequests";

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Tooltip
} from 'reactstrap';

import {connect} from "react-redux";
import * as userActions from "../store/actions/userActions";

const ESNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
    const toggle1 = () => setTooltipOpen1(!tooltipOpen1);

    const [tooltipOpen2, setTooltipOpen2] = useState(false);
    const toggle2 = () => setTooltipOpen2(!tooltipOpen2);

    const [tooltipOpen3, setTooltipOpen3] = useState(false);
    const toggle3 = () => setTooltipOpen3(!tooltipOpen3);

    const [tooltipOpen4, setTooltipOpen4] = useState(false);
    const toggle4 = () => setTooltipOpen4(!tooltipOpen4);

    const [tooltipOpen5, setTooltipOpen5] = useState(false);
    const toggle5 = () => setTooltipOpen5(!tooltipOpen5);

    // const [tooltipOpen6, setTooltipOpen6] = useState(false);
    // const toggle6 = () => setTooltipOpen6(!tooltipOpen6);

    const [tooltipOpen7, setTooltipOpen7] = useState(false);
    const toggle7 = () => setTooltipOpen7(!tooltipOpen7);

    // const [tooltipOpen8, setTooltipOpen8] = useState(false);
    // const toggle8 = () => setTooltipOpen8(!tooltipOpen8);

    let navItems = null;
    if(props.role===null){navItems = null;}
    else if(props.role === "Admin"){
      navItems = <>
      <NavItem id="Home" >
                <NavLink href="/"><AiFillHome  className="ESNavbarIcon" size="30px"/></NavLink>
                
              </NavItem>
              <Tooltip placement="bottom" isOpen={tooltipOpen1} target="Home" toggle={toggle1}>
        Home</Tooltip>
        <NavItem id="CreateEvent" >
                <NavLink href="/create-event"><IoMdCreate className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <Tooltip placement="bottom" isOpen={tooltipOpen2} target="CreateEvent" toggle={toggle2}>
        Create Event</Tooltip>
        <NavItem id="MemberRequests">
                <NavLink id="showMemberRequests"><HiUserAdd className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <MemberRequests/>
              <Tooltip placement="bottom" isOpen={tooltipOpen7} target="MemberRequests" toggle={toggle7}>
        Member Requests</Tooltip>
        <NavItem id="logout" onClick={()=>{
                props.logout(props.sid, props.token);
              }}>
                <NavLink><AiOutlineLogout className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              {/* <Tooltip placement="bottom" isOpen={tooltipOpen6} target="logout" toggle={toggle6}>
        Logout</Tooltip> */}
      </>
    }
    else {
      navItems = <>
      <NavItem id="Home" >
                <NavLink href="/"><AiFillHome  className="ESNavbarIcon" size="30px"/></NavLink>
                
              </NavItem>
              <Tooltip placement="bottom" isOpen={tooltipOpen1} target="Home" toggle={toggle1}>
        Home</Tooltip>
              <NavItem id="registered">
                <NavLink href="/"><MdEvent className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <Tooltip placement="bottom" isOpen={tooltipOpen3} target="registered" toggle={toggle3}>
        Registered Events</Tooltip>
              <NavItem id="interestedEvents">
                <NavLink href="/"><HiSaveAs className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <Tooltip placement="bottom" isOpen={tooltipOpen4} target="interestedEvents" toggle={toggle4}>
        Interested Events</Tooltip>
              <NavItem id="oclist">
                <NavLink href="/oc-list"><RiBuilding2Line className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <Tooltip placement="bottom" isOpen={tooltipOpen5} target="oclist" toggle={toggle5}>
        Organisers</Tooltip>
        <NavItem id="logout2" onClick={()=>{
                props.logout(props.sid, props.token);
              }}>
                <NavLink><AiOutlineLogout className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              {/* <Tooltip placement="bottom" isOpen={tooltipOpen8} target="logout2" toggle={toggle8}>
        Logout</Tooltip> */}
      </>
    }
  
    return (
      <div>
        <Navbar className="ESNavbar" color="dark" light expand="md">
          <h1 className="logo">Event Sight</h1>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navItems}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  const mapStateToProps = (state)=>{
    return {
      sid : state.user.sid,
      token : state.user.token,
      role : state.user.role
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return {
      logout : (sid, token)=>dispatch(userActions.logout(sid, token)),
    }
  }
  
  export default connect( mapStateToProps, mapDispatchToProps )(ESNavbar);