import "./Card.css";

function Card(props) {
  return (
    <div className="Cards ">
      <div className="card ">
        <span className="status">{props.status}</span>
        <img src={props.img} alt="Experiences" />
        <div className="stats">
          <span className="rating">{props.stars} </span>
          <span className="number">{props.number}</span>
          <span className="country"> {props.country}</span>
        </div>
        <span className="title">{props.title}</span>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
}

export default Card;
