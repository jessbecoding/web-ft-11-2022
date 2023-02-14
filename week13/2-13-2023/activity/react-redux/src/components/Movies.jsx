import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../reducers/movieSlice";
import { Link } from "react-router-dom";
import AboutMovie from "./AboutMovie";

const Movies = () => {
  const APIkey = import.meta.env.VITE_KEY;
  const dispatch = useDispatch();
  const [movieToSearch, setMovieToSearch] = useState("");
  const movies = useSelector((state) => state.movies);
  const getMovies = async () => {
    const movieURL = `http://www.omdbapi.com/?apikey=${APIkey}&s=${movieToSearch}`;
    const movieData = await fetch(movieURL);
    const json = await movieData.json();
    dispatch(searchMovies(json.Search));
  };
  return (
    <div>
      <h1>Movies</h1>
      <input type="text" onChange={(e) => setMovieToSearch(e.target.value)} />
      <button onClick={() => getMovies()}>Search Movies</button>
      {movies?.map((movie) => {
        return (
          <>
            <p> {movie?.Title} </p>
            <p> {movie?.Year} </p>
            <Link to="/aboutmovie" element={<AboutMovie />}>
              <img src={movie?.Poster} />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Movies;

// As a user, I should be able to click on one of the movie cards and be given a different page that shows me more detail about the movie I clicked on

// As a user, I should be able to see designs that mimic the above two pages as much as possible.  At a minimum, I want the search bar, card layout, card style, and individual movie components to be styled as the above.

// As a user, I should have an ever present beautifully styled tailwind-ish navbar that is shown on all my components at the top

// As a user, I Should have my links styled
