import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";

import Appointments from "./components/Appointments/Appointments";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
