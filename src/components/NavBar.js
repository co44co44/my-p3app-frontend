// import { logDOM } from '@testing-library/react';
import React from 'react';
import { NavLink } from "react-router-dom"

const NavBar =() => {

    return (
        <div>
        <img src= "logo192.png"></img>
        
        <h1> MY TUTORING TRACKER</h1>
            <nav>
                <NavLink to= "/"> Home </NavLink>
                
                <NavLink to= "/students"> MY STUDENTS</NavLink>
            
                <NavLink to= "/contact"> Contact us</NavLink>
                
            </nav>
        </div>
    )

}

export default NavBar