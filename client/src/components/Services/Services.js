import React from "react";
import "./Services.css";

const servicesItem = [
  {
    id: 1,
    title: "Fluoride Treatment",
    des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: "fluoride.png",
  },
  {
    id: 2,
    title: "Cavity Filling",
    des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: "cavity.png",
  },
  {
    id: 3,
    title: "Teeth Whitening",
    des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: "whitening.png",
  },
];

const Services = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <h5>OUR SERVICES</h5>
        <h4>Services We Provide</h4>
        {servicesItem.map((service) => {
          return (
            <div key={service.id} className="col-md-4 mt-4">
              <div className="service-box d-flex flex-column align-items-center shadow-lg rounded-2 p-2">
                <img
                  className="w-25 my-3 service-img"
                  src={require(`../../assets/images/${service.img}`)}
                  alt="img"
                />
                <h4>{service.title}</h4>

                <p className="text-center">{service.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
