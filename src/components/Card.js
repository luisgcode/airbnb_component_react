import "./Card.css";

function Card(props) {
  return (
    <div className="Cards ">
      <div className="card ">
        <img src={props.img} alt="Experiences" />
        <div className="stats">
          <span className="rating">⭐{props.stars} </span>
          <span className="number">/ ({props.number}) </span>
          <span className="country">{props.location}</span>
        </div>
        <span className="title">{props.title}</span>
        <span className="price">${props.price} / person</span>
      </div>
    </div>
  );
}

export default Card;
