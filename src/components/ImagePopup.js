import React from 'react';

function ImagePopup({card, isOpen, onClose, onCloseOverlay}) {
  return (
    <section className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={onCloseOverlay} />
      <div className="popup__wrap">
        <button className="popup__close-btn" type="button" aria-label="Закрыть окно" onClick={onClose} />
        <figure className="popup__full">
          <img className="popup__image" src={card.link} alt={`Фото: ${card.name}`} />
          <figcaption className="popup__desc">{card.name}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default ImagePopup;
