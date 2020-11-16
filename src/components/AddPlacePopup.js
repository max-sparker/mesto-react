import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}>
      <input
        className="popup__input popup__input_type_placename"
        type="text"
        name="placename"
        placeholder="Название"
        required
        maxLength="30"
      />
      <span className="popup__error" id="placename-input-error" />
      <input
        className="popup__input popup__input_type_placelink"
        type="url"
        name="placelink"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error" id="placelink-input-error" />
      <button className="popup__btn" type="submit" aria-label="Добавить место" disabled>Создать</button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
