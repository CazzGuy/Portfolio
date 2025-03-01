import React from "react";
import "./css/navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>Abhi's Portfolio</li>
          <NavLink className={(e)=>{return e.isActive?"red":"black"}} to='/'><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":"black"}} to='/about'><li>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":"black"}} to='/skills'><li>Skills</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":"black"}} to='/contact'><li>Contact Me</li></NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
