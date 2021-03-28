import React from "react";
import {Card, CardTitle} from "reactstrap";

//just for testing sidebar
import {OCnames} from "../assets/OCname";


const Sidebar = ()=>{
    return <div className="Sidebar">
        <h3  className="SidebarHeading">Member At</h3>
        {OCnames.slice(2,6).map((oc, index)=>{
            return <Card key={index}  className="SidebarCard">
                <CardTitle tag="h6">{oc}</CardTitle>
            </Card>
        })}
       <h3 className="SidebarHeading">Following</h3>
       {OCnames.slice(5,18).map((oc, index)=>{
            return <Card key={index} className="SidebarCard">
                <CardTitle tag="h6">{oc}</CardTitle>
            </Card>
        })}
    </div>
}

export default Sidebar;