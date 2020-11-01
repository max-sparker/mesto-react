import React from 'react';

function ImagePopup({card, onClose, isOpen}) {
  return (
    <section className={`popup popup_type_image ${isOpen ? 'popup__opened' : ''}`}>
      <div className="popup__overlay" />
      <div className="popup__container">
        <button className="popup__close-btn" type="button" aria-label="Закрыть окно" onClick={onClose} />
        <figure className="popup__full">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__desc">{card.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
