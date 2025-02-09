import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import DentelCare from "./components/DentalCare/DentelCare";
import Appointment from "./components/Appointment/Appointment";
import Testimonials from "./components/Teastimonials/Testimonials";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Contact />
      <Services />
      <DentelCare />
      <Appointment />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
