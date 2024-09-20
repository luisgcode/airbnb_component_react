import "./Card.css";

import experienceOne from "../images/experienceOne.png";

function Card() {
  return (
    <div className="Cards ">
      <div className="card pad-uti">
        <span className="status">SOLD OUT</span>
        <img src={experienceOne} alt="First experience" />
        <span className="stars">⭐ 5.0 (6) - USA</span>
        <span className="title">Life lessons with Katie Zaferes</span>
        <span className="price">
          {" "}
          <b> From $136 </b> / person
        </span>
      </div>
    </div>
  );
}

export default Card;
