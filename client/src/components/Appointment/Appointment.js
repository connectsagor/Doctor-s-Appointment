import React from "react";
import doctor from "../../assets/images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment text-white">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <img className="w-75" src={doctor} alt="doctor" />
          </div>
          <div className="col-md-6">
            <div className="appointment-info w-75">
              <h5>Appointment</h5>
              <h2 className="my-3">Make an appointment Today</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button className="primary-btn py-2 px-3">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
