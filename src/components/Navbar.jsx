import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../data";
import logo from "../assets/shared/logo.svg";
import "../style/Navbar.css";

function Navbar() {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
      <Link to="/" className="logo" onClick={() => setValue(0)}>
        <img src={logo} alt="space tourism logo" />
      </Link>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleNav}
      ></button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={isOpen ? "true" : "false"}
          className="primary-navigation underline-indicators flex"
        >
          {navItems.map((item, index) => {
            const { order, name, href } = item;
            return (
              <li key={index} className={`${index === value && "active"}`}>
                <Link
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  to={href}
                  onClick={() => {
                    setValue(index);
                    handleLinkClick();
                  }}
                >
                  <span aria-hidden="true">0{order}</span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
