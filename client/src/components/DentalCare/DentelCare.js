import React from "react";
import dental from "../../assets/images/treatment.png";

const DentelCare = () => {
  return (
    <div className="container my-5 p-3">
      <div className="row">
        <div className="col-md-6 text-end">
          <img className="w-50 rounded-2" src={dental} alt="treatment" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="dental-info w-75 p-3">
            <h2>Exceptional Dental Care, on Your Terms</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="primary-btn py-2 px-3">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentelCare;
