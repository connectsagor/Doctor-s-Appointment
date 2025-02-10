import React from "react";
import Nav from "../Nav/Nav";
import CalendarHero from "../CaldendarHero/CalendarHero";
import AvailableServices from "../AvailableServices/AvailableServices";
import AvailableSlot from "../AvailableSlot/AvailableSlot";
import Footer from "../Footer/Footer";

const Appointments = () => {
  return (
    <>
      <Nav />
      <CalendarHero />
      <AvailableServices />
      <AvailableSlot />
      <Footer />
    </>
  );
};

export default Appointments;
