import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <nav>
                
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/destination/1">Destination</Link></span>
                    <span><Link to="/crew/1">Crew</Link></span>
                    <span><Link to="/technology/1">Technology</Link></span>
                
            </nav>
        </div>
    )
}

export default NavBar
