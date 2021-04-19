import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as OCActions from "../store/actions/OCActions";

const imgURL = "https://images.jdmagicbox.com/comp/chandigarh/c4/0172p1762.1762.110201201416.l1c4/catalogue/punjab-engineering-college-sector-12-chandigarh-placement-services-candidate--3er9sw3.jpg?clr=#006600";


const Sidebar = (props)=>{

    useEffect(()=>{
        props.fetchAllOC()
    },[])

    let logos = [];

    if(props.OCList !== null){
        console.log(props.OCList)
        logos = props.OCList.filter((OC)=>{
            return OC.members.includes(props.sid) || OC.followers.includes(props.sid)
        })
        console.log(logos)
    }

    return <div className="Sidebar">
        {logos.map((OC, index)=>{
           return <div key={index} className="SidebarCard" >
            <Link to={"/oc-page/"+OC.name}><img className="SidebarCardImg" src = {imgURL} alt="pec"/>
            </Link>
            {/* temporary */}
            {OC.name}
            </div>
        })} 
    </div>
}

const mapStateToProps = (state)=>{
    return {
        sid : state.user.sid,
        OCList : state.OC.OCList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchAllOC : ()=>dispatch(OCActions.fetchAllOC())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Sidebar);