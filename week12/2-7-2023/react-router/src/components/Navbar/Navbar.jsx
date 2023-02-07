import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/homepage">Home</Link>
      <Link to="/account">Account</Link>
      <Link to="/pokemonhomepage">Pokemon Homepage</Link>
    </nav>
  );
};

export default Navbar;
