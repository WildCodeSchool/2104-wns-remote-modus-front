import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/styles.css";

const Navbar = (): JSX.Element => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/ask-help">AskingHelpForm</NavLink>
    </div>
  );
};

export default Navbar;
