import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../reducers/movieSlice";

const getMovies = async() => {
  searchInput = req.body.value;
  const movieURL = `http://www.omdbapi.com/?apikey=[KEYHERE]&type=movie&s=${searchInput}`;
  const fetchMovies = async () => {
    const movieData = await fetch(url);
    const json = await movieData.json();
}}


const Movies = () => {
  const dispatch = useDispatch();
  const [movietoAdd, setMovieToAdd] = useState("");
  const movies = useSelector((state) => state.movies);
  return (
    <div>
      <h1>Movies</h1>
      <input type="text" onChange={(e) => setMovieToAdd(e.target.value)} />
      <button onClick={() => }>Search Movies</button>
      {movies.length !== 0 ? (
        movies.map((movie) => <p>{movie.Title}</p>)
      ) : (
        <p>Search a title or keyword above to get started!</p>
      )}
    </div>
  );
};

export default Movies;

// As a user, I should be able to type in a movie, and a list of movies based on keyword should appear underneath my search bar

// As a user, I should be able to click on one of the movie cards and be given a different page that shows me more detail about the movie I clicked on

// As a user, I should be able to see designs that mimic the above two pages as much as possible.  At a minimum, I want the search bar, card layout, card style, and individual movie components to be styled as the above.

// As a user, I should be using react router dom to show my different pages

// As a user, I should have an ever present beautifully styled tailwind-ish navbar that is shown on all my components at the top

// As a user, I Should have my links styled
