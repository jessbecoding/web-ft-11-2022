import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPets } from "../reducers/PetSlice";

const Search = () => {
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

  const searchPetsByZip = async () => {
    const petZipURL = `https://api.petfinder.com/v2/animals/?location=${zip}`;
    const petData = await fetch(petZipURL, requestOptions);
    const json = await petData.json();
    dispatch(searchPets(json));
    const jsonHome = json.animals;
    console.log(jsonHome);
  };
  return (
    <div>
      <input onChange={(e) => setZip(e.target.value)} type="text" />
      <button onClick={() => searchPetsByZip()}>Search</button>
    </div>
  );
};

export default Search;
