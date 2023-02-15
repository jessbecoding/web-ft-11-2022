import React from "react";
import { useDispatch } from "react-redux";
import { displayDetails } from "../reducers/movieSlice";

const AboutMovie = (movie) => {
  console.log(movie);
  const APIkey = import.meta.env.VITE_KEY;
  const dispatch = useDispatch();
  const displayMovie = async () => {
    const movieURL = `http://www.omdbapi.com/?apikey=${APIkey}&type=movie&i=${imdbID}`;
    const movieData = await fetch(movieURL);
    const movie = await movieData.json();
    dispatch(displayDetails(movie));
  };
  return (
    <div>
      <h1>{movie?.Title}</h1>
      <img src={movie?.Poster} />
      <p> {movie?.Year} </p>
    </div>
  );
};

export default AboutMovie;
