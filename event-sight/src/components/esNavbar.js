
import {AiFillHome, AiOutlineLogout} from "react-icons/ai"
import {MdEvent} from "react-icons/md";
import {HiSaveAs} from "react-icons/hi";
import {IoMdCreate} from "react-icons/io";


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar className="ESNavbar" color="dark" light expand="md">
          <NavbarBrand style={{
              color : "white",
              fontWeight: "100",
fontFamily: "'Niconne', cursive"
          }}>Event Sight</NavbarBrand> 
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink href="/"><AiFillHome className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/create-event"><IoMdCreate className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/"><MdEvent className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/"><HiSaveAs className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/auth-user"><AiOutlineLogout className="ESNavbarIcon" size="30px"/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Example;