import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { XCircleFill } from "react-bootstrap-icons";

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
function SlotModal({ modalFunc, selectedDate }) {
  const [modalIsOpen, openModal, closeModal] = modalFunc;
  const service = JSON.parse(sessionStorage.getItem("service"));
  let date = selectedDate;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmitFrom = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      phone,
      date: selectedDate,
      service: service,
    };
    fetch("http://localhost:5000/addBookAppointment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    setName("");
    setEmail("");
    setPhone("");
    date = "";
    closeModal();
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

        <form onSubmit={handleSubmitFrom}>
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
