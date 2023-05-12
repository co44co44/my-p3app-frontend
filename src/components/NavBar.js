import React from 'react';
import { NavLink } from "react-router-dom"

const NavBar =() => {

    return (
        <div>
        <h1>MY TUTORING TRACKER</h1>
        <nav>
            <NavLink to= "/"> Home </NavLink>
            
            <NavLink to= "/students"> My Students and Courses Tracker</NavLink>
           
            <NavLink to= "/contact"> Contact us</NavLink>
            
        </nav>
        </div>
    )

}

export default NavBar