import React, { Component } from "react";
import { H2 } from "@blueprintjs/core";
import "./WelcomePage.css";
import MostRecentInspections from "./MostRecentInspections";
import Search from "./SearchForm";
import Footer from "./Footer";

class WelcomePage extends Component {
  render() {
    return (
      <div className="home-page-container">
        <div className="header-container">
          <img
            className="header-image"
            src="https://cdn.emersonstone.com/images/SF_Skyline_ShipCompliant-no-logo.png"
            alt="San Francisco Skyline Illustration"
          ></img>
          <h1 className="main-header">San Francisco Restaurant Inspections</h1>
        </div>
        <div className="callout-and-search-container">
          <div className="bp3-callout .modifier callout-container">
            <p>
              The Health Department has developed an inspection report and
              scoring system. After conducting an inspection of the facility,
              the Health Inspector calculates a score based on the violations
              observed. Violations can fall into the following categories:
            </p>
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
            <p>
              Below is a searchable list of restaurants in SF that have
              undergone inspections since 2016. Restaurants that have not had
              inspections since 2016 are not included in the data.
            </p>
          </div>
        </div>
        <Search />
        <div className="recent-inspections-container">
          <H2 className="recent-inspections-header">Recent Inspections</H2>
          <MostRecentInspections />
        </div>
        <Footer />
      </div>
    );
  }
}

export default WelcomePage;
