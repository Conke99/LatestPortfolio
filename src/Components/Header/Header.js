import React, { useState } from "react";
import { animateScroll as scrollSpy, scroller } from "react-scroll";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollToHome = () => {
    scroller.scrollTo("Home", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToSkill = () => {
    scroller.scrollTo("Skill", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToProjects = () => {
    scroller.scrollTo("Projects", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToAbout = () => {
    scroller.scrollTo("About", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="header">
      <h2>Aleksandar</h2>
      <ul className="webNav">
        <li onClick={scrollToHome}>Home</li>
        <li onClick={scrollToSkill}>Skills</li>
        <li onClick={scrollToProjects}>Projects</li>
        <li onClick={scrollToAbout}>About Me</li>
      </ul>
      <button>
        <a href="PDF/Aleksandar_Conic_CV.pdf">Download CV</a>
      </button>
      <img
        onClick={(e) => setIsActive(!isActive)}
        src="./align-justify-solid.svg"
        alt="MobileNav"
      />
      {isActive && (
        <div className="MobileNav">
          <ul className="MobileChoices">
            <li onClick={scrollToHome}>Home</li>
            <li onClick={scrollToSkill}>Skills</li>
            <li onClick={scrollToProjects}>Projects</li>
            <li onClick={scrollToAbout}>About Me</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
