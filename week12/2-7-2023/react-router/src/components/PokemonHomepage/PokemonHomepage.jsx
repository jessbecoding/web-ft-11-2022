import React from "react";
import { Link } from "react-router-dom";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

const PokemonHomepage = ({ pokemon }) => {
  return (
    <div>
      <h1>Pokemon Homepage</h1>
      {pokemon.map((poke) => (
        <PokemonInfo poke={poke} />
        // <>
        //   <<Link to="/pokemoncard">
        //     <h3>{poke?.name}</h3>
        //   </Link>>
        // </>
      ))}
      ;
    </div>
  );
};

export default PokemonHomepage;
