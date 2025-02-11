import React, { useContext, useState } from "react";
import "./Login.css";
import Nav from "../Nav/Nav";
import { Link, useLocation, useNavigate } from "react-router";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { UserContext } from "../../App";

const Login = () => {
  const userContext = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = userContext[0];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const provider = new GoogleAuthProvider();

  const handleLoginWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        sessionStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="container">
      <Nav />
      <div className="row login-row d-flex justify-content-center align-items-center">
        <div className="login w-25 text-center">
          <h2 className="mb-4">Login</h2>
          <form onSubmit={handleLogin} action="">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control py-2 px-3 my-3"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
            <button
              onClick={handleLoginWithGoogle}
              className="primary-btn py-2 px-3 w-100 mb-3"
            >
              Login with Google
            </button>
            <Link to="/signup" className="mt-3">
              No account? Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
