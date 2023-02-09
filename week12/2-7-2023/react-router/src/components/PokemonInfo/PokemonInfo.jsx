import React from "react";
import { Link } from "react-router-dom";

const PokemonInfo = ({ poke }) => {
  return (
    <div>
      <Link to="/pokemoncard" state={poke.url}>
        <h3>{poke?.name}</h3>
      </Link>
    </div>
  );
};

export default PokemonInfo;
