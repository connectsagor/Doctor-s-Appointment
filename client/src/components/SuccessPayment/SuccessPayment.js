import React from "react";
import { CheckCircleFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentSuccess = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow text-center">
        <CheckCircleFill className="text-success mb-3" size={50} />
        <h2 className="text-dark">Payment Successful!</h2>
        <p className="text-muted">Thank you for your purchase.</p>
        <button
          className="btn btn-success mt-3"
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
