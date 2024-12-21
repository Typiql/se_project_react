import "./ItemModal.css";

function ItemModal({ isOpen, card, closeActiveModal }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_image">
        <button
          type="button"
          className="modal__close-btn modal__close-btn_image"
          id="close-modal"
          onClick={closeActiveModal}
        ></button>
        <div className="modal__image-container">
          <img src={card.link} alt={card.name} className="modal__image"></img>
          <h2 className="modal__title modal__title_image">{card.name}</h2>
        </div>
        <p className="modal__weather">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
