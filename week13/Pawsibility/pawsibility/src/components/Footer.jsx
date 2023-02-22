import React, { useState } from "react";
import "../../src/style/footer.css";
import { Link } from "react-router-dom";
import transparentLogo from "../assets/logos/PawsibilityLogoTransparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burger";

const Footer = () => {
  const [open, setOpen] = useState();

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Pawsibility</h4>
            <ul className="list-unstyled">
              <li>(555) 555-5555</li>
              <li>123 Main Street</li>
              <li>Farleigh, Gyrradin</li>
            </ul>
          </div>
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>We do things!</li>
              <li>Yep</li>
              <li>So many things</li>
            </ul>
          </div>
          <div className="col">
            <h4>Another Column!</h4>
            <ul className="list-unstyled">
              <li>Wow!</li>
              <li>Much content</li>
              <li>Very cool</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Pawsibility | All rights reserved |
            Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
