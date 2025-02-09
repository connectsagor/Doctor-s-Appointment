import React from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Fitz Darcy",
    location: "California",
    img: "people1.png",
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    id: 2,
    name: "Lidia",
    location: "Los Angels",
    img: "people2.png",
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    id: 3,
    name: "Sonia",
    location: "New York",
    img: "people3.png",
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="d-flex justify-content-between">
          <div>
            <h5>Testimonial</h5>
            <h2>What Our Patients Say!</h2>
          </div>
          <div>
            <img className="contact-img" src={`/icons/quote.svg`} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        {testimonialsData.map((testimonial) => {
          return (
            <div key={testimonial.id} className="col-md-3">
              <div className="testimonials-box shadow-lg p-3 rounded-1">
                <div className="content mb-3">{testimonial.des}</div>
                <div className="content-user d-flex justify-content-center align-items-center">
                  <div className="left">
                    <img
                      className="w-50"
                      src={require(`../../assets/images/${testimonial.img}`)}
                      alt="images"
                    />
                  </div>
                  <div className="right">
                    <div className="name">
                      <h4>{testimonial.name}</h4>
                      <h6>{testimonial.location}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
