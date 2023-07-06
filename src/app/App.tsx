import "./index.css";
import { Nav } from "../components/nav";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

function App() {

  return (
    <div className="grid grid-rows-6 h-screen bg-neutral-800">
      <div className="row-span-1 ">
        <Nav />
      </div>
      <div className="row-span-5">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
