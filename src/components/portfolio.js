import React, { useState } from "react";
import MovieHub from "../assets/images/Movie-Hub.png";
import DrinkUp from "../assets/images/Drink-Up.png";
import VacationStation from "../assets/images/Vacation-Station.png";

function Portfolio(portfolio) {
  const [PortfolioProjects] = useState([
    {
      name: "Movie-Hub",
      link: "https://github.com/JoeBarbone/movie-hub/blob/main/README.md/",
      github: "https://joebarbone.github.io/movie-hub/",
      image: MovieHub,
    },
    {
      name: "Vaction-Station",
      link: "https://vacationstation.herokuapp.com/",
      github: "https://github.com/maddyrae9/vacation-station",
      image: VacationStation,
    },
    {
      name: "Drink-Up",
      link: "https://secret-inlet-46407.herokuapp.com/",
      github: "https://github.com/quicksilver524/credible",
      image: DrinkUp,
    },
  ]);
  return (
    <div id="portfolio-section">
      {PortfolioProjects.map((project, index) => (
        <div
          key={index}
          id={`${project.name}+${index}`}
          className="project-card"
        >
          <img src={project.image} alt={project.name}></img>
          <h3>{project.name}</h3>
          <button type="button" className="submit-btn">
            <a href={`${project.github}`}>Github</a>
          </button>
          <button type="button" className="submit-btn">
            <a href={`${project.link}`}>Project</a>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
