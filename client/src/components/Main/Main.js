import React from "react";
import chair from "../../assets/images/chair.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="row main-row d-flex justify-content-between align-items-center">
        <div className="col-md-6">
          <h1 className="w-75">Your New Smile Starts Here</h1>
          <p className="w-75">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="border-0 primary-btn py-2 px-4">
            Get Started
          </button>
        </div>
        <div className="col-md-6">
          <img src={chair} alt="chair" />
        </div>
      </div>
    </div>
  );
};

export default Main;
