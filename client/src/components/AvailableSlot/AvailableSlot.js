import React, { useState } from "react";
import SlotModal from "../Appointment/AppointmentForm/AppointmentForm";

const availableSlot = [
  {
    id: 1,
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    time: "10:05 am - 11:30 am",
  },
  {
    id: 3,
    title: "Teeth Cleaning",
    time: "8:00 AM - 9:00 AM",
  },
  {
    id: 4,
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
  },
  {
    id: 5,
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
  },
];
const AvailableSlot = ({ selectedDate }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(service) {
    sessionStorage.setItem("service", JSON.stringify(service));
    setIsOpen(true);
  }

  function closeModal() {
    sessionStorage.removeItem("service");
    setIsOpen(false);
  }
  return (
    <div className="container my-5">
      <div className="row text-center mb-4">
        <h2>Available slots for Teeth Orthodontics.</h2>
      </div>
      <div className="row text-center">
        {availableSlot.map((service) => {
          return (
            <div key={service.id} className="col-md-4">
              <div className="services my-4 rounded-1 p-3 shadow-lg">
                <h4>{service.title}</h4>
                <p>{service.time}</p>
                <button
                  onClick={() => openModal(service)}
                  className="primary-btn py-2 px-3"
                >
                  Book appointment
                </button>
              </div>
            </div>
          );
        })}
        <SlotModal
          user={user}
          selectedDate={selectedDate}
          modalFunc={[modalIsOpen, openModal, closeModal]}
        />
      </div>
    </div>
  );
};

export default AvailableSlot;
