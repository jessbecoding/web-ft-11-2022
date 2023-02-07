import React from "react";

const PokemonHomepage = ({ pokemon }) => {
  return (
    <div>
      <h1>Pokemon Homepage</h1>
      {pokemon.map((poke) => (
        <>
          <h3>{poke.name}</h3>
          {/* <PokemonInfo poke={pokemon} /> */}
          {/* <img src={poke.url}></img> */}
        </>
      ))}
      ;
    </div>
  );
};

export default PokemonHomepage;
