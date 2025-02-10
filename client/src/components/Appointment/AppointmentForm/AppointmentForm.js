import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

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
function SlotModal({ modalFunc }) {
  const [modalIsOpen, openModal, closeModal] = modalFunc;

  const service = JSON.parse(sessionStorage.getItem("service"));

  console.log(service);

  return (
    <div className="text-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center">{service && service.title}</h2>
        <button onClick={closeModal}>close</button>

        <form>
          <input type="text" placeholder="date" className="my-3 form-control" />

          <input
            type="text"
            placeholder="Time"
            n
            value={service && service.time}
            className="my-3 form-control"
          />
          <input
            type="number"
            placeholder="Phone no"
            className="form-control"
          />

          <input type="text" placeholder="Name" className="my-3 form-control" />
          <input
            type="number"
            placeholder="Phone no"
            className="form-control"
          />
          <input
            type="email"
            placeholder="Email adress"
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
