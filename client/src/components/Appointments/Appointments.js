import React, { useState } from "react";
import Nav from "../Nav/Nav";
import CalendarHero from "../CaldendarHero/CalendarHero";
import AvailableServices from "../AvailableServices/AvailableServices";
import AvailableSlot from "../AvailableSlot/AvailableSlot";
import Footer from "../Footer/Footer";

const Appointments = () => {
  const [selectedDate, onSelectedDate] = useState(new Date());

  console.log();

  return (
    <>
      <Nav />
      <CalendarHero date={{ selectedDate, onSelectedDate }} />
      <AvailableServices date={selectedDate.toDateString()} />
      <AvailableSlot selectedDate={selectedDate.toDateString()} />
      <Footer />
    </>
  );
};

export default Appointments;
