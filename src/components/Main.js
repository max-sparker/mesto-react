import React from 'react';
import api from '../utils/api';


function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      console.log(data);
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

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

            </section>
        </main>
    );
}

export default Main;
