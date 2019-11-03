{
  /* <div className="App">
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
</div>; */
}

export default function CharacterCard(props) {
  return (
    <Card className="character-card" key={props.id}>
      <CardImg src={props.image} alt={props.name}></CardImg>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Species: {props.species}</CardText>
        <CardText>Status: {props.status}</CardText>
      </CardBody>
    </Card>
  );
}
