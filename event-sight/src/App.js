import React from "react";
import {Jumbotron} from "reactstrap";
import "./App.css";
import SignUp from "./components/signup";
import Login from "./components/login";
import EventForm from "./components/eventForm"
import ESNavbar from "./components/esNavbar";
import EventCard from "./components/EventCard";

const App = ()=>{
  return <>
  <ESNavbar/>
  <Jumbotron style={{
    display : "block"
  }}>
  <h1 className="display-3">Event-Sight</h1>
  <p>Welcome to frontend</p>
  </Jumbotron>
  <SignUp/>
  <Login/>
  <EventForm/>
  <EventCard />
  </>;
}

export default App;