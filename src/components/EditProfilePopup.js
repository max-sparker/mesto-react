import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ name, description });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_type_username"
        type="text"
        name="username"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        value={name || ''}
        onChange={handleNameChange}
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
        value={description || ''}
        onChange={handleDescriptionChange}
      />
      <span className="popup__error" id="description-input-error" />
      <button className="popup__btn" type="submit" aria-label="Сохранить профиль">Сохранить</button>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
