import React from "react";
import { Card } from "@blueprintjs/core";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";

export function MostRecentInspections() {
  const sortedRestaurantData = restaurant_data.sort((a, b) =>
    a.inspection_date < b.inspection_date ? 1 : -1
  );

  const mostRecentRestaurants = [];
  for (let i = 0; i < 6; i++) {
    mostRecentRestaurants.push(sortedRestaurantData[i]);
  }
  console.log(mostRecentRestaurants);

  return (
    <div className="restaurant-info">
      {mostRecentRestaurants.map(restaurant => (
        <Card className="restaurant-card" key={restaurant.inspection_id}>
          <h1>{restaurant.business_name}</h1>

          <p>
            {restaurant.business_address}, {restaurant.business_city},
            {restaurant.business_state}, {restaurant.business_postal_code}
          </p>
          <h4>
            Inspection Date:{" "}
            {moment(restaurant.inspection_date).format("MMM Do[,] YYYY")}
          </h4>
          <p>{restaurant.risk_category}</p>
        </Card>
      ))}
    </div>
  );
}
