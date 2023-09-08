import React, { useState, useEffect } from "react";
import Card from './Card';

function GameBoard({ incrementScore, resetScore }) {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=8&offset=0')
        .then(response => response.json())
        .then((data) => {
            const pokemonNames = data.results.map((pokemon, index) => ({
                name: pokemon.name,
                imageUrl: getPokemonImageURL(index),
                selected: false
            }))
            setPokemonList(pokemonNames)
        })
        .catch(error => console.error('Error fetching data', error));
    }, []);

    useEffect(() => {
        console.log(pokemonList);
    }, [pokemonList]);


    function shuffleList(list) {
        const shuffledList = [...list];
        for (let i = shuffledList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
        }
        return shuffledList;
    }

    function getPokemonImageURL(index) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
    }

    function handleClick(pokemon) {
        let shuffledList = [];

        if (pokemon.selected) {
            const unSelectedList = pokemonList.map((pokemon) => ({
                ...pokemon,
                selected: false
            }))
            shuffledList = shuffleList(unSelectedList);
            resetScore();
        } else {
            const newPokemonList = pokemonList.map(pokemonElement => {
               return  pokemonElement.name == pokemon.name ? {...pokemonElement, selected: true} : pokemonElement
            })
            shuffledList = shuffleList(newPokemonList);
            incrementScore();
        }

        setPokemonList(shuffledList)
    }

    return (
        <div className='flex flex-row justify-center flex-wrap gap-16 mt-6 mx-60 border-0'>
            {pokemonList.map((pokemon) => {
               return (
               <div key={pokemon.name}>
                    <Card pokemon={pokemon} image={pokemon.imageUrl} onClick={handleClick} />
               </div>)
            })}
        </div>
    )
}

export default GameBoard;