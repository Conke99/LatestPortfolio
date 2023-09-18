import React from "react";

const Home = () => {
  return (
    <div name="Home" className="home">
      <div className="home_contect">
        <div className="right_side">
          <div className="right_side-wrapper">
            <h3>
              Hello, I am <span>Aleksandar Conić</span>
            </h3>

            <h1>Fullstack Developer</h1>
            <p>
              I am a self-taught Fullstack Developer hailing from Serbia. My
              passion lies in crafting captivating projects that seamlessly
              integrate both frontend and backend development, allowing me to
              also explore the world of design.
            </p>
          </div>
        </div>
        <div className="left_side">
          <img src="/Images/Profile.jpg" alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
