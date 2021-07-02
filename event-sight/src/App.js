import React from "react";
import "./App.css";
import "./AppMedia.css";

import { Redirect, Route, Switch } from "react-router-dom";
import ESNavbar from "./components/esNavbar";
import Homepage from "./container/homepage";
import EventForm from "./components/eventForm";
import AuthUser from "./container/authUser"
import OCList from "./container/ocList";
import OCPage from "./container/OCPage";
import SignUp from "./components/signup";
import EventPage from "./container/eventPage";
import RegisteredEvents from "./components/RegisteredEvents";
import InterestedEvents from "./components/InterestedEvents";
import about from "./components/about"


import {connect} from "react-redux";

const App = (props)=>{
  let routes = null;
  if(props.role===null){
    routes = <Switch>
      <Route path="/auth-user" exact component={AuthUser}/>
      <Route path="/signup" exact component={SignUp}/>
      <Route path="/about-us" exact component={about}/>
      <Redirect to="/auth-user" />
    </Switch>
  }else if(props.role==="Admin"){
    routes = <Switch>
      <Route path="/create-event" exact component={EventForm}/>
      <Route path="/oc-page/:name" exact component={OCPage}/>
      <Route path="/event/:id/:name" exact component={EventPage}/>
      <Redirect to={"/oc-page/" + props.OCName} />
    </Switch>
  }else{
    routes = <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/registered-events" exact component={RegisteredEvents} />
      <Route path="/interested-events" exact component={InterestedEvents} />
      <Route path="/oc-list" exact component={OCList}/>
      <Route path="/oc-page/:name" exact component={OCPage}/>
      <Route path="/event/:id/:name" exact component={EventPage}/>
      <Redirect to="/"/>
    </Switch>
  }
  return <div>
    <ESNavbar/>
  <div className={props.sid!== null ? "mainContent" : null } >
    {routes}
  </div>
  </div>;
}

const mapStateToProps = (state)=>{
  return {
    sid : state.user.sid,
    role : state.user.role,
    OCName : state.user.OCName
  }
}

export default connect(mapStateToProps)(App);