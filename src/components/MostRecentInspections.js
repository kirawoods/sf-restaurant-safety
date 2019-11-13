import React, { Component } from "react";
import { Card } from "@blueprintjs/core";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";
import "./InspectionCards.css";

const sortedRestaurantData = restaurant_data.sort((a, b) =>
  a.inspection_date < b.inspection_date ? 1 : -1
);

const mostRecentRestaurants = sortedRestaurantData.slice(0, 33);

export function riskIndicator(restaurantInspection) {
  if (restaurantInspection.risk_category === undefined) {
    return "low-risk";
  } else if (
    restaurantInspection.risk_category.toLowerCase() === "moderate risk"
  ) {
    return "moderate-risk";
  } else if (restaurantInspection.risk_category.toLowerCase() === "high risk") {
    return "high-risk";
  } else {
    return "low-risk";
  }
}

export function keyMaker(restaurantInspection) {
  if (restaurantInspection.violation_id === undefined) {
    return restaurantInspection.inspection_id;
  } else {
    return restaurantInspection.violation_id;
  }
}

class MostRecentInspections extends Component {
  renderRestaurant(restaurant) {
    return (
      <Card
        className={"restaurant-card " + riskIndicator(restaurant)}
        key={keyMaker(restaurant)}
      >
        <h1>{restaurant.business_name}</h1>

        <p>
          {restaurant.business_address}, {restaurant.business_city},{" "}
          {restaurant.business_state}, {restaurant.business_postal_code}
        </p>

        <p>
          Inspection Date:{" "}
          {moment(restaurant.inspection_date).format("MMM Do[,] YYYY")}
        </p>

        <p>{restaurant.risk_category}</p>
      </Card>
    );
  }
  render() {
    return (
      <div className="restaurant-info">
        {mostRecentRestaurants.map(this.renderRestaurant)}
      </div>
    );
  }
}

export default MostRecentInspections;
