import React, { useState } from "react";
import { scrollToElement } from "../../util/scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setNavOpen(prev => !prev)}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className={`navbar-container ${navOpen ? "open" : "closed"}`}>
        <div className="nav-item" onClick={() => scrollToElement('landing')}>Landing</div>
        <div className="nav-item" onClick={() => scrollToElement('skills')}>Skills</div>
        <div className="nav-item" onClick={() => scrollToElement('gallery')}>Gallery</div>
        <div className="nav-item" onClick={() => scrollToElement('resume')}>Resume</div>
        <div className="nav-item" onClick={() => scrollToElement('contact')}>Contact</div>
      </div>
    </>
  );
};

export default Navbar;
