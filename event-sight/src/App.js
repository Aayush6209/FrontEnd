import React from "react";
import {Jumbotron} from "reactstrap";
import "./App.css";
import SignUp from "./components/signup";
import Login from "./components/login";
import EventForm from "./components/eventForm"
import ESNavbar from "./components/esNavbar";
import Example from "./components/EventCard";
<<<<<<< HEAD
import Sidebar from "./components/sidebar";
=======
>>>>>>> 97a1e3bb2f73211bf53b53af2283dba8bae0f875

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
  <Example />
<<<<<<< HEAD
  </div>
  </div>;
=======
  </>;
>>>>>>> 97a1e3bb2f73211bf53b53af2283dba8bae0f875
}

export default App;