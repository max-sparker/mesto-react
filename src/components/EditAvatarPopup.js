import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditAvatarPopup ({isOpen, onClose, onCloseOverlay, onUpdateAvatar}) {
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
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_type_avatarlink"
        type="url"
        name="avatar"
        placeholder="Ссылка на изображение"
        required
        ref={avatarRef}
      />
      <span className="popup__error" id="avatar-input-error" />
      <button className="popup__btn" type="submit" aria-label="Обновить аватар">Обновить</button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
