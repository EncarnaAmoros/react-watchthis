import React from "react";

const modalContext = React.createContext({
  modalIsOpen: false,
  showModal: () => {},
  hideModal: () => {},
});

export default modalContext;
