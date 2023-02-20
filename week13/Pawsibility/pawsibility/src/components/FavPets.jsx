import React from "react";

const FavPets = () => {
  return (
    <div>
      <h1>FavPets</h1>
      <div className="petCardContainer">
        {pets?.map((pet) => (
          <ul>
            <li>{pet.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FavPets;
