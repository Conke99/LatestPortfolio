import "./Styles/index.scss";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
