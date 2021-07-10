import React from "react";

import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, signOut } = useAuth();
  return (
    <nav>
      <div>
        <p>Fly Bangladesh</p>
      </div>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/booking'>Booking</NavLink>
        </li>
        <li>
          {currentUser ? (
            <button onClick={signOut}>Log out</button>
          ) : (
            <NavLink to='/login'>Log in</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
