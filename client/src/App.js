import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { initializeApp } from "firebase/app";
import Appointments from "./components/Appointments/Appointments";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export const UserContext = createContext();
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedValue = localStorage.getItem("isLoggedIn");
    return savedValue === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, []);

  return (
    <>
      <UserContext.Provider value={[{ isLoggedIn, setIsLoggedIn }]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route
              path="/appointments"
              element={
                <>
                  <PrivateRoute>
                    <Appointments></Appointments>
                  </PrivateRoute>
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
