import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Next JS",
      img: "./Images/SkillsImages/Next.js.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 2,
      title: "TypeScript",
      img: "./Images/SkillsImages/TypeScript.png",
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
      title: "Node JS",
      img: "./Images/SkillsImages/NodeJS.png",
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
      title: "Redux",
      img: "./Images/SkillsImages/Redux.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 11,
      title: "TailWind CSS",
      img: "./Images/SkillsImages/tailwind.png",
      star: "./Images/SkillsImages/Vector_small_star.png",
    },
    {
      id: 12,
      title: "HTML",
      img: "./Images/SkillsImages/HTML.png",
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
          Here's a list of my skills, which encompass a variety of technologies
          and programming languages that I've mastered so far. I'm continually
          learning, therefore I'll keep this area updated to reflect my
          expanding knowledge.
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
