import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, titleText }) {
  return (
    <>
      <div className="modal modal_opened" id="edit-avatar">
        <div className="modal__container">
          <button
            type="button"
            className="modal__close-btn"
            id="edit-avatar-close-btn"
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
