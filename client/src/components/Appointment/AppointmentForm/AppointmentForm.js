import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { XCircleFill } from "react-bootstrap-icons";
import { redirect, useNavigate } from "react-router";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
function SlotModal({ modalFunc, selectedDate, user }) {
  const navigate = useNavigate();
  const [modalIsOpen, openModal, closeModal] = modalFunc;
  const service = JSON.parse(sessionStorage.getItem("service"));
  let date = selectedDate;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    const userData = {
      userId: user.uid,
      name,
      email,
      phone,
      date: selectedDate,
      service: service,
    };

    if (name && email && phone) {
      sessionStorage.setItem("userData", JSON.stringify(userData));
      navigate("/payment");
    }
  };
  return (
    <div className="text-center position-relative">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4 className="text-center mt-2">{service && service.title}</h4>
        <button
          className="border-0 bg-transparent position-absolute cross-btn"
          onClick={closeModal}
        >
          <XCircleFill />
        </button>

        <form>
          <input value={date} type="text" className="my-3 form-control" />

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            className="my-3 form-control"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            placeholder="Phone No"
            className="form-control"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Adress"
            className="form-control my-3"
          />
          <div className="d-flex justify-content-center my-3">
            <input
              onClick={handlePayment}
              type="submit"
              value="Submit"
              className="primary-btn py-2 px-3"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default SlotModal;
