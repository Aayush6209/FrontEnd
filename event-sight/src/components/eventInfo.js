import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

import Sample from "../assets/sample.jpg";
import {SampleEvent} from "../assets/sampleEvent";

const EventInfo = ()=>{
    
    //to toggle the tabs
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {if(activeTab !== tab) setActiveTab(tab);}


    return <div className="EventInfoDiv">
        <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                Event Poster
          </NavLink></NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
            Detailed Info</NavLink></NavItem>
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
            <p>{SampleEvent.eventDescription}</p>
            <Row>
                <Col>Date : {SampleEvent.eventDate}</Col>
                <Col>Time : {SampleEvent.eventTime}</Col>
            </Row>
            {SampleEvent.eventDetails.map((detail, index)=>{
                return <p key={index}>{detail}</p>
            })}
        </TabPane>

       </TabContent> 

    </div>
}

export default EventInfo;