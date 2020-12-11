import React, { useState, useEffect } from 'react'
import Card from './Card'

function CardList(props) {
    // I dont' feel like this is neccessarily the best method of producing these cards.
    // How am I going to add onClick functionality that has a comparative effect?
    // Create randomizing effect for layout on score change?
    const [cardsList, setCards] = useState([])

    useEffect(() => {
        let cards = []
        for (let card of props.cards ) {
            // Random ordered cards list
            let location 
            do {
                location = Math.floor(Math.random() * props.cards.length)
            }
            while (cards[location] !== undefined)
            cards[location] = <Card name={card.name} desc={card.desc} url={card.url} />
        }
        setCards(cards)
    }, [])

    return (
        <div id="card-list">
            <ul>
                { cardsList }
            </ul>
        </div>
    )
}

export default CardList