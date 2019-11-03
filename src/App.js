import React from "react";
import "./App.css";
import { restaurant_data } from "./sf-restaurant-data";
import { Button, Card, Elevation } from "@blueprintjs/core";

function App() {
  return (
    <div>
      <header>
        <h1>San Francisco Restaurant Inspections</h1>
        <p>
          description... description... description... description...
          description... description... description... description...
          description...
        </p>
      </header>
      <form>
        <label htmlFor="search" className="search-label">
          Search by Restaurant Name:
        </label>
        <input name="search" type="text" />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}

export default App;
