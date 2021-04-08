import React from "react";
import {Row, Col} from "reactstrap";

import EventCard from "../components/EventCard";
import Sidebar from "../components/sidebar";
import {Img} from "../assets/URLImages"

const Homepage = ()=>{
    //testing
    var foo = [];
    for (var i = 1; i <= 20; i++) {foo.push(i);}
    return <>
    <Sidebar/>
    <Row lg="1" md="1" sm="1" xs="1">
    {
        foo.map(k=><Col key={k}><EventCard img={Img.img}/></Col>)
    }
    </Row>
    </>

}

export default Homepage;