import React from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/Icon-material-menu.svg";
import bell from "../../assets/bell.svg";
import search from "../../assets/Icon-feather-search.svg";
import lens from "../../assets/Icon-material-color-lens.svg";
import plus from "../../assets/plus.svg";
import user from "../../assets/user.svg";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="Navbar">
    <div className="menu-logo">
      <div>
        <img src={menu} alt="menu icon" />
      </div>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
    <div className="nav-links">
      <ul>
        <li>Task</li>
        <li>Team</li>
        <li>Project</li>
      </ul>
    </div>
    <div className="notification">
      <div>
        <img src={search} alt="" />
      </div>
      <div>
        <img src={bell} alt="" />
      </div>
      <div>
        <img src={lens} alt="" />
      </div>
      <div>
        <img src={plus} alt="" />
      </div>
      <div>
        <img src={user} alt="" />
      </div>
    </div>
  </div>
);

export default Navbar;
