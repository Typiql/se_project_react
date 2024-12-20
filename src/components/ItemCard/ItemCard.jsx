import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {

  const handleCardClick = () => {onCardClick(item)}

  return (
    <div className="itemCard">
      <h2 className="itemCard__title">{item.name}</h2>
      <img className="itemCard__img" src={item.link} alt={item.name} onClick={handleCardClick}></img>
    </div>
  );
}

export default ItemCard;
