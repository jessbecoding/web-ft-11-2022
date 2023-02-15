import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faStar,
  faVideo,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const homeIcon = <FontAwesomeIcon icon={faHouse} />;
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const listIcon = <FontAwesomeIcon icon={faPlus} />;
  const originalsIcon = <FontAwesomeIcon icon={faStar} />;
  const moviesIcon = <FontAwesomeIcon icon={faVideo} />;
  const seriesIcon = <FontAwesomeIcon icon={faTv} />;
  return (
    <nav className="h-20 bg-black px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="https://variety.com/wp-content/uploads/2022/03/DisneyPlus-Logo.jpg?w=681&h=383&crop=1"
            className="h-6 mr-3 sm:h-9"
            alt="Disney+ Logo"
          ></img>
        </a>
        <div className="flex">
          <div>
            <Link to="/movies" className="text-white flex md:order-2">
              {homeIcon}
              Home
            </Link>
          </div>
          <div>
            <Link className="text-white flex md:order-3">
              {searchIcon}Search
            </Link>
          </div>
          <div>
            <Link className="text-white flex md:order-4">
              {listIcon}Watchlist
            </Link>
          </div>
          <div>
            <Link className="text-white flex md:order-5">
              {originalsIcon}Originals
            </Link>
          </div>
          <div>
            <Link className="text-white flex md:order-6">
              {moviesIcon}Movies
            </Link>
          </div>
          <div>
            <Link className="text-white flex md:order-7">
              {seriesIcon}Series
            </Link>
          </div>
        </div>
        <div className="bg-red-600 flex md:order-8">
          <Link className="text-white">
            <img
              src="https://64.media.tumblr.com/13e88061157422a96e891a3e1516e022/d47999bcb9bb9d9d-f7/s1280x1920/13335f4c49f52f3ffb341604aabf7a681724054c.png"
              className="rounded-full h-6 mr-3 sm:h-9"
            ></img>
            Jess
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
