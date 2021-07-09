import React from "react";

import "./styles/main.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/booking'>
          <Booking />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
