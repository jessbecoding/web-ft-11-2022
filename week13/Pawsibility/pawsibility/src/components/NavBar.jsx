import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <h1>
        NavBar <FontAwesomeIcon icon={faGithub} />
      </h1>
    </div>
  );
};

export default NavBar;
