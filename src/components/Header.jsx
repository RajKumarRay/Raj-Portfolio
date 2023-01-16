import React from "react";

// import "../styles/header.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="upper" id="color">
        <h3 id="color">Raj kumar ray.</h3>
        <div className="content" id="color">
          <a href="#home">
            <div id="color">Home</div>
          </a>
          <a href="#about">
            <div id="color">About</div>
          </a>
          <a href="#experience">
            <div id="color">Experience</div>
          </a>
          <a href="#skills">
            <div id="color">Skills</div>
          </a>
          <a href="#contact">
            <div id="color">Contact Me.</div>
          </a>
        </div>
        <a id="color" href="mailto:rray68896@gmail.com">
          <button>Hire Me!</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
