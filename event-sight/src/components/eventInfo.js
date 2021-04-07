import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

import Sample from "../assets/sample.jpg";
import {SampleEvent} from "../assets/sampleEvent";

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const EventInfo = ()=>{
    
    //to toggle the tabs
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {if(activeTab !== tab) setActiveTab(tab);}

    function linkify(text) {
        var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function(url) {
            return '<a style="text-decoration:none;" target="_blank" href="' + url + '">' + url + '</a>';
        });
    }

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
      </Nav>

      <TabContent activeTab={activeTab}>
          {/* First Tab Content */}
        <TabPane tabId="1">
            {/* First Tab Content */}
            <h1 className="EventTitle">{SampleEvent.eventTitle}</h1>
            <div style={{
                backgroundImage : `url(${Sample})`,
            }} className="EventPoster"></div>
        </TabPane>


        <TabPane tabId="2">
            {/* Second Tab Content */}
            <h1 className="EventTitle">{SampleEvent.eventTitle}</h1>
            <div className="EventInfo">
            <p  className="EventInfoIntro">{SampleEvent.eventDescription}</p>
            <Row>
                <Col lg="12" className="EventInfoDate">Date: <span className="EventDateTime">{SampleEvent.eventDate}</span></Col>
                <Col lg="12" className="EventInfoTime">Time: <span className="EventDateTime">{SampleEvent.eventTime}</span></Col>
            </Row>
            {SampleEvent.eventDetails.map((detail, index)=>{
                let clean = DOMPurify.sanitize(detail);
                return <p key={index} className="EventInfoDetail" dangerouslySetInnerHTML={{__html: linkify(clean)}} />
            })}
            </div>
        </TabPane>

       </TabContent> 

    </div>
}

export default EventInfo;