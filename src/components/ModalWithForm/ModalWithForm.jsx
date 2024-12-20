import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, titleText, activeModal, closeActiveModal }) {
  return (
    <>
      <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`} id="edit-avatar">
        <div className="modal__container">
          <button
            type="button"
            className="modal__close-btn"
            id="close-modal"
            onClick={closeActiveModal}
          ></button>
          <h2 className="modal__title">{titleText}</h2>
          <form
            name="add-garment-form"
            className="modal__form"
            id="avatar-modal-form"
            noValidate
          >
            {children}
            <button
              type="submit"
              className="modal__submit-btn"
              id="add-garment-submit-btn"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWithForm;
