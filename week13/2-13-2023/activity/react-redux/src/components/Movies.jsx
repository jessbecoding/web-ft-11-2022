import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../reducers/movieSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const [movietoAdd, setMovieToAdd] = useState("");
  const movies = useSelector((state) => state.movies);
  return (
    <div>
      <h1>Movies</h1>
      {movies.length !== 0 ? (
        movies.map((movie) => <p>{movie}</p>)
      ) : (
        <p>No Movies Yet!</p>
      )}
      <input type="text" onChange={(e) => setMovieToAdd(e.target.value)} />
      <button onClick={() => dispatch(addMovie(movietoAdd))}>Add Movie</button>
    </div>
  );
};

export default Movies;
