import React, { useContext } from "react";
import "./Nav.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../../App";
const Nav = () => {
  const userContext = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = userContext[0];
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user");
        setIsLoggedIn(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar navbar-expand-lg font-monospace">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="w-25 h-50" src={logo} alt="logo" />
        </Link>

        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {isLoggedIn && (
                <Link
                  to="/dashboard"
                  className="nav-link active"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link to="/appointments" className="nav-link">
                Appointment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Reviews</Link>
            </li>
            <li className="nav-item">
              {user && isLoggedIn ? (
                <Link onClick={handleLogOut} className="nav-link">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
