import "./Card.css";

import experienceOne from "../images/experienceOne.png";

function Card() {
  return (
    <div className="Cards ">
      <div className="card pad-uti">
        <span className="status">SOLD OUT</span>
        <img src={experienceOne} alt="First experience" />
        <div className="stats">
          <span>⭐ 5.0 </span>
          <span>(6)</span>
          <span> USA</span>
        </div>
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
