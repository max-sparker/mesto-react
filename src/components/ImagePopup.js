import React from 'react';

function ImagePopup({onClose, isOpen}) {
  return (
    <section className={`popup popup_type_image ${isOpen ? 'popup__opened' : ''}`}>
      <div className="popup__overlay" />
      <div className="popup__container">
        <button className="popup__close-btn" type="button" aria-label="Закрыть окно" onClick={onClose} />
        <figure className="popup__full">
          <img className="popup__image" src="" alt="" />
          <figcaption className="popup__desc"></figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
