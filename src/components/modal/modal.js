import React, { useContext } from "react";

import "./modal.css";
import { Modal, Button } from "react-bootstrap";
import { ModalContext } from "../../context/ModalContext";

export default () => {
  const modalContext = useContext(ModalContext);

  return (
    <Modal show={modalContext.isModalOpen} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{modalContext.error}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => modalContext.hideModal()}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
