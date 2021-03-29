import React from "react";
import {Row, Col} from "reactstrap";
import Login from "../components/login";
import {Link} from "react-router-dom";

const AuthUser = ()=>{
    return <div>
        <Row>
            <Col lg="6"><h1>EVENT SIGHT</h1></Col>
            <Col lg="6">
                    <Row lg="1"><Login/></Row>
                    <Row lg="1">Don't have a account? <Link to="/">Sign up</Link></Row>
            </Col>
        </Row>
    </div>
}

export default AuthUser;