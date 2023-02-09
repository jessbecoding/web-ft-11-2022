import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState({});
  const location = useLocation();
  let pokeURL = location.state;

  useEffect(() => {
    // define your function that fetches the pokemon
    const fetchPokemon = async (url) => {
      // fetch logic
      // set state
      const rawData = await fetch(url);
      const pokeData = await rawData.json();
      setPokemon(pokeData);
    };
    fetchPokemon(pokeURL);
    // that url is coming in as a prop
    // you also need to invoke your function
  }, []);

  return (
    <div>
      <h3>{pokemon?.name}</h3>
      <img src={pokemon?.sprites?.front_default} alt="" />
      <ul>
        <li>{pokemon?.types?.type?.name}</li>
      </ul>
    </div>
  );
};

export default PokemonCard;
