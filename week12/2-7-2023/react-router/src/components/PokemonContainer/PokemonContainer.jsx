import React from "react";
import pokemon from "./components/pokemonData.js";
import PokemonInfo from "./PokemonInfo.jsx";

const PokemonContainer = () => {
  return (
    <div>
      {pokemon.map((poke) => (
        <PokemonInfo pokemon={poke} />
      ))}
    </div>
  );
};

export default PokemonContainer;
