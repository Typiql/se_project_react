import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <h2 className="itemCard__title">{item.name}</h2>
      <img className="itemCard__img" src={item.link} alt={item.name}></img>
    </div>
  );
}

export default ItemCard;
