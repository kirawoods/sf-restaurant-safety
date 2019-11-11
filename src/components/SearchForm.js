import React, { useState } from "react";
import { Classes, Card } from "@blueprintjs/core";
import "./SearchForm.css";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";
import "./InspectionCards.css";

let riskClass = "low-risk";
function riskIndicator(restData) {
  if (restData.risk_category === undefined) {
    riskClass = "low-risk";
  } else if (restData.risk_category.toLowerCase() === "moderate risk") {
    riskClass = "moderate-risk";
  } else if (restData.risk_category.toLowerCase() === "high risk") {
    riskClass = "high-risk";
  } else {
    riskClass = "low-risk";
  }
}
let inspectionKey = "";
function keyMaker(restData) {
  if (restData.violation_id === undefined) {
    inspectionKey = restData.inspection_id;
  } else {
    inspectionKey = restData.violation_id;
  }
}

function renderRestaurantCard(restaurant) {
  riskIndicator(restaurant);
  keyMaker(restaurant);
  return (
    <Card
      className={"search-result-card" + " " + riskClass}
      key={inspectionKey}
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
let displaySearchResults = "";
function filterNoResults(results) {
  if (results.length === 0) {
    displaySearchResults = (
      <p className="error">There were no restaurants with that name</p>
    );
  } else {
    displaySearchResults = results.map(renderRestaurantCard);
  }
}
function resetSearchResults(term) {
  if (term.length === 0) {
    displaySearchResults = "";
  }
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  let searchResults = [];
  const handleChange = event => {
    event.preventDefault();
    console.log(event.currentTarget.value);
    setSearchTerm(event.currentTarget.value);
    searchResults = restaurant_data.filter(inspection =>
      inspection.business_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filterNoResults(searchResults);
    resetSearchResults(event.currentTarget.value);
    console.log(event.currentTarget.value);
    console.log(searchResults);
    console.log(displaySearchResults);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className={Classes.INPUT + " search-input"}
          name="search"
          type="text"
          placeholder="Search by Restaurant Name..."
          onChange={handleChange}
        />
      </form>
      <div className="search-results">{displaySearchResults}</div>
    </div>
  );
}
