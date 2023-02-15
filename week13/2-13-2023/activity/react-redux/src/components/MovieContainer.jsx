import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../reducers/movieSlice";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const MovieContainer = () => {
  const APIkey = import.meta.env.VITE_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movieToSearch, setMovieToSearch] = useState("");
  const [movieDetails, setMovieDetails] = useState();

  const movies = useSelector((state) => state.movies);
  const getMovies = async () => {
    const movieURL = `http://www.omdbapi.com/?apikey=${APIkey}&type=movie&s=${movieToSearch}`;
    const movieData = await fetch(movieURL);
    const json = await movieData.json();
    dispatch(searchMovies(json.Search));
  };
  console.log(movieDetails);
  return (
    <div className="my-10">
      <div>
        <input
          className="bg-searchBarGrey text-shadowFontGrey"
          type="text"
          placeholder="Search by title"
          onChange={(e) => setMovieToSearch(e.target.value)}
        />

        <button onClick={() => getMovies()}>Search Movies</button>
      </div>
      {movies?.map((movie) => (
        <div>
          <div>
            <p> {movie?.Title} </p>
          </div>

          <div>
            <p> {movie?.Year} </p>
          </div>

          <div>
            <Link to="/aboutmovie" state={movie}>
              <img src={movie?.Poster} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieContainer;

// As a user, I should be able to see designs that mimic the above two pages as much as possible.  At a minimum, I want the search bar, card layout, card style, and individual movie components to be styled as the above.

// As a user, I should have an ever present beautifully styled tailwind-ish navbar that is shown on all my components at the top

// As a user, I Should have my links styled
