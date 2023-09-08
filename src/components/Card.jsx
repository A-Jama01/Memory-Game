import React from "react";

function Card({ pokemon, image, onClick }) {
    function handleClick() {
        onClick(pokemon);
    }

    return (
        <div onClick={handleClick} className="flex flex-col justify-evenly items-center py-16 px-8 bg-white hover:bg-gray-100 border-2 shadow-lg cursor-pointer">
            <img src={image} alt={pokemon} className="w-44 h-44"/>
            <div className="custom-font">{pokemon.name}</div>
        </div>
    )
}

export default Card;