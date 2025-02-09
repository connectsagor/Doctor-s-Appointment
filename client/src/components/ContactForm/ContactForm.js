import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form my-5 py-5">
      <div className="container text-white">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center d-flex flex-column align-items-center">
            <h5>Contact Us</h5>
            <h2>Stay connected with us</h2>
            <div className="contact-form text-center d-flex flex-column w-75">
              <input
                className="form-control mt-3"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className="form-control mt-3"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
              <textarea
                className="form-control mt-3"
                name="textarea"
                id="textarea"
                placeholder="Enter Your Message"
              ></textarea>
              <div className="d-flex justify-content-center">
                <input
                  className="mt-4 w-25 primary-btn py-2  px-3"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
