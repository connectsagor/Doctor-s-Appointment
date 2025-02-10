import React from "react";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import DentelCare from "../DentalCare/DentelCare";
import Appointment from "../Appointment/Appointment";
import Testimonials from "../Teastimonials/Testimonials";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Main />
      <Contact />
      <Services />
      <DentelCare />
      <Appointment />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
