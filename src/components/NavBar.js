import React from "react";
import { Button, Navbar, Alignment } from "@blueprintjs/core";

export function NavBar() {
  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>SF Restaurant Inspections</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
        </Navbar.Group>
      </Navbar>
    </div>
  );
}
