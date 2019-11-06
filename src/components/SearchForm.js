import React, { useState } from "react";
import { Button, Classes } from "@blueprintjs/core";
import "./SearchForm.css";

export default function Search(props) {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={props.handleSubmit}>
        <input
          className={Classes.INPUT + " search-input"}
          name="search"
          type="text"
          placeholder="Search by Restaurant Name..."
          onChange={props.handleChange}
        />
        <Button className="search-button" type="submit">
          Search
        </Button>
      </form>
      <div className="search-results"></div>
    </div>
  );
}
