import React from 'react';

function PopupWithForm({name, title, children, isOpen, onClose, handleSubmit}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" />
      <div className="popup__container">
        <button className="popup__close-btn" type="button" aria-label="Закрыть окно" onClick={onClose}/>
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" name={name} onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;

