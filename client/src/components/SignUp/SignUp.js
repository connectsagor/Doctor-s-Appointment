import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router";
import Nav from "../Nav/Nav";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { UserContext } from "../../App";

const SignUp = () => {
  const userContext = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = userContext[0];
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const RegisterUser = async (email, password, name) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      sessionStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
      const userDoc = doc(db, "users", user.uid); // 'users' is the collection name
      await setDoc(userDoc, {
        name: name,
        email: email,
        createdAt: new Date(),
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password === ConfirmPassword) {
      RegisterUser(email, password, name);
    }
  };

  return (
    <div className="container">
      <Nav />
      <div className="row sign-up-row justify-content-center align-items-center">
        <div className="login w-25 text-center">
          <h2 className="mb-4">Registration</h2>
          <form onSubmit={handleSignUp} action="">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control py-2 px-3 my-3"
              type="text"
              placeholder="Name"
            />
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
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={ConfirmPassword}
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
