import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditAvatarPopup ({isOpen, onClose, onCloseOverlay, onUpdateAvatar, isSaving}) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onCloseByOverlay={onCloseOverlay}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      buttonLabel="Обновить аватар"
      isSaving={isSaving}>
      <input
        className="popup__input popup__input_type_avatarlink"
        type="url"
        name="avatar"
        placeholder="Ссылка на изображение"
        required
        ref={avatarRef}
      />
      <span className="popup__error" id="avatar-input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
