import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, img, desc, url }) => {



  return (
    <>
      <a href={url}>
        <div className="card-container">
          <div className="img-container">
            <Image src={img} alt={`${title} Img`}/>
          </div>
          <div className="card-title">{title}</div>
          <div className="card-divider"></div>
          <div className="card-desc">{desc}</div>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
