import React from 'react'
import Banner from './Banner'
import { useLocation } from "react-router-dom";
import "./navbar.css"

import Nav from './Nav'


const NavBar = () => {

    const location = useLocation();

    return (
        <div className="header">
            <div className="navbar-container">
                <Nav />
                {location.pathname === "/" && <Banner />}

            </div>
        </div>
    )
}

export default NavBar;