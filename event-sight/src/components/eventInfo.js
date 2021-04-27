import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

import EventEdit from "./eventEdit";

import {connect} from "react-redux";
import {OCLogos} from "../assets/OClogo";

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);


const EventInfo = (props)=>{
    
    //to toggle the tabs
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {if(activeTab !== tab) setActiveTab(tab);}

    function linkify(text) {
        var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
        return text.replace(urlRegex, function(url) {
            return '<a style="text-decoration:none;" target="_blank" href="' + url + '">' + url + '</a>';
        });
    }
    
    let details = props.event.details.split("\n");

    return <div className="EventInfoDiv">
        <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                <span style={{cursor : "pointer"}}>Event Poster</span>
          </NavLink></NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
            <span style={{cursor : "pointer"}}>Detailed Info</span>
          </NavLink>
        </NavItem>
       { props.role === "Admin" && <NavItem><EventEdit /></NavItem> }
      </Nav>

      <TabContent activeTab={activeTab}>
          {/* First Tab Content */}
        <TabPane tabId="1">
            {/* First Tab Content */}
            <h1 className="EventTitle"><img src={OCLogos[props.event.organizer]} alt={props.event.organizer} />{props.event.title}</h1>
            <img className="EventPoster" src={"http://127.0.0.1:8000"+props.event.photo} alt={props.event.organizer}/>
        </TabPane>


        <TabPane tabId="2">
            {/* Second Tab Content */}
            <h1 className="EventTitle">{props.event.title}</h1>
            <div className="EventInfo">
            <p  style={{display: 'block'}} className="EventInfoIntro">{props.event.description}</p>
            <Row>
                <Col lg="12" md="12" sm="12" className="EventInfoDate">Date: <span className="EventDateTime">{props.event.date_time.substring(0, 10)}</span></Col>
                <Col lg="12" md="12" sm="12" className="EventInfoTime">Time: <span className="EventDateTime">{props.event.date_time.substring(11, 19)}</span></Col>
            </Row>
            {details.map((detail, index)=>{
                let clean = DOMPurify.sanitize(detail);
                return <p style={{display: 'block'}}key={index} className="EventInfoDetail" dangerouslySetInnerHTML={{__html: linkify(clean)}} />
            })}
            </div>
        </TabPane>

       </TabContent> 

    </div>
}

const mapStateToProps = (state)=>{
    return {
        role : state.user.role
    }
}

export default connect(mapStateToProps)(EventInfo);