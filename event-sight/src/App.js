import React from "react";
import {Jumbotron} from "reactstrap";
import "./App.css";
import SignUp from "./components/signup";
import Login from "./components/login";
import EventForm from "./components/eventForm"
import ESNavbar from "./components/esNavbar";
import Sidebar from "./components/sidebar";

const App = ()=>{
  return <div>
  <ESNavbar/>
  <Sidebar/>
  <div className="Content">
  <Jumbotron style={{
    display : "block"
  }}>
  <h1 className="display-3">Event-Sight</h1>
  <p>Welcome to frontend</p>
  </Jumbotron>
  <SignUp/>
  <Login/>
  <EventForm/>
  </div>
  </div>;
}

export default App;