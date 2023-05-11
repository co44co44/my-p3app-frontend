import React from 'react';
import { NavLink } from "react-router-dom"

const NavBar =() => {

    return (
        <nav>
            <NavLink to= "/"> Home </NavLink>
            
            <NavLink to= "/students"> My Students and Courses Tracker</NavLink>
           
            <NavLink to= "/contact"> Contact us</NavLink>
            
        </nav>

    )

}

export default NavBar