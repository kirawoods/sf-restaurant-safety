import React from "react";
import "./App.css";
import { restaurant_data } from "./sf-restaurant-data";

function App() {
  return (
    <div className="App">
      {restaurant_data.map(restaurant => (
        <div>
          <h1>{restaurant.business_name}</h1>
          <p>
            {restaurant.business_address}, {restaurant.business_city},{" "}
            {restaurant.business_state}, {restaurant.business_postal_code}
          </p>
          <p>{restaurant.risk_category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
