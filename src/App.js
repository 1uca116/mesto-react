import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <header className="header">
          <img src="<%=require('./images/header__logo.svg')%>" alt="Место в России." className="header__logo"/>
        </header>

        <main className="content">
          <section className="profile">
            <div className="profile__about">
              <img src="<%=require('./images/kusto.jpg')%>" alt="Жак-Ив Кусто" className="profile__photo"/>
              <div className="profile__overlay"></div>
              <div className="profile__info">
                <div className="profile__description">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button type="button" className="profile__edit link"></button>
                </div>
                <p className="profile__job">Исследователь океана</p>
              </div>
            </div>
            <button type="button" className="profile__add-card link"></button>
          </section>
          <ul className="places">

          </ul>
        </main>

        <footer className="footer">
          <p className="footer__text">&COPY; 2020 Mesto Russia</p>
        </footer>

        <div className="popup popup_profile">
          <div className="popup__container">
            <button className="popup__button-close link" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__form_profile" noValidate>
              <div className="popup__field">
                <input id="name-label" className="popup__input popup__input_el_name" type="text" name="profile-name"
                       placeholder="Имя" minLength="2" maxLength="40" required/>
                <span id="name-label-error" className="popup__error"></span>
              </div>
              <div className="popup__field">
                <input id="job-label" className="popup__input popup__input_el_job" type="text" name="profile-job"
                       placeholder="О себе" minLength="2" maxLength="200" required/>
                <span id="job-label-error" className="popup__error"></span>
              </div>
              <button className="popup__button-save link" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_add-card">
          <div className="popup__container popup__container_card">
            <button className="popup__button-close link" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form popup__form_add-card">
              <div className="popup__field">
                <input id="card-name-label" className="popup__input popup__input_el_card-name" type="text" name="card-name"
                       placeholder="Название" minLength="2" maxLength="30" required/>
                <span id="card-name-label-error" className="popup__error"></span>
              </div>
              <div className="popup__field">
                <input id="card-link-label" className="popup__input popup__input_el_card-link" type="url" name="card-link"
                       placeholder="Ссылка на картинку" required/>
                <span id="card-link-label-error" className="popup__error"></span>
              </div>
              <button className="popup__button-save link" type="submit">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup popup_open-picture">
          <div className="popup__container popup__container_picture">
            <button type="button" className="popup__button-close link"></button>
            <img className="popup__picture" src="#" alt="Картинка"/>
            <h3 className="popup__description"></h3>
          </div>
        </div>

        <div className="popup popup_update-avatar">
          <div className="popup__container popup__container_avatar">
            <button className="popup__button-close link" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form popup__form_profile" noValidate>
              <div className="popup__field">
                <input id="avatar-link-label" className="popup__input popup__input_el_avatar-link" type="url"
                       name="avatar-link" placeholder="Фото аватара" required/>
                <span id="avatar-link-label-error" className="popup__error"></span>
              </div>
              <button className="popup__button-save link" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_confirmation">
          <div className="popup__container popup__container_confirmation">
            <button className="popup__button-close link" type="button"></button>
            <h2 className="popup__title popup__title_confirmation">Вы уверены?</h2>
            <form className="popup__form popup__form_confirmation" noValidate>
              <button className="popup__button-save link" type="submit" name="delete-card">Да</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
