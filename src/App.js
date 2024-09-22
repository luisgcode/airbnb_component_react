import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Card from "./components/Card";

import "./App.css";

import experienceOne from "./images/experienceOne.png";
import experienceTwo from "./images/experienceTwo.png";
import experienceThree from "./images/experienceThree.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <div className="Cards">
        <Card
          img={experienceOne}
          status="SOLD OUT"
          stars="⭐ 3.9"
          number="(4) /"
          country="USA"
          title="Life lessons with Katie Zaferes"
          price="From $80 / Person"
        />
        <Card
          img={experienceTwo}
          status="RECENTLY"
          stars="⭐ 5.0"
          number="(2) /"
          country="SPAIN"
          title="New world"
          price="From $123 / Person"
        />
        <Card
          img={experienceThree}
          status="SOLD OUT"
          stars="⭐ 4.6"
          number="(7) /"
          country="JAPAN"
          title="My last chance"
          price="From $56 / Person"
        />
      </div>
    </div>
  );
}

export default App;
