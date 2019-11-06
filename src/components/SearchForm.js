import React, { useState } from "react";
import { Button, Classes } from "@blueprintjs/core";
import "./SearchForm.css";
import { restaurant_data } from "../sf-restaurant-data";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(searchTerm);
  const handleChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    const filteredInspections = restaurant_data.filter(x =>
      x.business_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredInspections[0].business_name);
    console.log(filteredInspections);
  };

  return (
    <div className="search-container">
      <form className="search-form">
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
