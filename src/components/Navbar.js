import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav className="nav pad-uti">
      <img src={logo} alt="logo " />
    </nav>
  );
}

export default Navbar;
