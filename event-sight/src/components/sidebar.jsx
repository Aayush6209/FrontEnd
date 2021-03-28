import React from "react";
import { Row, Col} from "reactstrap";


//just for testing sidebar
import {OCLogos} from "../assets/OClogo";

let logos = [];
for(let key in OCLogos){
    logos.push(<Col key={key} xs="12"><div>
        <img className="SidebarCard" src = "https://images.jdmagicbox.com/comp/chandigarh/c4/0172p1762.1762.110201201416.l1c4/catalogue/punjab-engineering-college-sector-12-chandigarh-placement-services-candidate--3er9sw3.jpg?clr=#006600" alt="pec"/>
    </div></Col>)
}


const Sidebar = ()=>{
    return <div className="Sidebar">
        <center>
        <Row> 
        {logos.map((logo)=>logo)} 
        <Col xs="12" style={{height : "80px"}}> <div> </div></Col>
        </Row>
        </center>
    </div>
}

export default Sidebar;