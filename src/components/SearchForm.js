import React, { useState } from "react";
import { Classes, Card } from "@blueprintjs/core";
import "./SearchForm.css";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";
import "./InspectionCards.css";
import { riskIndicator } from "./MostRecentInspections";

let riskClass = "low-risk";

{
  /* 
  <Card className={"restaurant-card" + " " + riskClass}>
    <h2>{filteredInspections[0].business_name}</h2>
    <p>
      {filteredInspections[0].business_address},{" "}
      {filteredInspections[0].business_city},{" "}
      {filteredInspections[0].business_state},{" "}
      {filteredInspections[0].business_postal_code}
    </p>
    <p>
      Inspection Date:{" "}
      {moment(filteredInspections[0].inspection_date).format("MMM Do[,] YYYY")}
    </p>

    <p>{filteredInspections[0].risk_category}</p>
  </Card>
; */
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
    } else {
      riskIndicator(filteredInspections[0]);
      setSearchResults(filteredInspections);
    }
    console.log(filteredInspections);
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
      <div className="restaurant-info">{JSON.stringify(searchResults)}</div>
    </div>
  );
}
