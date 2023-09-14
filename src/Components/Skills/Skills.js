import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      img: "./Images/SkillsImages/HTML.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 2,
      title: "CSS",
      img: "./Images/SkillsImages/CSS.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 3,
      title: "JavaScript",
      img: "./Images/SkillsImages/JavaScript.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 4,
      title: "React",
      img: "./logo512.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 5,
      title: "React Native",
      img: "./logo512.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 6,
      title: "Redux",
      img: "./Images/SkillsImages/Redux.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 7,
      title: "Sass",
      img: "./Images/SkillsImages/Sass.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 8,
      title: "Git",
      img: "./Images/SkillsImages/Git.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 9,
      title: "GitHub",
      img: "./Images/SkillsImages/GitHub.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 10,
      title: "Figma",
      img: "./Images/SkillsImages/Figma.webp",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 11,
      title: "Node JS",
      img: "./Images/SkillsImages/NodeJS.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 12,
      title: "Next JS",
      img: "./Images/SkillsImages/Next.js.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
  ];

  const checkSkillValue = (skill) => {
    const n = 5;
    if (skill.title === "Figma") {
      return [...Array(3)].map((e, i) => (
        <img key={i} className="star" src={skill.star} alt="Star" />
      ));
    } else {
      return [...Array(n)].map((e, i) => (
        <img key={i} className="star" src={skill.star} alt="Star" />
      ));
    }
  };

  return (
    <div name="Skill" className="Skills">
      <div className="Skills_contect">
        <h2>Take a look at my Skills</h2>
        <p>
          Here's a comprehensive list of my skills, encompassing a wide array of
          technologies and programming languages I've mastered up to this point.
          My commitment to continuous learning means that this section may
          undergo regular updates to reflect my evolving expertise.
        </p>
        <div className="skill_container">
          {skills.map((skill) => (
            <ul key={skill.id} className="unique_skill">
              <div className="stars">{checkSkillValue(skill)}</div>
              <li>{skill.title}</li>
              <img src={skill.img} alt="Skill" />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
