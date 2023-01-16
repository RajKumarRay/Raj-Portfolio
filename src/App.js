import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
// import "./styles/app.scss";
// import me from "../src/assests/first.jpg";
function App() {
  return (
    <div id="all">
      <Header />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
