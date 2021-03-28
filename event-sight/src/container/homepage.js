import React from "react";
import {Row, Col} from "reactstrap";

import EventCard from "../components/EventCard";
import ClubCard from "../components/ClubCard";
import Sidebar from "../components/sidebar";

const Homepage = ()=>{
    //testing
    var foo = [];
    for (var i = 1; i <= 20; i++) {foo.push(i);}
    return <>
    <Sidebar/>
    <Row lg="3" md="2" sm="2" xs="1">
    {
        foo.map(k=><Col key={k} ><EventCard/></Col>)
    }
    </Row>
    <ClubCard />
    </>

}

export default Homepage;