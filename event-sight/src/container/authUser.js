import React from "react";
import {Row, Col} from "reactstrap";
import Login from "../components/login";
import {Link} from "react-router-dom";

const AuthUser = ()=>{
    return <div>
        <Row>
            <Col lg="6"><div
            style={{
                padding : "10%"
            }}><h1 className="AuthPageTitle">Event Sight</h1></div></Col>
            <Col lg="6" md="12">
                    <Row lg="1" md="1" sm="1" xs = "1"><div className="AuthLoginDiv"><Login/></div></Row>
                    <Row lg="1" md="1" sm="1" xs = "1"><center><div className="AuthSignUpOption">Don't have an account? <Link to="/signup">Sign up</Link></div></center></Row>
            </Col>
        </Row>
    </div>
}

export default AuthUser;