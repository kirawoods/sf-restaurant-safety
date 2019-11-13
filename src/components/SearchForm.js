import React, { useState } from "react";
import { Classes, Card } from "@blueprintjs/core";
import "./SearchForm.css";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";
import "./InspectionCards.css";
import { riskIndicator, uniqueKeyForInspection } from "./MostRecentInspections";

let displaySearchResults = "";
let displayQuantityClass = "";
function filterNoResults(results) {
  if (results.length === 0) {
    displaySearchResults = (
      <p className="no-results">There were no restaurants with that name</p>
    );
  } else if (results.length <= 2) {
    displayQuantityClass = "two-or-fewer-card";
    displaySearchResults = (
      <div className="search-results two-or-fewer">
        {results.map(renderRestaurantInspeciton)}
      </div>
    );
  } else {
    displayQuantityClass = "";
    displaySearchResults = (
      <div className="search-results">
        {results.map(renderRestaurantInspeciton)}
      </div>
    );
  }
}
function resetSearchResults(results) {
  if (results.length >= 100) {
    displaySearchResults = "";
  }
}

function renderRestaurantInspeciton(inspection) {
  return (
    <Card
      className={
        "search-result-card " +
        riskIndicator(inspection) +
        " " +
        displayQuantityClass
      }
      key={uniqueKeyForInspection(inspection)}
    >
      <h1>{inspection.business_name}</h1>
      <p>
        {inspection.business_address}, {inspection.business_city},{" "}
        {inspection.business_state}, {inspection.business_postal_code}
      </p>
      <p>
        Inspection Date:{" "}
        {moment(inspection.inspection_date).format("MMM Do[,] YYYY")}
      </p>
      <p>{inspection.risk_category}</p>
    </Card>
  );
}

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.currentTarget.value);
  };
  const searchResults = restaurant_data.filter(inspection =>
    inspection.business_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filterNoResults(searchResults);
  resetSearchResults(searchResults);

  return (
    <div className="search-container">
      <div className="search-form">
        <input
          className={Classes.INPUT + " search-input"}
          name="search"
          type="text"
          placeholder="Search by Restaurant Name…"
          onChange={handleChange}
        />
      </div>
      {displaySearchResults}
    </div>
  );
}
