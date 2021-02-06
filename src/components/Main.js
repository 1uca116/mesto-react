import React from "react";
import {api} from "../utils/Api.js";
import Card from "./Card.js";

function Main (props) {

    const [userName, setUserName]=React.useState();
    const [userDescription, setUserDescription ]=React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards]=React.useState([]);

    React.useEffect(() => {
        api.getUserInfo().then((x) => {
            setUserName(x.name);
            setUserDescription(x.about);
            setUserAvatar(x.avatar)
        });

        api.getInitialCards().then(c => {
                setCards(c)
            }
        );
    }, [])


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__about">
                    <img src={userAvatar} style={{ backgroundImage: `url(${userAvatar})` }}  alt="Фото пользователя" className="profile__photo"/>
                    <div className="profile__overlay" onClick={props.onEditAvatar}></div>
                    <div className="profile__info">
                        <div className="profile__description">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" onClick={props.onEditProfile} className="profile__edit link"></button>
                        </div>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-card link"></button>
            </section>
            <ul className="places">
                {cards.map(c =>
                    <Card card={c}
                          onCardClick={props.onCardClick}
                          onDelete={props.onCardDeleteClick}
                    />
                )}
            </ul>
        </main>
    );
}

export default Main;