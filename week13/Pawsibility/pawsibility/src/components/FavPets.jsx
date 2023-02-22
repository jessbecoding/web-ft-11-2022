import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../reducers/FavoritePets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavPets = () => {
  const dupNotification = () => toast("This pet is in favorites already!");
  const favPets = useSelector((state) => state.favPets);
  const dispatch = useDispatch();
  const delFav = (pet) => {
    dispatch(removeFav(pet));
    toast.success("Pet was removed from favorites.");
  };
  return (
    <div>
      <h1>FavPets</h1>
      <div className="petCardContainer">
        {favPets?.map((pet) => (
          <div className="petCard">
            <div>
              <img
                className="petPhoto"
                src={pet?.primary_photo_cropped?.small}
                alt=""
              />
            </div>
            <div>
              <div>
                <h3>{pet?.name}</h3>
              </div>
              <div>
                <ul>
                  <li>{pet?.age}</li>
                  <li>{pet?.gender}</li>
                  <li>{pet?.breeds?.primary}</li>
                </ul>
              </div>
            </div>
            <div>
              <button className="favButton" onClick={() => delFav(pet)}>
                Remove From Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default FavPets;
