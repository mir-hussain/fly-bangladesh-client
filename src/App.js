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
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/booking/:id'>
            <Booking />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
