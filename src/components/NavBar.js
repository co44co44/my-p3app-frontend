// import { logDOM } from '@testing-library/react';
import React from 'react';
import { NavLink } from "react-router-dom"

const NavBar =() => {

    return (
        // <div style = {{background:"black"}}>
        <div>
        {/* <img  src= "tracker.png"></img> */}
        
            <nav>
            <img src= "tracker.png"></img>
                <NavLink to= "/"> About Us </NavLink>
                
                <NavLink to= "/students"> MY STUDENTS</NavLink>
            
                <NavLink to= "/contact"> Contact us</NavLink>
                
            </nav>
        </div>
    )

}

export default NavBar