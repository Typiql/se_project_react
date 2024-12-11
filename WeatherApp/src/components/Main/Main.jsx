import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/constants";

function Main({ weatherData }) {
  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === weatherData.type
  );

  return (
    <div className="main">
      <h2 className="main__title">
        Today is {Math.round(weatherData.temp)}°F / You
        may want to wear:
      </h2>
      <div className="itemCard-container">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
