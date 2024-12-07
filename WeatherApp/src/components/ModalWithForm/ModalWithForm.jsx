import './ModalWithForm.css'

function ModalWithForm() {
  return (
    <>
 <div className="modal" id="edit-avatar">
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-btn"
          id="edit-avatar-close-btn"
        ></button>
        <h2 className="modal__title">Edit profile avatar</h2>
        <form
          name="edit-avatar-form"
          className="modal__form"
          id="avatar-modal-form"
          noValidate
        >
          <label className="modal__label">
            Profile Picture
            <input
              id="avatar-input"
              type="url"
              className="modal__input"
              placeholder="Paste a link to the picture"
              required
            />
            <span id="avatar-input-error" className="modal__error_visible"></span>
          </label>
          <button
            type="submit"
            className="modal__submit-btn"
            id="edit-avatar-submit-btn"
          >
            Save
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ModalWithForm;