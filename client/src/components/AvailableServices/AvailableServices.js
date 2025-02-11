import React from "react";
import "./AvailableServices.css";

const AvailableServices = (props) => {
  const selectedDate = props.date;
  const servicesItems = [
    {
      id: 1,
      name: "Teeth Orthodontics",
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
    },
    {
      id: 3,
      name: "Teeth Cleaning",
    },
    {
      id: 4,
      name: "Cavity Protection",
    },
    {
      id: 5,
      name: "Pediatric Dental",
    },
    {
      id: 6,
      name: "Oral Surgery",
    },
  ];
  return (
    <div className="container my-5">
      <div className="row text-center">
        {selectedDate && <h2>Available Services on {selectedDate}</h2>}
        <h5>Please select a service</h5>
      </div>

      <div className="row text-center mt-5">
        {servicesItems.map((service) => {
          return (
            <div key={service.id} className="col-md-4">
              <div className="services p-4 my-3 rounded-1 shadow-lg">
                <h5 className="services-title">{service.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableServices;
