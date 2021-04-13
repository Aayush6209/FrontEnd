import React from "react";
import {Alert} from "reactstrap";
import "./ESUI.css";

const ESAlert = (props)=>{
    return <div className = "ESAlert">
        <Alert color = {props.AlertColor}> {props.AlertText} </Alert>
    </div>
}

export default ESAlert;
