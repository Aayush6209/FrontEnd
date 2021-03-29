import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import ESNavbar from "./components/esNavbar";
import Homepage from "./container/homepage";
import EventForm from "./components/eventForm";
import AuthUser from "./container/authUser"
import OCList from "./container/ocList";
import OCPage from "./container/OCPage";

const App = ()=>{
  return <>
  <div><ESNavbar/></div>
  <div className="mainContent">
    <Switch>
      <Route path="/create-event" exact component={EventForm}/>
      <Route path="/" exact component={Homepage} />
      <Route path="/auth-user" exact component={AuthUser} />
      <Route path="/oc-list" exact component={OCList}/>
      <Route Path="/oc-page" exact component={OCPage}/>
      <Redirect to="/"/>
      </Switch>
  </div>
  </>;
}

export default App;