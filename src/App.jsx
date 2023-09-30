import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
