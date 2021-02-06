import React from "react";

function PopupWithForm(props) {

    return(
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button onClick={props.onClose} className="popup__button-close link"  type="button"></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default PopupWithForm