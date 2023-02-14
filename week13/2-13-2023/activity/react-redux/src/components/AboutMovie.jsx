import React from "react";

const AboutMovie = () => {
  return (
    <div>
      <h1>{movie?.Title}</h1>
      <img src={movie?.Poster} />
      <p> {movie?.Year} </p>
    </div>
  );
};

export default AboutMovie;
