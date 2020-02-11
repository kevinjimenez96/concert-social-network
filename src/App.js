import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Spin } from "antd";
import { useAuth0 } from "./react-auth0-spa";
import NavBar from "./components/navbar/nav-bar";
import { Home } from "./components/home/home";
import PrivateRoute from "./components/private-route/PrivateRoute";
import "./App.scss";
import { AppProvider } from "./app-provider";
import { Login } from "./components/login/login";
import { MyEvents } from "./components/my-events/my-events";
import { Events } from "./components/events/events";
import { EventDetail } from "./components/event-detail/event-detail";
import { AddEvent } from "./components/add-event/add-event";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div className='large-spin-container'>
        <Spin size='large' />
      </div>
    );
  }

  return (
    <AppProvider>
      <div className='App'>
        <Router>
          <NavBar></NavBar>
          <main className='main-content'>
            <Switch>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/index'>
                <Redirect to='/'></Redirect>
              </Route>
              <PrivateRoute path='/home'>
                <Redirect to='/'></Redirect>
              </PrivateRoute>
              <PrivateRoute exact path='/events'>
                <Events></Events>
              </PrivateRoute>
              <PrivateRoute path='/events/:name'>
                <EventDetail></EventDetail>
              </PrivateRoute>
              <PrivateRoute path='/my-events'>
                <MyEvents></MyEvents>
              </PrivateRoute>
              <PrivateRoute path='/add-event'>
                <AddEvent></AddEvent>
              </PrivateRoute>
            </Switch>
          </main>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
