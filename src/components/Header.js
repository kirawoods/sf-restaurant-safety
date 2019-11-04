import React from "react";
import {
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Alignment
} from "@blueprintjs/core";

export function Header() {
  return (
    <div>
      <header>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>SF Restaurant Inspections</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button
              className="bp3-minimal"
              icon="document"
              text="See All Inspections"
            />
          </Navbar.Group>
        </Navbar>
        <h1>San Francisco Restaurant Inspections</h1>
        <p>
          description... description... description... description...
          description... description... description... description...
          description...
        </p>
      </header>
      <form>
        <label htmlFor="search" className="search-label">
          Search by Restaurant Name:
        </label>
        <input name="search" type="text" />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}
