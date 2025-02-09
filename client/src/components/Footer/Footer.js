import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="my-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>SERVICES</h5>
            <p>Emergency Checkup</p>
            <p>Weekly Checkup</p>
            <p>Monthly Checkup</p>
            <p>Deep Checkup</p>
          </div>
          <div className="col-md-4">
            <h5>ORAL HEALTH</h5>
            <p>Fluoride Treatment</p>
            <p>Cavity Filling</p>
            <p>Teath Whitening</p>
          </div>
          <div className="col-md-4">
            <h5>OUR ADDRESS</h5>
            <p>New York - 101010 Hudson</p>
          </div>
          <p>Copyright 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
