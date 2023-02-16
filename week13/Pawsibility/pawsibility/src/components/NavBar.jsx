import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                src="../assets\logos\PawsibilityLogoTransparent.png"
                alt="Pawsibility Logo"
              />
            </Link>
          </li>
          <li>
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <FontAwesomeIcon icon={faHeart} /> Favorites
            </Link>
          </li>
          <li>
            <Link to="">
              <FontAwesomeIcon icon={faMedium} /> Medium
            </Link>
          </li>
          <li>
            <Link to="">
              <FontAwesomeIcon icon={faGithub} /> Github
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
