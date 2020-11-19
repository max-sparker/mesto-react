import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({ isOpen, onClose, onCloseOverlay, onConfirmDelete, isSaving }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onConfirmDelete();
  }

  return (
    <PopupWithForm
      name="confirm-delete"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onCloseByOverlay={onCloseOverlay}
      onSubmit={handleSubmit}
      buttonText="Да"
      buttonLabel="Удаление карточки"
      isSaving={isSaving}>
    </PopupWithForm>
  );

}

export default ConfirmPopup;
