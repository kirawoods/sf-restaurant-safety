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

function renderRestaurantCard(restaurant) {
  riskIndicator(restaurant);
  return (
    <Card
      className={"restaurant-card" + " " + riskClass}
      key={restaurant.inspection_id}
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
  const [searchResults, setSearchResults] = useState(searchTerm);
  const handleChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    const filteredInspections = restaurant_data.filter(inspection =>
      inspection.business_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredInspections.length === 0) {
      setSearchResults("No Restaurants Found with That Name");
    } else if (filteredInspections.length <= 20) {
      setSearchResults(filteredInspections.map(renderRestaurantCard));
    } else {
      setSearchResults("Please enter a more specific search term...");
    }
    console.log(filteredInspections);
    console.log(searchResults);
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
      <div className="search-results">{searchResults}</div>
    </div>
  );
}
