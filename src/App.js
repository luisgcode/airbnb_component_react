import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Card from "./components/Card";

import "./App.css";

import Data from "./components/Data";

function App() {
  const cards = Data.map(function (item) {
    return (
      <Card
        img={item.img}
        stars={item.stats.rating}
        number={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <div className="Cards">{cards}</div>
    </div>
  );
}

export default App;
