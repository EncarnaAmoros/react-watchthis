import React from "react";

import { Navbar } from "react-bootstrap";

export default () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require("../../assets/logo1.png")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          WHATCH THIS!
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};
