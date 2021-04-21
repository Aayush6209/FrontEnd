import React , {useState} from "react"
import {useJsonToCsv} from "react-json-csv";
import {FiDownload} from "react-icons/fi";
import { Tooltip } from 'reactstrap';

const RegisteredStudents = (props)=>{

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const filename = 'sampleEvent',
    fields = {
    "sid": "SID",
    "name": "Name"
    },
    data = [
    { sid: 19103007, name : "Shivam Arora"},
    { sid: 19103022, name: "Sarthak Chauhan"},
    { sid: 19103026, name: "Aayush Gupta"},
    { sid: 19103028, name: "Arjun Kathail"}
    ];


    const { saveAsCsv } = useJsonToCsv();
   

    return <div>
     <div id="download" onClick={()=>{saveAsCsv({ data, fields, filename })}} className = "DownloadButton" >
         <FiDownload size="40px"/>
    </div>
    <Tooltip placement="bottom" isOpen={tooltipOpen} target="download" toggle={toggle}>
        Download Participants' Details
      </Tooltip>
    </div>
}

export default RegisteredStudents;