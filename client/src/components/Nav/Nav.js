import React from "react";
import "./Nav.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg font-monospace">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="w-25 h-50" src={logo} alt="logo" />
        </Link>

        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
