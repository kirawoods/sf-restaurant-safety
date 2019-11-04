import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { restaurant_data } from "../sf-restaurant-data";
import * as moment from "moment";

export function RestaurantInfo() {
  const sortedRestaurantData = restaurant_data.sort((a, b) =>
    a.inspection_date < b.inspection_date ? 1 : -1
  );

  return (
    <div className="restaurant-info">
      {sortedRestaurantData.map(restaurant => (
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
      }
    </div>
  );
}

// export default function CharacterCard(props) {
//   return (
//     <Card className="character-card" key={props.id}>
//       <CardImg src={props.image} alt={props.name}></CardImg>
//       <CardBody>
//         <CardTitle>{props.name}</CardTitle>
//         <CardText>Gender: {props.gender}</CardText>
//         <CardText>Species: {props.species}</CardText>
//         <CardText>Status: {props.status}</CardText>
//       </CardBody>
//     </Card>
//   );
// }
