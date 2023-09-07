import React from "react";

function Card({ pokemon, image, onClick }) {
    function handleClick() {
        onClick(pokemon);
    }

    return (
        <div onClick={handleClick}>
            <img src={image} alt={pokemon} />
            <div>{pokemon.name}</div>
        </div>
    )
}

export default Card;