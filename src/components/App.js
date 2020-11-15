import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isPhotoPopupOpen, setIsPhotoPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => {
        console.error(err)
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsPhotoPopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsPhotoPopupOpen(false);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
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
        <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
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
        <PopupWithForm
          name="add-place"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
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
        <ImagePopup
          card={selectedCard}
          isOpen={isPhotoPopupOpen}
          onClose={closeAllPopups}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
