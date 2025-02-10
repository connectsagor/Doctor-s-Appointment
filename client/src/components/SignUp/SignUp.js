import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container">
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
            <p className="mt-2">Already have an account? Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
