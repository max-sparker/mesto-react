import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup ({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}>
      <input
        className="popup__input popup__input_type_avatarlink"
        type="url"
        name="avatar"
        placeholder="Ссылка на изображение"
        required
      />
      <span className="popup__error" id="avatar-input-error" />
      <button className="popup__btn" type="submit" aria-label="Обновить аватар">Обновить</button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
