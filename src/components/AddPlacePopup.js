import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      placename: nameRef.current.value,
      placelink: linkRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_type_placename"
        type="text"
        name="placename"
        placeholder="Название"
        required
        maxLength="30"
        ref={nameRef}
      />
      <span className="popup__error" id="placename-input-error" />
      <input
        className="popup__input popup__input_type_placelink"
        type="url"
        name="placelink"
        placeholder="Ссылка на картинку"
        required
        ref={linkRef}
      />
      <span className="popup__error" id="placelink-input-error" />
      <button className="popup__btn" type="submit" aria-label="Добавить место" disabled>Создать</button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
