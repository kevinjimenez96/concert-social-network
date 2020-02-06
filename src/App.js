import React from "react";
import "./App.scss";
import NavBar from "./components/navbar/nav-bar";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar></NavBar>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
