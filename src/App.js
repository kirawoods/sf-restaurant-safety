import React from "react";
import "./App.css";
import { restaurant_data } from "./sf-restaurant-data";

function App() {
  return (
    <div className="App">
      <p>{JSON.stringify(restaurant_data)}</p>
    </div>
  );
}

export default App;
