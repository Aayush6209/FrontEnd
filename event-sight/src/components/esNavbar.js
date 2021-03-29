
import {AiFillHome, AiOutlineLogout} from "react-icons/ai"
import {MdEvent} from "react-icons/md";
import {HiSaveAs} from "react-icons/hi";
import {IoMdCreate} from "react-icons/io";
import {RiBuilding2Line} from "react-icons/ri";


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

const Example = () => {
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

    const [tooltipOpen6, setTooltipOpen6] = useState(false);
    const toggle6 = () => setTooltipOpen6(!tooltipOpen6);
  
    return (
      <div>
        <Navbar style={{height:"60px"}} className="ESNavbar" color="dark" light expand="md">
          <h1 className="logo">Event Sight</h1>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
              <NavItem id="logout">
                <NavLink href="/auth-user"><AiOutlineLogout className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <Tooltip placement="bottom" isOpen={tooltipOpen6} target="logout" toggle={toggle6}>
        Logout</Tooltip>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Example;