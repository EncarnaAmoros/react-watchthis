import React, { useState } from "react";

import "./App.css";
import { Search } from "../components/search";
import Header from "../components/header/header";
import ModalContext from "../context/ModalContext";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    console.log("modaaaal a true");
    setModalIsOpen(true);
  };

  const hideModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <Header />

      <ModalContext.Provider
        value={{
          modalIsOpen: modalIsOpen,
          showModal: showModal,
          hideModal: hideModal,
        }}
      >
        <Search />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
