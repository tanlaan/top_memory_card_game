import React from 'react'

function Header(props) {
    const {score, hiScore} = props
    return (
        <header>
            <h1>Memory Card Game</h1>
            <h2>The Big Brain Game Of 2020</h2>
            <div id='score-board'>
                <p>Current Score: {score}</p>
                <p>High Score: {hiScore}</p>
            </div>
            <hr />
        </header>
    )
}

export default Header