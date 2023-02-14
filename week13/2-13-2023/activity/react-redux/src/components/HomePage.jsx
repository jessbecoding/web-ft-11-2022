import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/counter">Counter</Link>
      <br></br>
      <Link to="/movies">Movies</Link>
    </div>
  );
};

export default HomePage;
