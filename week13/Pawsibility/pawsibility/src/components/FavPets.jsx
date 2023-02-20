import React from "react";
import { useSelector } from "react-redux";

const FavPets = () => {
  const favPets = useSelector((state) => state.favPets);
  console.log(favPets);
  return (
    <div>
      <h1>FavPets</h1>
      <div className="petCardContainer">
        {favPets?.map((pet) => (
          <ul>
            <li>{pet.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FavPets;
