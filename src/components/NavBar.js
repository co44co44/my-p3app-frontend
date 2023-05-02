import React from 'react';
import { NavLink } from "react-router-dom"

const NavBar =() => {

    return (
        <nav>
            <NavLink to= "/"> Home </NavLink>
            <NavLink to= "/students"> Students </NavLink>
            
        </nav>

    )

}

export default NavBar