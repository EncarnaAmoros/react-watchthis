import React, { useState } from "react";

export const ModalContext = React.createContext({
  isModalOpen: false,
  error: "",
  showModal: () => {},
  hideModal: () => {},
  setErrorMessage: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  //show modal never changes because using useCallback
  const showModal = React.useCallback(() => setIsModalOpen(true), []);
  const hideModal = React.useCallback(() => setIsModalOpen(false), []);

  const setErrorMessage = React.useCallback((error) => setError(error), []);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        showModal,
        hideModal,
        error,
        setErrorMessage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
