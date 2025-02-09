import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import DentelCare from "./components/DentalCare/DentelCare";
import Appointment from "./components/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Contact />
      <Services />
      <DentelCare />
      <Appointment />
    </div>
  );
}

export default App;
