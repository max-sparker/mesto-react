import React from 'react';
import api from '../utils/api';


function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      console.log(data);
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });

    api.getInitialCards().then((cardList) => {
      setCards(cardList);
    });
  }, []);

  return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userAvatar} alt={`Аватар пользователя ${userName}`} />
                    <button
                      className="profile__avatar-edit-btn"
                      type="button"
                      aria-label="Редактировать аватар"
                      onClick={onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button
                          className="profile__edit-btn"
                          type="button"
                          aria-label="Редактировать профиль"
                          onClick={onEditProfile}
                        />
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button
                  className="profile__add-btn"
                  type="button"
                  aria-label="Добавить"
                  onClick={onAddPlace}
                />
            </section>
            <section className="places">
                {cards.map((card) => {
                  return (
                    <article className="card" key={card._id}>
                      <img className="card__image" src={card.link} alt={card.name} />
                      <button className="card__remove-btn" type="button" aria-label="Удалить" />
                      <div className="card__title">
                        <h2 className="card__name">{card.name}</h2>
                        <div className="card__like-container">
                          <button className="card__like-btn" type="button" aria-label="Мне нравится" />
                          <p className="card__like-counter">{card.likes.length}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
            </section>
        </main>
    );
}

export default Main;
