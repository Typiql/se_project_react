import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/constants";

function Main() {
  return (
    <div className="main">
      <h2 className="main__title">Today is 75° / You may want to wear:</h2>
      <div className="itemCard-container">
        {defaultClothingItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
