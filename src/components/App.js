import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard]=React.useState({});
    const [isConfirmationPopupOpen, setIsConfirmationPopupOpen]=React.useState(false);


    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePopupOpen(false)
        setIsConfirmationPopupOpen(false)
        setSelectedCard(null)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
        setIsImagePopupOpen(true)
    }
    function handleCardDeleteClick(card){
        setIsConfirmationPopupOpen(true)
    }

    return (
      <div className="page">
        <div className="page__container">
          <Header />

        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardDeleteClick={handleCardDeleteClick}
        />

        <Footer />

        <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            name={'profile'}
            title={'Редактировать профиль'}
            formType={'profile'}
            children={
                <>
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
                </>
            }
            buttonName={'Сохранить'}
        />

        <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name={'add-card'}
            title={'Новое место'}
            formType={'add-card'}
            children={
                <>
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
                </>
            }
            buttonName={'Создать'}
        />

        <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name={'update-avatar'}
            title={'Обновить аватар'}
            formType={'profile'}
            children={
                    <div className="popup__field">
                        <input id="avatar-link-label" className="popup__input popup__input_el_avatar-link" type="url"
                               name="avatar-link" placeholder="Фото аватара" required/>
                        <span id="avatar-link-label-error" className="popup__error"></span>
                    </div>
            }
            buttonName={'Сохранить'}

        />

        <PopupWithForm
            isOpen={isConfirmationPopupOpen}
            onClose={closeAllPopups}
            name={'popup_confirmation'}
            title={'Вы уверены?'}
            formType={'confirmation'}
            buttonName={'Да'}
        />

        { selectedCard
            ? <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
            : ''
        }

        </div>
      </div>
  );
}

export default App;
