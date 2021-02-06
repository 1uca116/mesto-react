function Card(props) {
    return (
        <li className="card">
            <button onClick={() => props.onDelete(props.card._id)} type="button" className="card__button-delete link"></button>
            <img src={props.card.link} style={{ backgroundImage: `url(${props.card.link})` }}
            onClick={() => props.onCardClick(props.card)}
            className="card__image" />
            <div className="card__info">
                <h2 className="card__name">{props.card.name}</h2>
                <div className="card__like">
                    <button type="button" className="card__button-like link"></button>
                    <p className="card__like_counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}


export default Card

