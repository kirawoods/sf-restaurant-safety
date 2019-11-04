import React from "react";
import {
  Button,
  Navbar,
  Alignment,
  H1,
  H2,
  H4,
  Classes
} from "@blueprintjs/core";

import { MostRecentInspections } from "./MostRecentInspections";

export function WelcomePage() {
  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>SF Restaurant Inspections</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
        </Navbar.Group>
      </Navbar>
      <div className="header-container">
        <H1 className="main-header">San Francisco Restaurant Inspections</H1>
        <div className="bp3-callout .modifier">
          <H4>About</H4>
          <p>
            The Health Department has developed an inspection report and scoring
            system. After conducting an inspection of the facility, the Health
            Inspector calculates a score based on the violations observed.
            Violations can fall into the following categories:
            <ul>
              <li>
                High Risk: records specific violations that directly relate to
                the transmission of food borne illnesses, the adulteration of
                food products and the contamination of food-contact surfaces.
              </li>
              <li>
                Moderate Risk: records specific violations that are of a
                moderate risk to the public health and safety.
              </li>
              <li>
                Low Risk: records violations that are low risk or have no
                immediate risk to the public health and safety.The score card
                that will be issued by the inspector is maintained at the food
                establishment and is available to the public in this dataset.
              </li>
            </ul>
            Below is a searchable list of restaurants in SF that have undergone
            inspections since 2016. Restaurants that have not had inspections
            since 2016 are not included in the data.
          </p>
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
          <MostRecentInspections />
        </div>
      </div>
    </div>
  );
}
