import React, { useContext } from "react";

import "./modal.css";
import { Modal, Button } from "react-bootstrap";
import ModalContext from "../../context/ModalContext";

export default ({ title, message }) => {
  const modalContext = useContext(ModalContext);

  console.log("Vemos modal: " + modalContext.modalIsOpen);
  return (
    <Modal show={modalContext.modalIsOpen} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => modalContext.hideModal()}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
