import React from "react";
import "./SignUp.css";
import { Link } from "react-router";
import Nav from "../Nav/Nav";

const SignUp = () => {
  return (
    <div className="container">
      <Nav />
      <div className="row sign-up-row justify-content-center align-items-center">
        <div className="login w-25 text-center">
          <h2 className="mb-4">Registration</h2>
          <form action="">
            <input
              className="form-control py-2 px-3 my-3"
              type="text"
              placeholder="Name"
            />
            <input
              className="form-control py-2 px-3 my-3"
              type="email"
              placeholder="Email"
            />
            <input
              className="form-control py-2 px-3"
              type="password"
              placeholder="Password"
            />
            <input
              className="form-control py-2 px-3 my-3"
              type="password"
              placeholder="Confirm Password"
            />
            <input
              type="submit"
              value="Sign Up"
              className="primary-btn py-2 px-3 mb-3 w-100"
            />
          </form>
          <div>
            <Link to="/login" className="mt-2">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
