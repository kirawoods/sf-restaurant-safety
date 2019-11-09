import React, { useState } from "react";
import { Classes } from "@blueprintjs/core";
import "./SearchForm.css";
import { restaurant_data } from "../sf-restaurant-data";

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
      setSearchResults(filteredInspections[0].business_name);
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
      <div className="search-results">{searchResults}</div>
    </div>
  );
}
