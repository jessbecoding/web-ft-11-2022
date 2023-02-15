import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>HomePage</h1>
      </div>
      <div>
        <div>
          <Link to="/counter">Counter</Link>
          <br></br>
        </div>
        <div>
          <Link to="/movies">Movies</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
