import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}>
      <input
        className="popup__input popup__input_type_username"
        type="text"
        name="username"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__error" id="username-input-error" />
      <input
        className="popup__input popup__input_type_description"
        type="text"
        name="description"
        placeholder="О Себе"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__error" id="description-input-error" />
      <button className="popup__btn" type="submit" aria-label="Сохранить профиль">Сохранить</button>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
