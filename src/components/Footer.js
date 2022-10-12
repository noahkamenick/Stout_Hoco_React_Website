import React from "react";
import "./fonts.css";
import "./Footer.css";
import bdp from "../assets/BDP-logo.png";

function Footer() {
  return (
    <div className="container back">
      <hr />
      <span className="logobdp">
        <a
          href="https://bdpstout.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bdp-logo">
            <img id="logo-img" src={bdp} alt="bdp logo" />
            <div id="logo-text">
              <h1 id="logo-name">Blue Devil Productions</h1>
              <h2 id="logo-subtitle">Music // Comedy // Films</h2>
            </div>
          </div>
        </a>
      </span>
    </div>
  );
}

export default Footer;
