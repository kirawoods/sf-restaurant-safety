import React from "react";
import { Button, Navbar, Alignment } from "@blueprintjs/core";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>SF Restaurant Inspections</Navbar.Heading>
          <Navbar.Divider />
          <NavLink
            className="navbar-item nav-buttons"
            activeClassName="activeNavButton"
            to="/"
          >
            <Button className="bp3-minimal" icon="home" text="Home" />
          </NavLink>
        </Navbar.Group>
      </Navbar>
    </div>
  );
}
