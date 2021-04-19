import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import ESNavbar from "./components/esNavbar";
import Homepage from "./container/homepage";
import EventForm from "./components/eventForm";
import AuthUser from "./container/authUser"
import OCList from "./container/ocList";
import OCPage from "./container/OCPage";
import SignUp from "./components/signup";
import EventPage from "./container/eventPage";
import RegisteredEvents from "./components/registeredEvents";
import InterestedEvents from "./components/interestedEvents";

import {connect} from "react-redux";

const App = (props)=>{
  let routes = null;
  if(props.sid===null){
    routes = <Switch>
      <Route path="/auth-user" exact component={AuthUser}/>
      <Route path="/signup" exact component={SignUp}/>
      <Redirect to="/auth-user" />
    </Switch>
  }else if(props.role==="Admin"){
    routes = <Switch>
      <Route path="/create-event" exact component={EventForm}/>
      <Route path="/oc-page/:name" exact component={OCPage}/>
      <Route path="/event" exact component={EventPage}/>
      <Redirect to={"/oc-page/" + props.OCName} />
    </Switch>
  }else{
    routes = <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/registered-events" exact component={RegisteredEvents} />
      <Route path="/interested-events" exact component={InterestedEvents} />
      <Route path="/oc-list" exact component={OCList}/>
      <Route path="/oc-page/:name" exact component={OCPage}/>
      <Route path="/event" exact component={EventPage}/>
      <Redirect to="/"/>
    </Switch>
  }
  return <div>
  <div><ESNavbar/></div>
  <div className="mainContent">
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