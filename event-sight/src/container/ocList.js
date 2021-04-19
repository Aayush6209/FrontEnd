import React, {useEffect} from "react";
import {Row, Col} from "reactstrap";
import OCCard from "../components/OCCard";
import {Link} from "react-router-dom";
import ESSpinner from "../UI/ESSpinner";

import {connect} from "react-redux";
import * as OCActions from "../store/actions/OCActions";
import * as actionTypes from "../store/actions/actionTypes";

const OCList = (props)=>{

    useEffect(()=>{
        props.fetchAllOC()
    },[])

    let OCrender = null;
    if(props.loading){
        OCrender = <ESSpinner />
    }
    else{
        if(props.OCList !== null){
        OCrender = <Row lg="2" md="1" sm="1" xs="1">
        {
        props.OCList.map((OC, index)=><Col key={index}><Link to={"/oc-page/" + OC.name} className="OCListLink" onClick={()=>{
            props.selectOC(OC)
        }}><OCCard OCName={OC.name}/></Link></Col>)
        }
        </Row>}
    }
    
    return <>
    {OCrender}
    </>
}

const mapStateToProps = (state)=>{
    return {
        loading : state.OC.loading,
        OCList : state.OC.OCList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchAllOC : ()=>dispatch(OCActions.fetchAllOC()),
        selectOC : (oc)=>dispatch({
            type : actionTypes.SELECT_OC,
            OC : oc
        }),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(OCList);