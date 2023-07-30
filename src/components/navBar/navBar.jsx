import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <span>
          <Link className="a" to="/">
            Home
          </Link>
        </span>
        <span>
          <Link className="a" to="/destination/1">
            Destination
          </Link>
        </span>
        <span>
          <Link className="a" to="/crew/1">
            Crew
          </Link>
        </span>
        <span>
          <Link className="a" to="/technology">
            Technology
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
