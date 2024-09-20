import "./Herosection.css";
import gallery from "../images/gallery.png";

function Herosection() {
  return (
    <div className="Herosection pad-uti">
      <img src={gallery} alt="Gallery images" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
}

export default Herosection;
