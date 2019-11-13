import React, { Component } from "react";
import { Card } from "@blueprintjs/core";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";
import "./InspectionCards.css";

const sortedRestaurantData = restaurant_data.sort((a, b) =>
  a.inspection_date < b.inspection_date ? 1 : -1
);

const recentInspections = sortedRestaurantData.slice(0, 33);

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

export function uniqueKeyForInspection(restaurantInspection) {
  if (restaurantInspection.violation_id === undefined) {
    return restaurantInspection.inspection_id;
  } else {
    return restaurantInspection.violation_id;
  }
}

class MostRecentInspections extends Component {
  renderRestaurantInspection(inspection) {
    return (
      <Card
        className={"restaurant-card " + riskIndicator(inspection)}
        key={uniqueKeyForInspection(inspection)}
      >
        <h1>{inspection.business_name}</h1>

        <p>
          {inspection.business_address}, {inspection.business_city},{" "}
          {inspection.business_state}, {inspection.business_postal_code}
        </p>

        <p>
          Inspection Date:{" "}
          {moment(inspection.inspection_date).format("MMM Do[,] YYYY")}
        </p>

        <p>{inspection.risk_category}</p>
      </Card>
    );
  }
  render() {
    return (
      <div className="restaurant-info">
        {recentInspections.map(this.renderRestaurantInspection)}
      </div>
    );
  }
}

export default MostRecentInspections;
