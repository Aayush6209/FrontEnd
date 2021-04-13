import React from "react";
import {Spinner} from "reactstrap";

import "./ESUI.css";

const ESSpinner = ()=>{
    return <div className="ESSpinner">
        <Spinner color="danger" style={{
            height : "80px",
            width : "80px",
        }}/>
    </div>
}

export default ESSpinner;