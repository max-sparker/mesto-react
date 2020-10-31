import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
      <div className="page">
        <Header />
        <Main/>
        <Footer />
        <section className="popup popup-profile">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" name="edit-profile">
              <input className="popup__input popup__input_type_username" type="text" name="username" placeholder="Имя"
                     required minLength="2" maxLength="40" />
                <span className="popup__error" id="username-input-error"></span>
                <input className="popup__input popup__input_type_description" type="text" name="description"
                       placeholder="О Себе" required minLength="2" maxLength="200" />
                  <span className="popup__error" id="description-input-error"></span>
                  <button className="popup__btn" type="submit" aria-label="Сохранить профиль">Сохранить</button>
            </form>
          </div>
        </section>
        <section className="popup popup-update-avatar">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <h3 className="popup__title">Обновить аватар</h3>
            <form className="popup__form" name="edit-avatar">
              <input className="popup__input popup__input_type_avatarlink" type="url" name="avatar"
                     placeholder="Ссылка на изображение" required />
                <span className="popup__error" id="avatar-input-error"></span>
                <button className="popup__btn" type="submit" aria-label="Обновить аватар">Обновить</button>
            </form>
          </div>
        </section>
        <section className="popup popup-card">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form" name="add-card">
              <input className="popup__input popup__input_type_placename" type="text" name="placename"
                     placeholder="Название" required maxLength="30" />
                <span className="popup__error" id="placename-input-error"></span>
                <input className="popup__input popup__input_type_placelink" type="url" name="placelink"
                       placeholder="Ссылка на картинку" required />
                  <span className="popup__error" id="placelink-input-error"></span>
                  <button className="popup__btn" type="submit" aria-label="Добавить место" disabled>Создать</button>
            </form>
          </div>
        </section>
        <section className="popup popup-image">
          <div className="popup__overlay"></div>
          <div className="popup-image__container">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <figure className="popup-image__full">
              <img className="popup-image__image" src="#" alt="" />
                <figcaption className="popup-image__desc"></figcaption>
            </figure>
          </div>
        </section>
        <section className="popup popup-confirm">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <h3 className="popup__title popup-confirm__title">Вы уверены?</h3>
            <form className="popup__form" name="delete-card">
              <button className="popup__btn" type="submit" aria-label="Удаление карточки">Да</button>
            </form>
          </div>
        </section>
      </div>
  );
}

export default App;
