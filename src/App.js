import "./Styles/index.scss";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import FadeIn from "./Components/FadeIn/FadeIn";

function App() {
  return (
    <div className="App">
      <Header />
      <FadeIn sectionName="home">
        <Home />
      </FadeIn>
      <FadeIn sectionName="skills">
        <Skills />
      </FadeIn>
      <FadeIn sectionName="projects">
        <Projects />
      </FadeIn>
      <FadeIn sectionName="about">
        <About />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
