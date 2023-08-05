import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Technology from "../components/pages/technology/technology";
import Home from "./../components/pages/home/home";
import Destination from "./../components/pages/destination/destination";
import Crew from "./../components/pages/crew/crew";
import NavBar from "../components/navBar/navBar";
//import "./router.scss";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="RouterContainer">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<Destination />} />
          <Route path="/crew/:id" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;