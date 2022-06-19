import React, { useState } from 'react'

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false)

  return <>
    <div className="navbar-container">
      <div className="nav-item">Landing</div>
      <div className="nav-item">Skills</div>
      <div className="nav-item">Gallery</div>
      <div className="nav-item">Resume</div>
      <div className="nav-item">Contact</div>
    </div>
  </>
}

export default Navbar