
import React from 'react'
import {NavLink} from "react-router-dom";

const link = {
    width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'purple',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = ()=> {

    return (
        <div className ="navbar">
            <h1>Welcome to BooK Face !!</h1>
            <NavLink 
        to= '/'
        exact
        style={link}
        >About</NavLink>
        <NavLink 
        to= '/profiles'
        exact
        style={link}
        >Profiles</NavLink>
        <NavLink 
        to= '/profiles/new'
        exact
        style={link}
        >Add New Profile</NavLink>
        
      </div>
    

    )
}

export default NavBar;
