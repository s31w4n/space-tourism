import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import "../style/Navbar.css";

function Navbar() {
  return (
    <header className="primary-header flex">
      <Link to="/" className="logo">
        <img src={logo} alt="space tourism logo" />
      </Link>
      <button className="mobile-nav-toggle" aria-controls="primary-navigation">
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex"
        >
          <li className="active">
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/"
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/destination"
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/crew"
            >
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/technology"
            >
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;