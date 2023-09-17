import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: "./Images/ProjectImages/Project 1.png",
      name: "Great App",
      about:
        "This is a project that has eight sections with slider animation with responsive design",
      tech: ["HTML", "CSS", "JavaScript"],
      liveWebsite: "https://serene-jackson-38601d.netlify.app/",
      gitHub: "https://github.com/FoodNipple/GreatApp",
    },
    {
      id: 2,
      img: "./Images/ProjectImages/Project 2.png",
      name: "Happy Paws",
      about:
        "This is my personal project for people who give pets to someone to take care of them and for people who want to take care of pets",
      tech: ["Next JS", "Auth", "Node JS", "PostgraSQL"],
      liveWebsite: "https://happy-paws-landing-chi.vercel.app/",
    },
    {
      id: 3,
      img: "./Images/ProjectImages/Project 3.png",
      name: "Youtube Clone",
      about:
        "This Project is a practice where I wanted to create something like youtube,where you can search videos and render them on Webpage",
      tech: ["React", "API", "BootStrap"],
      liveWebsite: "https://practical-hawking-f22815.netlify.app/",
      gitHub: "https://github.com/FoodNipple/videos",
    },
    {
      id: 4,
      img: "./Images/ProjectImages/Project 4.png",
      name: "Menu",
      about: "In this Project is where I practice State in React",
      tech: ["React", "State", "CSS"],
      liveWebsite: "https://elastic-easley-cc51c8.netlify.app/",
      gitHub: "https://github.com/FoodNipple/Menu",
    },
    {
      id: 5,
      img: "./Images/ProjectImages/Project 5.png",
      name: "Rock-Paper-Scissors",
      about:
        "In this projects I created a litle game that we played as a kids and still do as an adults. The game is called ROCK,PAPER,SCISSORS",
      tech: ["HTML", "CSS", "JavaScript"],
      liveWebsite: "https://sad-nobel-8423bc.netlify.app/",
      gitHub: "https://github.com/FoodNipple/Rock-Paper-Scissors",
    },
    {
      id: 6,
      img: "./Images/ProjectImages/Project 6.png",
      name: "Watch Shop",
      about:
        "This is one is not finished, the plan is to make full site, with login and register. Where you can buy a watch",
      tech: ["React", "Redux", "Sass", "FireBase"],
      liveWebsite: "#",
      gitHub: "https://github.com/FoodNipple/WatchShop",
    },
  ];

  return (
    <div name="Projects" className="projects">
      <div className="projects_contect">
        <h2>These are my Projects.</h2>
        <p>
          These are a selection of the fictional projects I have undertaken to
          enhance my comprehension of the technologies I employ
        </p>
        <div className="project_container">
          {projects.map((project) => {
            return (
              <div className="project" key={project.id}>
                <img src={project.img} alt="First Project" />
                <div className="about_project">
                  <h3>{project.name}</h3>
                  <p>{project.about}</p>
                  <div className="Tech">
                    {project.tech.map((technologies) => {
                      return <span key={technologies}>{technologies}</span>;
                    })}
                  </div>
                  <div>
                    <a href={project.liveWebsite} target="_blank">
                      <button className="Website">Live Website</button>
                    </a>
                    {project.gitHub ? (
                      <a href={project.gitHub} target="_blank">
                        <button className="Code">Github code</button>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="project__ending__paragraf">
          I have many more Projects on my GitHub Profile,{" "}
          <a
            href="https://github.com/FoodNipple?tab=repositories"
            target="_blank"
          >
            Click Here
          </a>{" "}
          if you want to see them &#128515;
        </p>
      </div>
    </div>
  );
};

export default Projects;
