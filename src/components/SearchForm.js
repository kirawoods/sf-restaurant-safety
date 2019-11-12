import React, { useState } from "react";
import { Classes, Card } from "@blueprintjs/core";
import "./SearchForm.css";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";
import "./InspectionCards.css";
import { riskIndicator, keyMaker } from "./MostRecentInspections";

let displayQuantityClass = "";
function displaySearchResults(results) {
  if (results.length === 0) {
    return (
      <p className="no-results">There were no restaurants with that name</p>
    );
  } else if (results.length >= 100) {
    return "";
  } else if (results.length <= 2) {
    displayQuantityClass = "two-or-fewer-card";
    return (
      <div className="search-results two-or-fewer">
        {results.map(renderRestaurantCard)}
      </div>
    );
  } else {
    displayQuantityClass = "";
    return (
      <div className="search-results">{results.map(renderRestaurantCard)}</div>
    );
  }
}

function renderRestaurantCard(restaurant) {
  return (
    <Card
      className={
        "search-result-card " +
        riskIndicator(restaurant) +
        " " +
        displayQuantityClass
      }
      key={keyMaker(restaurant)}
    >
      <h1>{restaurant.business_name}</h1>
      <p>
        {restaurant.business_address}, {restaurant.business_city},{" "}
        {restaurant.business_state}, {restaurant.business_postal_code}
      </p>
      <p>
        Inspection Date:{" "}
        {moment(restaurant.inspection_date).format("MMM Do[,] YYYY")}
      </p>
      <p>{restaurant.risk_category}</p>
    </Card>
  );
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.currentTarget.value);
  };
  const searchResults = restaurant_data.filter(inspection =>
    inspection.business_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(searchResults);
  console.log(displaySearchResults);

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
      {displaySearchResults(searchResults)}
    </div>
  );
}
