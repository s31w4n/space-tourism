import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../data";
import logo from "../assets/shared/logo.svg";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 720) {
      setIsOpen(false);
    }
  };

  return (
    <header className="primary-header flex">
      <Link
        to="/"
        className="logo"
        onClick={() => {
          navigate("/");
          handleLinkClick();
        }}
      >
        <img src={logo} alt="space tourism logo" />
      </Link>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={toggleNav}
      ></button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={isOpen}
          className="primary-navigation underline-indicators flex"
        >
          {navItems.map((item, index) => {
            const { order, name, href } = item;
            const isActive = location.pathname === href;
            return (
              <li key={index} className={`${isActive ? "active" : ""}`}>
                <NavLink
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  to={href}
                  onClick={handleLinkClick}
                >
                  <span aria-hidden="true">0{order}</span>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
