import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: "./Images/ProjectImages/Project 1.png",
      name: "Hub Pay",
      about:
        "Hub-Pay, a React JS-powered software, makes international money transfers easier. Custom animations and sliders improve the user experience, and Sass styling results in an elegant and professional interface.",
      tech: ["React", "Sass", "JavaScript"],
      liveWebsite: "https://determined-brattain-a1f041.netlify.app/",
      gitHub: "https://github.com/Conke99/HubPay",
    },
    {
      id: 2,
      img: "./Images/ProjectImages/Project 2.png",
      name: "Happy Paws",
      about:
        "This is my personal effort for people who give their pets to someone else to care for and for others who want to help to care for pets.",
      tech: ["Next JS", "Auth", "Node JS", "PostgraSQL"],
      liveWebsite: "https://happy-paws-landing-chi.vercel.app/",
    },
    {
      id: 3,
      img: "./Images/ProjectImages/Project 3.png",
      name: "Car Hub",
      about:
        "My project delivers a visually appealing platform where users can browse and hire a wide choice of stunning automobiles using Next.js for server-side rendering, TypeScript for powerful type checking, and Tailwind CSS for sleek and responsive designs.",
      tech: ["Next JS", "TypeScript", "Tailwindcss", "API"],
      liveWebsite: "https://cars-showcase-yeh5.vercel.app/",
      gitHub: "https://github.com/Conke99/cars_showcase/tree/master",
    },
    {
      id: 4,
      img: "./Images/ProjectImages/Project 4.png",
      name: "Spotify Clone",
      about:
        "In this Next.js project, I built a Spotify clone with Supabase for the database, Stripe for integrating Spotify Premium subscriptions, and Tailwind for CSS, allowing users to listen to music while enjoying a premium experience.",
      tech: ["Next JS", "TypeScript", "Stripe", "Supabase"],
      liveWebsite: "https://spotify-clone-h7ewjk1mt-conke99.vercel.app/",
      gitHub: "https://github.com/Conke99/spotify-clone",
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
          These are some of the fictitious projects I've worked on to better
          understand the technology I use.
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
