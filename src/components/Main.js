import React from 'react';
import profileAvatar from "../images/avatar.jpg";

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={profileAvatar} alt="Аватар профиля" />
                    <button className="profile__avatar-edit-btn" type="button" aria-label="Редактировать аватар"/>
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль" />
                    </div>
                    <p className="profile__description">Исследователь океана</p>
                </div>
                <button className="profile__add-btn" type="button" aria-label="Добавить" />
            </section>
            <section className="places">

            </section>
        </main>
    );
}

export default Main;