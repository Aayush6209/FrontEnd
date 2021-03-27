import React from "react";
import {Jumbotron} from "reactstrap";
import "./App.css";
import SignUp from "./components/signup";
import Login from "./components/login";

const App = ()=>{
  return <>
  <Jumbotron>
  <h1 className="display-3">Event-Sight</h1>
  <p>Welcome to front end</p>
  </Jumbotron>
  <SignUp/>
  <Login/>
  </>;
}

export default App;