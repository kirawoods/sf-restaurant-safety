import React, { Component } from "react";
import { Button, Classes } from "@blueprintjs/core";
import "./SearchForm.css";

class Search extends Component {
  render() {
    return (
      <form className="search-form">
        <input
          className={Classes.INPUT + " search-input"}
          name="search"
          type="text"
          placeholder="Search by Restaurant Name..."
        />
        <Button className="search-button" type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default Search;
