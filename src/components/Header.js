import React from "react";
import {
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Alignment,
  H1,
  Label,
  Classes,
  H2
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
        <H1>San Francisco Restaurant Inspections</H1>
        <div class="bp3-callout .modifier">
          <h4 class="bp3-heading">About</h4>
          It's dangerous to go alone! Take this.
        </div>
      </header>
      <form>
        <Label htmlFor="search" className="search-label">
          Search by Restaurant Name:
        </Label>
        <input className={Classes.INPUT} name="search" type="text" />
        <Button type="submit">Search</Button>
      </form>
      <H2>Recent Inspections:</H2>
    </div>
  );
}
