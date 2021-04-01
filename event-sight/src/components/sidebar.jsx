import React from "react";
import {Link} from "react-router-dom";

//just for testing sidebar
import {OCLogos} from "../assets/OClogo";

let logos = [];
for(let key in OCLogos){
    logos.push( <div key={key} className="SidebarCard">
       <Link to="/oc-page" ><img className="SidebarCardImg" src = "https://images.jdmagicbox.com/comp/chandigarh/c4/0172p1762.1762.110201201416.l1c4/catalogue/punjab-engineering-college-sector-12-chandigarh-placement-services-candidate--3er9sw3.jpg?clr=#006600" alt="pec"/>
       </Link></div>)
}


const Sidebar = ()=>{
    return <div className="Sidebar">
        {logos.map((logo)=>logo)} 
    </div>
}

export default Sidebar;