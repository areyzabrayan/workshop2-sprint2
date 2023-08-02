import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/shared/icon-close.svg";
import "./navbar.scss";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    console.log("hamburguesa");
    setMenuActive(true);
  };

  const handleClose = () => {
    console.log("hola");
    setMenuActive(false);
  };
  return (
    <>
      <div className="NavBar">
        <nav className="nav__container">
          <span>
            <Link className="a" to="/">
              <span className="na">00</span> Home
            </Link>
          </span>
          <span>
            <Link className="a" to="/destination/1">
              <span className="na">01</span> Destination
            </Link>
          </span>
          <span>
            <Link className="a" to="/crew/1">
              <span className="na">02</span> Crew
            </Link>
          </span>
          <span>
            <Link className="a" to="/technology">
              <span className="na">03</span> Technology
            </Link>
          </span>
        </nav>
        <img className="circulo"></img>
        <span className="menu" onClick={handleClick}></span>
        <div className={`menu__desple ${menuActive ? "menu__active" : ""}`}>
          <span>
            <Link className="a" to="/">
              <span className="na">00</span> Home
            </Link>
          </span>
          <span>
            <Link className="a" to="/destination/1">
              <span className="na">01</span> Destination
            </Link>
          </span>
          <span>
            <Link className="a" to="/crew/1">
              <span className="na">02</span> Crew
            </Link>
          </span>
          <span>
            <Link className="a" to="/technology">
              <span className="na">03</span> Technology
            </Link>
          </span>
          <img className="icon__close" src={close} onClick={handleClose} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
