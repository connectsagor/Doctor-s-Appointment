import React from "react";
import "./Contact.css";
const contactInfo = [
  {
    id: 1,
    title: "Opening Hours",
    des: "Lorem Ipsum is simply dummy text ",
    img: "clock.svg",
  },
  {
    id: 2,
    title: "Visit our location",
    des: "Brooklyn, NY 10036, United States",
    img: "marker.svg",
  },
  {
    id: 3,
    title: "Contact us now",
    des: "+000 123 456789",
    img: "phone.svg",
  },
];

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {contactInfo.map((contact) => {
          return (
            <div key={contact.id} className="col-md-4 ">
              <div
                className={`contact-box d-flex justify-content-center align-items-center p-3 rounded-1 text-white gap-4 ${
                  contact.id === 2 ? "contact-bg" : "contact"
                }`}
              >
                <div className="left">
                  <img
                    className="contact-img"
                    src={`/icons/${contact.img}`}
                    alt="Logo"
                  />
                </div>
                <div className="right">
                  <h4>{contact.title}</h4>
                  <p>{contact.des}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
