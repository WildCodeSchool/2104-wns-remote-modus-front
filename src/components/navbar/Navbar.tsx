import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = (): JSX.Element => {
  return (
    <div className="topnav">
      <div>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/asking-help-form">AskingHelpForm</NavLink>
        <NavLink to="/asking-help-index">AskingHelpPosts</NavLink>
      </div>
      <div className="welcomemessage">
        <div className="topnav message">Welcome user@mail.com</div>
        <img src="user-solid.svg" alt="profileIcon" className="profileIcon" />
      </div>
    </div>
  );
};

export default Navbar;
