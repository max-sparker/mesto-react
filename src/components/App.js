import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isPhotoPopupOpen, setIsPhotoPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [isSaving, setIsSaving] = React.useState(false);

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

  function handleUpdateUser(user) {
    setIsSaving(true);
    api.setUserInfo(user)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsSaving(false));
    closeAllPopups();
  }

  function handleUpdateAvatar(user) {
    setIsSaving(true);
    api.updateUserAvatar(user)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsSaving(false));
    closeAllPopups();
  }

  function handleAddPlace (newCard) {
    setIsSaving(true);
    api.createCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsSaving(false));
    closeAllPopups();
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsPhotoPopupOpen(false);
  }

  React.useEffect(() => {
    function handleCloseByEsc (evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleCloseByEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseByEsc);
    }
  }, []);

  function handleCloseByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups()
    }
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
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleCloseByOverlay}
          onUpdateUser={handleUpdateUser}
          isSaving={isSaving}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          onCloseOverlay={handleCloseByOverlay}
          isSaving={isSaving}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleCloseByOverlay}
          onAddPlace={handleAddPlace}
          isSaving={isSaving}
        />
        <ImagePopup
          card={selectedCard}
          isOpen={isPhotoPopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleCloseByOverlay}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
