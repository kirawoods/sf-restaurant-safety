import React, { useState } from "react";
import { Button, Classes } from "@blueprintjs/core";
import "./SearchForm.css";
import { restaurant_data } from "../sf-restaurant-data";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(restaurant_data);
  const handleChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const filteredInspections = searchResults.filter(x =>
      x.business_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredInspections);
    console.log(filteredInspections);
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
        <Button className="search-button" type="submit">
          Search
        </Button>
      </form>
      <div className="search-results"></div>
    </div>
  );
}
