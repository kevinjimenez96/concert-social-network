import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./components/navbar/nav-bar";
import { Home } from "./components/home/home";
import "./App.scss";
import initializer from "./database/initializer";

function App() {
  initializer();
  return (
    <div className='App'>
      <Router>
        <NavBar></NavBar>
        <main className='main-content'>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Redirect to='/'></Redirect>
            </Route>
            <Route path='/index'>
              <Redirect to='/'></Redirect>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
