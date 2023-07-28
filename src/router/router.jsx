import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Technology from '../components/pages/technology/technology'
import Home from './../components/pages/home/home';
import Destination from './../components/pages/destination/destination';
import Crew from './../components/pages/crew/crew';
import NavBar from '../components/navBar/NavBar';



const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination/:id" element={<Destination />} />
                <Route path="/crew/:id" element={<Crew />} />
                <Route path="/technology/:id" element={<Technology />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
