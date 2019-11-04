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
  H2,
  H4
} from "@blueprintjs/core";

import { RestaurantInfo } from "./RestaurantCard";

export function Header() {
  return (
    <div>
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
      <div className="header-container">
        <H1 className="main-header">San Francisco Restaurant Inspections</H1>
        <div className="bp3-callout .modifier">
          <H4>About</H4>
          It's dangerous to go alone! Take this.
        </div>

        <form className="search-form">
          <input
            className={Classes.INPUT}
            id="search-input"
            name="search"
            type="text"
            placeholder="Search by Restaurant Name..."
          />
          <Button type="submit">Search</Button>
        </form>
        <div className="recent-inspections-container">
          <H2>Recent Inspections:</H2>
          <RestaurantInfo />
        </div>
      </div>
    </div>
  );
}
