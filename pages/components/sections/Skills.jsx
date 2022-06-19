import React, { useEffect, useState } from "react";
import SkillCircle from "../layout/SkillCircle";

const Skills = () => {
  const [anim, setAnim] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const animate = (scroll, start, gap) => {
    if (scroll > start) {
      const amountAnimated = Math.floor((scroll - start) / gap);
      let newArr = [];
      for(let i = 0; i < 6; i++) {
        if(i < amountAnimated) newArr.push(true)
        else newArr.push(false)
      }
      setAnim(newArr)
    }
  };

  const handleScroll = (e) => {
    const scroll = window.scrollY;
    const innerWidth = window.innerWidth;

    if (innerWidth <= 480) {
      animate(scroll, 100, 200);
    }
  };

  return (
    <div className="skills-container">
      <div className="section-title">Skills</div>
      <SkillCircle anim={anim[0]} skill="html" percentage={95} />
      <SkillCircle anim={anim[1]} skill="css" percentage={75} />
      <SkillCircle anim={anim[2]} skill="js" percentage={85} />
      <SkillCircle anim={anim[3]} skill="next" percentage={65} />
      <SkillCircle anim={anim[4]} skill="scss" percentage={70} />
      <SkillCircle anim={anim[5]} skill="DB" percentage={85} />
    </div>
  );
};

export default Skills;
