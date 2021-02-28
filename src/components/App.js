import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import Api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import ConfirmationPopup from "./ConfirmationPopup";


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard]=React.useState({});
    const [isConfirmationPopupOpen, setIsConfirmationPopupOpen]=React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({
        name: '',
        about: '',
        avatar: ''
    });
    const [cards, setCards]=React.useState([]);

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

    function handleUpdateUser(name, about) {
        Api.editUserInfo(name, about)
            .then(data => {
                setCurrentUser( {...data});
                closeAllPopups();
            })
            .catch(e => console.log(e));
    }

    function handleUpdateAvatar(avatar) {
        Api.updateAvatar(avatar)
            .then(data => {
                setCurrentUser({...data});
                closeAllPopups();
            })
            .catch (e => console.log(e));
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (isLiked) {
            Api.dislikeCard(card._id)
                .then((newCard) => {
                    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                    setCards(newCards)
                .catch(err => console.log(err));
            });
        } else {
            Api.likeCard(card._id)
                .then((newCard) => {
                    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                    setCards(newCards)
                }).catch(err => console.log(err));

        }
    }

    function handleCardDelete(card) {
        Api.deleteCard(card._id)
            .then( _ => {
                const newCards = cards.filter(c => c._id !== card._id);
                setCards(newCards)
            }).catch(err => console.log(err));
    }

    function handleAddPlace(name, link) {
        Api.addCard(name, link)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            }).catch(err => console.log(err));
    }

    React.useEffect(() => {
        Api.getInitialCards().then(c => {
            setCards(c)
        }).catch(e => console.log(e));

    }, [])


    React.useEffect(() => {
        Api.getUserInfo()
            .then(data => {
                setCurrentUser({ ...data });
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
            <div className="page__container">
              <Header />

            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardDeleteClick={handleCardDelete}
                cards={cards}
                onCardLike={handleCardLike}
            />

            <Footer />

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/>

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

                <ConfirmationPopup isOpen={isConfirmationPopupOpen} onClose={closeAllPopups}  onCardDeleteClick={handleCardDelete} />


            { selectedCard
                ? <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
                : ''
            }

            </div>
          </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
