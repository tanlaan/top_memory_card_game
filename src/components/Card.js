import React from 'react'

function Card(props) {
    const {name, desc, url, select} = props
    return (
        <li onClick={() => select(name)}>
            <img alt={desc} src={url} />
            <h4>{name}</h4>
        </li>
    )
}

export default Card