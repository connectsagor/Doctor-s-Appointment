import React from "react";
import logo from "../../assets/images/logo.png";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img className="w-25 h-50" src={logo} alt="logo" />
        </a>

        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#aboit">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#app">
                Appointment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#s">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#s">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
