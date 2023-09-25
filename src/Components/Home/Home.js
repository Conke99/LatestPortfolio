import React from "react";

const Home = () => {
  return (
    <div name="Home" className="home">
      <div className="home_contect">
        <div className="right_side">
          <h3>
            Hello, I am <span>Aleksandar Conić</span>
          </h3>

          <h1>Fullstack Developer</h1>
          <p>
            Hello 👋, welcome to my personal portfolio page. I'm a Fullstack
            Developer from Serbia. My love is creating compelling projects that
            smoothly integrate both frontend and backend development, allowing
            me to also dabble in design.
          </p>
        </div>

        <div className="left_side">
          <img src="/Images/Profile.jpg" alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
