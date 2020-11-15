import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card ({card, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__remove-btn ${isOwn ? 'card__remove-btn_visible' : null}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like-btn ${isLiked ? 'card__like-btn_liked' : null}`
  );

  function handleClick() {
    onCardClick(card);
  }

  return(
    <article className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" />
      <div className="card__title">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} type="button" aria-label="Мне нравится" />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );

}

export default Card;
