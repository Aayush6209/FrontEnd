import React, {useEffect} from "react";
import {Row, Col} from "reactstrap";
import EventCard from "../components/EventCard";
import Sidebar from "../components/sidebar";
import {Img} from "../assets/URLImages";
import {Link} from "react-router-dom";
import ESSpinner from "../UI/ESSpinner";
import {connect} from "react-redux";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";

const Homepage = (props)=>{

    useEffect(()=>{
        props.displayEvents()
    }, [])
    let eventsrender = null;
    var i=0;
    if(props.loading){
        eventsrender = <ESSpinner />
    }
    else{
        if(Homepage !== null){
            eventsrender=props.events && <Row lg="2" md="2" sm="1" xs="1">
            {
                props.events.map((event, index)=><Col key={index}><EventCard img={Img.img}/></Col>)
            }
            </Row>}
    }
    return <>
    <Sidebar />
    {eventsrender}
    </>

}

const mapStateToProps = (state)=>{
    return {
        loading: state.event.loading,
        events: state.event.events,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        displayEvents : ()=>dispatch(eventActions.displayEvents()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);