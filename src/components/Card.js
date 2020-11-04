import React from "react";

function Card ({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return(
    <article className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
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

}

export default Card;
