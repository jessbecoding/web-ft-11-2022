import React from "react";
import { Link } from "react-router-dom";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

const PokemonHomepage = ({ pokemon }) => {
  return (
    <div>
      <h1>Pokemon Homepage</h1>
      {pokemon.map((poke) => (
        <PokemonInfo poke={poke} />
      ))}
      ;
    </div>
  );
};

export default PokemonHomepage;
