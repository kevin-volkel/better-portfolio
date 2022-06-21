import React from "react";
import ProjectCard from "../layout/ProjectCard";
import ticTacToeImg from "../../../public/media/tic-tac-toe.png";
import unoImg from "../../../public/media/uno.png";
import atlasImg from "../../../public/media/atlas.png";

const Gallery = () => {
  const projects = [
    {
      title: "Tic-Tac-Toe",
      img: ticTacToeImg,
      desc: "A simple Tic-Tac-Toe game",
      url: "https://thekevinator900.github.io/TicTacToe/",
    },
    {
      title: "Uno Solitaire",
      img: unoImg,
      desc: "A unique take on Uno with custom cards",
      url: "https://thekevinator900.github.io/Uno/",
    },
    {
      title: "*Atlas",
      img: atlasImg,
      desc: "A design for a weather tracking site",
      url: "https://github.com/Joshuarvlcb/Atlas.git",
    },
  ];

  return (
    <>
      <div className="gallery-container container" id="gallery">
        <div className="section-title">Gallery</div>
        {projects.map((project, i) => (
          <ProjectCard
            title={project.title}
            img={project.img}
            desc={project.desc}
            url={project.url}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
