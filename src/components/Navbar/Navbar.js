import React from "react";
import "./Navbar.css";

import menuimg from "../../images/Group 4.png";
import logo from "../../images/Flex Perks Logo.png";
import search from "../../images/Group 3.png";
import logout from "../../images/iconmonstr-log-out-2.png";

function Navbar() {
  return (
    <nav className="container">
      <div className="nav_back">
        <img src={menuimg} alt={menuimg} />
        <img src={logo} alt={logo} />
        <div className="search_icon">
          <img src={search} alt={search} />
          <h5>Search</h5>
        </div>
        <div className="logout_icon">
          <img src={logout} alt={logout} />
          <h5>Log Out</h5>
        </div>
      </div>

      <div className="nav-bar">
        <h4>
          Home / Merchandise / Electronic / <b>Cameras</b>
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
