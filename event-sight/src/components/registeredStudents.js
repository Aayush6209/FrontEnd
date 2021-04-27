import React , {useState, useEffect} from "react"
import {useJsonToCsv} from "react-json-csv";
import {FiDownload} from "react-icons/fi";
import { Tooltip , Row, Col} from 'reactstrap';
import {connect} from "react-redux";
import {fetchRegisteredStudents} from "../store/actions/eventActions";

const RegisteredStudents = (props)=>{

    useEffect(()=>{
        
        props.fetchRegisteredStudents(props.sid, props.selectedEvent.id, props.token)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    let filename = '',
    fields = {
    "sid": "SID",
    "name": "Name"
    },
    data = [];

    if(props.selectedEvent && props.registeredStudents){
        filename = props.selectedEvent.title;
    fields = {
    "sid": "SID",
    "name": "Name",
    "branch" : "Branch",
    "email" : "Email"
    }
    data = props.registeredStudents.map((student)=>{
        return {
            "sid" : student["student_id"],
            "name" : student["first_name"] + " " + student["last_name"],
            "branch" : student["branch"],
            "email" : student["email"]
        }
    })
    }
    

    const { saveAsCsv } = useJsonToCsv();
   
    return <div>
        { props.registeredStudents && props.registeredStudents.map(student=>{
            return <Row key={student["student_id"]}>
                <Col>{student["student_id"]}</Col>
                <Col>{student["first_name"]} {student["last_name"]}</Col>
                <Col>{student["branch"]}</Col>
            </Row>
        })}
     <div id="download" onClick={()=>{saveAsCsv({ data, fields, filename })}} className = "DownloadButton" >
         <FiDownload size="40px"/>
    </div>
    <Tooltip placement="bottom" isOpen={tooltipOpen} target="download" toggle={toggle}>
        Download Participants' Details
      </Tooltip>
    </div>
}

const mapStateToProps = (state)=>{
    return {
        selectedEvent : state.event.selectedEvent,
        registeredStudents : state.event.registeredStudents,
        sid : state.user.sid,
        token : state.user.token,
        showAlert : state.event.showAlert
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchRegisteredStudents : (sid, eventID, token)=>dispatch(fetchRegisteredStudents(sid, eventID, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredStudents);