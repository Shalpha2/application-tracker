import React from 'react';
import {  NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-dark  mb-2">
      <div className="container-fluid">
      <NavLink to="/" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Home</NavLink> 
<NavLink to="/analytics" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Analytics</NavLink> 
<NavLink to="/about" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>About</NavLink> 
<NavLink to="/profile" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Profile</NavLink> 
<NavLink to="/contact" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Contact</NavLink> 

      </div>
    </nav>
  );
}
