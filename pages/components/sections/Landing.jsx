import Image from "next/image";
import React, { useState, useEffect } from "react";
import bwProfile from "../../../public/media/bwProfile.jpg";
import clrProfile from "../../../public/media/clrProfile.jpg";
import svg1 from '../../../public/media/Rectangle 1.svg'
import svg2 from '../../../public/media/Rectangle 2.svg'

const Landing = () => {
  const [isColor, setIsColor] = useState(false);

  return (
    <div className="landing">
      <h2 className="name">Kevin Volkel</h2>
      <h3 className="role">Web Designer</h3>
      <div className="img-container">
        <Image
          src={isColor ? clrProfile : bwProfile}
          onClick={() => {
            setIsColor((prev) => !prev);
          }}
        />
      </div>
      <div className="line-container">
        <div className="left line"></div>
        <div className="right line"></div>
      </div>
      <div className="line-spacer"></div>
    </div>
  );
};

export default Landing;
