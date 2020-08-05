import React from "react";
import { Navbar } from "react-bootstrap";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

import "./header.css";

export default () => {
  return (
    <div>
      <Navbar bg="" variant="">
        <Navbar.Brand href="#home">
          <GroupWorkIcon className="icon-brand d-inline-block align-top" />{" "}
          WHATCH THIS!
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};
