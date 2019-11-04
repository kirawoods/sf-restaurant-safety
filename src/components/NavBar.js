import React, { Component } from "react";
import { Button, Navbar, Alignment } from "@blueprintjs/core";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>SF Restaurant Inspections</Navbar.Heading>
          <Navbar.Divider />
          <NavLink to="/">
            <Button className="bp3-minimal" icon="home" text="Home" />
          </NavLink>
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default NavBar;
