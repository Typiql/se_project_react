import './ItemModal.css'

function ItemModal({ activeModal, card, closeActiveModal }) {
  return (
    <>
      <div className={`modal ${activeModal === "preview" && "modal_opened"}`} id="preview-image-modal">
        <div className="modal__container modal__container_image">
          <button
            type="button"
            className="modal__close-btn"
            id="close-modal"
            onClick={closeActiveModal}
          ></button>
          <div className='modal__image-container'>
          <img src={card.link} alt='' className='modal__image'></img>
          <h2 className="modal__title">{card.name}</h2>
          </div>
          <p className='modal__weather'>Weather: {card.weather}</p>
        </div>
      </div>
    </>
  );
}

export default ItemModal;

