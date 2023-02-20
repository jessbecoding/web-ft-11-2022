import React from "react";
import { addFav } from "../reducers/FavoritePets";
import { useLocation } from "react-router-dom";
import "../style/about.css";
import { useDispatch } from "react-redux";

const About = () => {
  const location = useLocation();
  const pet = location.state;
  const dispatch = useDispatch();
  const addFavFunct = (pet) => {
    dispatch(addFav(pet));
  };
  return (
    <div className="mainContainer">
      <div className="firstSection">
        <div className="headerPhoto">
          <img src={pet?.primary_photo_cropped?.full} alt="" />
        </div>
        <div className="detailsContainer"></div>
        <div className="secondSection">
          <div className="petName">
            <h1>{pet?.name}</h1>
          </div>
          <div className="breedLocation">
            <ul>
              <li>{pet?.breeds?.primary}</li>
              <li>
                {pet?.contact?.address?.city},{pet?.contact?.address?.state}
              </li>
            </ul>
          </div>
        </div>
        <div className="thirdSection">
          <ul>
            <li>{pet?.age}</li>
            <li>{pet?.gender}</li>
            <li>{pet?.size}</li>
            <li>{pet?.colors?.primary}</li>
          </ul>
        </div>
        <div className="fourthSection">
          <h2>About</h2>
          <h3>Coat Length</h3>
          <p>{pet?.coat}</p>
          <h3>Health</h3>
          {/* something here about shots/spay/neuter */}
        </div>
        <div className="fifthSection">
          <h2>Meet {pet?.name}</h2>
          <p>{pet?.description}</p>
        </div>
        <div className="buttonContainer">
          <button className="favButton" onClick={() => addFavFunct(pet)}>
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
