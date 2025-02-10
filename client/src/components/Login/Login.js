import React from "react";
import "./Login.css";
import Nav from "../Nav/Nav";

const Login = () => {
  return (
    <div className="container">
      <Nav />
      <div className="row login-row d-flex justify-content-center align-items-center">
        <div className="login w-25 text-center">
          <h2 className="mb-4">Login</h2>
          <form action="">
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
              type="submit"
              value="Login"
              className="primary-btn py-2 px-3 my-3 w-100"
            />
          </form>
          <div>
            <button className="primary-btn py-2 px-3 w-100">
              Login with Google
            </button>
            <p className="mt-3">No account? Create one</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
