import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPets } from "../reducers/PetSlice";

const SearchBar = () => {
  // API INFO ONLY CHANGE TOKEN
  const APIkey = import.meta.env.VITE_API_KEY;
  const bearerToken = import.meta.env.VITE_BEARER_TOKEN;

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  // END API TOKEN

  const dispatch = useDispatch();
  const [zip, setZip] = useState("");
  const pets = useSelector((state) => state.pets);
  const searchPetsByZip = async () => {
    const petZipURL = `https://api.petfinder.com/v2/animals/?location=${zip}`;
    const petData = await fetch(petZipURL, requestOptions);
    const json = await petData.json();
    const jsonHome = json.animals;
    dispatch(searchPets(jsonHome));
  };
  return (
    <div>
      <div>
        <input onChange={(e) => setZip(e.target.value)} type="text" />
        <button onClick={() => searchPetsByZip()}>Search</button>
      </div>
      <div>
        {pets?.map((pet) => (
          <div className="petCardContainer">
            <div>
              <img src={pet.primary_photo_cropped.small} alt="" />
            </div>
            <div>
              <h1>{pet.name}</h1>
            </div>
            <div>
              <ul>
                <li>{pet.age}</li>
                <li>{pet.breeds.primary}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
