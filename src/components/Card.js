import React from 'react'

function Card(props) {
    const {name, desc, url} = props
    return (
        <li onClick={() => alert('You clicked a card! '+ name)}>
            <img alt={desc} src={url} />
            <h4>{name}</h4>
        </li>
    )
}

export default Card