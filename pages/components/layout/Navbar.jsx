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
          Landing
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("skills");
            setNavOpen(false)
          }}
        >
          Skills
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("gallery");
            setNavOpen(false)
          }}
        >
          Gallery
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("resume");
            setNavOpen(false)
          }}
        >
          Resume
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToElement("contact");
            setNavOpen(false)
          }}
        >
          Contact
        </div>
      </div>
    </>
  );
};

export default Navbar;
