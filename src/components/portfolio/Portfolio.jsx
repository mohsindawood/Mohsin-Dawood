import React from "react";
import IMG1 from "../../assets/app.commercehope.png";
import IMG2 from "../../assets/Dashboard _ Commercehope.png";
import IMG3 from "../../assets/Techgater.png";
import IMG4 from "../../assets/COMMERCEHOPE.png";
import IMG5 from "../../assets/AAIRH VAPES & WHOLESALE.png";
import IMG6 from "../../assets/ABC WHOLESALE.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "App Commercehope",
      img: IMG1,
      description:
        "BookStore app that allows users to store books and update progress",
      technologies: "React | Redux | Ruby on Rails",
      link: "https://www.app.commercehope.com/",
      github: "/",
    },
    {
      id: 2,
      title: "Commercehope",
      img: IMG4,
      description:
        "FakeStore app that provides information about available products and their details",
      technologies: "JavaScript | Material UI | Next",
      link: "https://www.commercehope.com/",
      github: "/",
    },
    {
      id: 3,
      title: "Dashboard",
      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | Material UI | React | MongoDB | Nodejs",
      link: "https://dashboard.commercehope.com/",
      github: "/",
    },
    {
      id: 4,
      title: "Techgater",
      img: IMG3,
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | Material UI | Next",
      link: "https://www.techgater.com",
      github: "/",
    },
    {
      id: 5,
      title: "Aairhus Vape",
      img: IMG5,
      description:
        "Fully responsive interactive website built based on Adobe XD design",
      technologies: "JavaScript | Material UI | Next",
      link: "https://aairhus-vape.vercel.app/",
      github: "/",
    },
    {
      id: 6,
      title: "ABC Wholesale",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Material UI | Next",
      link: "https://www.abcwholesaleusa.com/",
      github: "/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer">
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer">
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
