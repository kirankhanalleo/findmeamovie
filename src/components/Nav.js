import React from "react";
import "./Nav.css";
import logo from "./assets/logo.png";
import { BiUserCircle } from "react-icons/bi";
function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <div className="nav__contentsLogo">
          <img src={logo} alt="pickmeamovie" />
        </div>
        <div className="nav__contentsSearchBar">
          <BiUserCircle className="icon" title="create user" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
