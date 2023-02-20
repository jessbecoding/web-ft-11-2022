import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchPets } from "../reducers/SearchPetSlice";
import "../style/search.css";

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
  const [type, setType] = useState("");
  const pets = useSelector((state) => state.pets);
  const searchPetsByZip = async () => {
    const petZipURL = `https://api.petfinder.com/v2/animals/?type=${type}?location=${zip}`;
    const petData = await fetch(petZipURL, requestOptions);
    const json = await petData.json();
    const jsonHome = json.animals;
    dispatch(searchPets(jsonHome));
  };
  return (
    <div className="searchItems">
      <div className="zipDiv">
        <input
          placeholder="Enter your zip here..."
          className="zipInput"
          onChange={(e) => setZip(e.target.value)}
          type="text"
        />
        <button className="searchButton" onClick={() => searchPetsByZip()}>
          Search
        </button>
        <div>
          <div>
            <label>Pet Type</label>
          </div>
          <div>
            <select
              placeholder="Pet Type"
              name="type"
              onChange={(e) => setType(e)}
              value={type.state ? type.state : ""}
            >
              <option value="" disabled selected>
                Pet Type
              </option>
              <option value="">Cat</option>
              <option value="AK">Dog</option>
              <option value="AZ">Rabbit</option>
              <option value="AR">Horse</option>
              <option value="CA">Bird</option>
              <option value="CA">Barnyard</option>
              <option value="CO">Scales, Fins & Other</option>
            </select>
          </div>
        </div>
      </div>
      <div className="petCardContainer">
        {pets?.map((pet) => (
          <div className="petCard">
            <Link to={`/about/${pet.name}/${pet.id}`} state={pet}>
              <div>
                <img
                  className="petPhoto"
                  src={pet?.primary_photo_cropped?.small}
                  alt=""
                />
              </div>
              <div>
                <h1 className="petName">{pet?.name}</h1>
              </div>
              <div>
                <ul>
                  <li className="petAge">{pet?.age}</li>
                  <li className="petBreed">{pet?.breeds?.primary}</li>
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
