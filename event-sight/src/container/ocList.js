import React from "react";
import {Row, Col} from "reactstrap";
import OCCard from "../components/OCCard";
import {Link} from "react-router-dom";

const OCList = ()=>{

    //just for testing
    var foo = [];
    for (var i = 1; i <= 5; i++) {foo.push(i);}

    return <>
    <Row lg="2">
        {
        foo.map((a)=><Col key={a}><Link to="/oc-page" className="OCListLink"><OCCard/></Link></Col>)
        }
        </Row>
    </>
}

export default OCList;