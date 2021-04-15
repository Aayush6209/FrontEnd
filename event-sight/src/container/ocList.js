import React, {useEffect} from "react";
import {Row, Col} from "reactstrap";
import OCCard from "../components/OCCard";
import {Link} from "react-router-dom";
import ESSpinner from "../UI/ESSpinner";

import {connect} from "react-redux";
import * as OCActions from "../store/actions/OCActions";

const OCList = (props)=>{

    useEffect(()=>{
        props.fetchAllOC()
    }, [])

    let OCrender = null;
    if(props.loading){
        OCrender = <ESSpinner />
    }
    else{
        OCrender = <Row lg="2" md="1" sm="1" xs="1">
        {
        props.OCList.map((a)=><Col key={a}><Link to="/oc-page" className="OCListLink"><OCCard/></Link></Col>)
        }
        </Row>
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
        fetchAllOC : ()=>dispatch(OCActions.fetchAllOC())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(OCList);