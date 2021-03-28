import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ESNavbar from "./components/esNavbar";
import Homepage from "./container/homepage";
import EventForm from "./components/eventForm";
import AuthUser from "./container/authUser"


const App = ()=>{
  return <>
  <div><ESNavbar/></div>
  <div className="mainContent">
    <Switch>
      <Route path="/create-event" exact component={EventForm}/>
      <Route path="/" exact component={Homepage} />
      <Route path="/auth-user" exact component={AuthUser} />
      </Switch>
  </div>
  </>;
}

export default App;