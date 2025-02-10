import React from "react";
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
const AvailableSlot = () => {
  return (
    <div className="container my-5">
      <div className="row text-center mb-4">
        <h2>Available slots for Teeth Orthodontics.</h2>
      </div>
      <div className="row text-center">
        {availableSlot.map((service) => {
          return (
            <div className="col-md-4">
              <div className="services my-4 rounded-1 p-3 shadow-lg">
                <h4>{service.title}</h4>
                <p>{service.time}</p>
                <button className="primary-btn py-2 px-3">
                  Book appointment
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableSlot;
