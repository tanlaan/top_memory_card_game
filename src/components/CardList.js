import React, { useState, useEffect } from 'react'
import Card from './Card'

function CardList(props) {
    const {score, setScore, hiScore, setHiScore} = props
    const [cardsList, setCards] = useState([])
    const [selected, setSelected] = useState([])

    useEffect(() => {
        const select = (name) => {
            if( selected.includes(name) ) {
                if(score > hiScore) {
                    setHiScore(score)
                }
                setScore(0)
                setSelected([])
            } else {
                setSelected((oldSelected) => [...oldSelected, name])
                setScore((oldScore) => oldScore + 1)
            }
        }
        // currentSelection should be a dependency to initiate
        let cards = []
        for (let card of props.cards ) {
            // Random ordered cards list
            let location 
            do {
                location = Math.floor(Math.random() * props.cards.length)
            }
            while (cards[location] !== undefined)
            cards[location] = <Card key={card.name} name={card.name} desc={card.desc} url={card.url} select={select} />
        }
        setCards(cards)
    },[props.cards, selected, score, setScore, hiScore, setHiScore])

    return (
        <div id="card-list">
            <ul>
                { cardsList }
            </ul>
        </div>
    )
}

export default CardList