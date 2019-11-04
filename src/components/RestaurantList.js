import React from "react";
import * as moment from "moment";

export function RestaurantList() {
  const sortedRestaurantData = restaurant_data.sort((a, b) =>
    a.inspection_date < b.inspection_date ? 1 : -1
  );

  return (
    <div className="restaurant-list">
      {sortedRestaurantData.map(restaurant => (
        <Card className="restaurant-card" key={restaurant.inspection_id}>
          <h1>{restaurant.business_name}</h1>
          <h4>Inspection Date: {restaurant.inspection_date}</h4>
          <p>
            {restaurant.business_address}, {restaurant.business_city},
            {restaurant.business_state}, {restaurant.business_postal_code}
          </p>
          <p>{restaurant.risk_category}</p>
        </Card>
      ))}
      }
    </div>
  );
}
