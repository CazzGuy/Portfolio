import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    document.querySelectorAll(".nav__menu a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      document.querySelectorAll(".nav__menu a").forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  return (
    <header className="nav">
      <nav className="nav__container">
        <p className="nav__logo">Abhi's Portfolio</p>
        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul>
            <NavLink to="/" className={({ isActive }) => (isActive ? "red" : "black")}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "red" : "black")}>
              <li>About</li>
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? "red" : "black")}>
              <li>Skills</li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "red" : "black")}>
              <li>Contact Me</li>
            </NavLink>
          </ul>
          <div className="nav__close" id="nav-close" onClick={() => setMenuOpen(false)}>
            ✖
          </div>
        </div>

        {/* Hide menu icon when menu is open */}
        {!menuOpen && (
          <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(true)}>
            ☰
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
