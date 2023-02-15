import React from "react";
import { useLocation } from "react-router-dom";

const AboutMovie = () => {
  const location = useLocation();
  const movie = location.state;
  console.log(location);
  const APIkey = import.meta.env.VITE_KEY;
  const displayMovie = async () => {
    const movieURL = `http://www.omdbapi.com/?apikey=${APIkey}&type=movie&i=${imdbID}`;
    const movieData = await fetch(movieURL);
    const movie = await movieData.json();
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
