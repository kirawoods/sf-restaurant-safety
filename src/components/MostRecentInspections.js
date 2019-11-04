import React, { Component } from "react";
import { Card, Elevation } from "@blueprintjs/core";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";
import "./MostRecentInspections.css";

const sortedRestaurantData = restaurant_data.sort((a, b) =>
  a.inspection_date < b.inspection_date ? 1 : -1
);

const mostRecentRestaurants = [];
for (let i = 0; i < 6; i++) {
  mostRecentRestaurants.push(sortedRestaurantData[i]);
}

class MostRecentInspections extends Component {
  render() {
    return (
      <div className="restaurant-info">
        {mostRecentRestaurants.map(restaurant => (
          <Card
            className="restaurant-card"
            key={restaurant.inspection_id}
            elevation={Elevation.THREE}
          >
            <h1>{restaurant.business_name}</h1>

            <p>
              {restaurant.business_address}, {restaurant.business_city},
              {restaurant.business_state}, {restaurant.business_postal_code}
            </p>

            <p>
              Inspection Date:{" "}
              {moment(restaurant.inspection_date).format("MMM Do[,] YYYY")}
            </p>

            <p>{restaurant.risk_category}</p>
          </Card>
        ))}
      </div>
    );
  }
}

export default MostRecentInspections;
