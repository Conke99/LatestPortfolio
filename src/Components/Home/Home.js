import React from "react";

const Home = () => {
  return (
    <div name="Home" className="home">
      <div className="home_contect">
        <div className="right_side">
          <h3>
            Hello, I am <span>Aleksandar Conic</span>
          </h3>
          <h1>Frontend Developer</h1>
          <p>
            I am a Self-taught Front-end Developer from Serbia. I like to work
            on exciting projects on the Frontend and Design them.
          </p>
        </div>
        <div className="left_side">
          <img src="/Images/Aleksandar Conic image" alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
