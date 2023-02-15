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
    <div className="">
      <div className="flex border-2">
        <div className="">
          <input
            className="w-3/4 bg-searchBarGrey text-shadowFontGrey"
            type="text"
            placeholder="Search by title"
            onChange={(e) => setMovieToSearch(e.target.value)}
          />
        </div>
        <div>
          <button className="" onClick={() => getMovies()}>
            Search Movies
          </button>
        </div>
      </div>
      <div className="bg-shadowFontGrey flex flex-wrap">
        {movies?.map((movie) => (
          <div className="">
            <Link to="/aboutmovie" state={movie}>
              <img
                className="rounded object-scale-down h-96 w-48"
                src={movie?.Poster}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;

// As a user, I should be able to see designs that mimic the above two pages as much as possible.  At a minimum, I want the search bar, card layout, card style, and individual movie components to be styled as the above.

// As a user, I should have an ever present beautifully styled tailwind-ish navbar that is shown on all my components at the top

// As a user, I Should have my links styled
