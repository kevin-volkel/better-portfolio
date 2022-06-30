import React, { useState } from "react";
import { scrollToElement } from "../../util/scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setNavOpen((prev) => !prev)}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className={`navbar-container ${navOpen ? "open" : "closed"}`}>
        <div className="spacer"></div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("landing");
            setNavOpen(false)
          }}
        >
          <p>Landing</p>
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("skills");
            setNavOpen(false)
          }}
        >
          <p>Skills</p>
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("gallery");
            setNavOpen(false)
          }}
        >
          <p>Gallery</p>
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("resume");
            setNavOpen(false)
          }}
        >
          <p>Resume</p>
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("contact");
            setNavOpen(false)
          }}
        >
          <p>Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
