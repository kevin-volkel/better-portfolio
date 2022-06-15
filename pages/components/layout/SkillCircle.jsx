import React, { useEffect, useState } from "react";

const SkillCircle = ({ skill, percentage }) => {

  const [currPerc, setCurrPerc] = useState(0)

  const findClipPath = (perc) => {
    const ranges = [
      [100, 87.5], //! clip-path: polygon(50% 0%, 50% 50%, [50 - 100]% 0, 100% 0, 100% 100%, 0 100%, 0 0);
      [87.5, 62.5], //! clip-path: polygon(0 0, 50% 0, 50% 50%, 100% [0 - 50]%, 100% 100%, 0 100%);
      [62.5, 37.5], //! clip-path: polygon(50% 0%, 50% 50%, [0 - 100]% 100%, 0 100%, 0 0);
      [37.5, 12.5], //! clip-path: polygon(0 0, 50% 0, 50% 50%, 0 [0 - 100]%);
      [12.5, 0], //! clip-path: polygon(50% 0%, [0 - 50]% 0, 50% 50%);
    ];
    

    let range = [];
    ranges.map((item) => {
      if (range.length == 0 && item[1] < perc) range = item;
    });

    switch(range[0]) {
      case 100: 
        return `polygon(50% 0%, 50% 50%, ${50 + 50 * ( (100 - perc) / 12.5)}% 0, 100% 0, 100% 100%, 0 100%, 0 0)`
      case 87.5:
        return `polygon(0 0, 50% 0, 50% 50%, 100% ${100 * ( (87.5 - perc) / 25)}%, 100% 100%, 0 100%)`
      case 62.5:
        return `polygon(50% 0%, 50% 50%, ${100 - 100 * ( (62.5 - perc) / 25)}% 100%, 0 100%, 0 0)`
      case 37.5:
        return `polygon(0 0, 50% 0, 50% 50%, 0 ${100 - 100 * ( (37.5 - perc) / 25)}%)`
      case 12.5: 
        return `polygon(50% 0%, ${50 * ( (12.5 - perc) / 12.5)}% 0, 50% 50%)`
      default:
        return 'polygon(0 0, 0 0)'
    }

  };

  useEffect(() => {
    if(currPerc < percentage) {
      setTimeout(() => setCurrPerc(prev => prev + 0.1), 1)
    }
  }, [currPerc, percentage])
  

  return (
    <>
      <div className="skill-container">
        <div className="progress" style={{clipPath: findClipPath(currPerc)}}></div>
        <div className="inside">
          <div className="skill-name">{skill}</div>
          <div className="skill-percentage">{percentage}%</div>
        </div>
      </div>
    </>
  );
};

export default SkillCircle;
