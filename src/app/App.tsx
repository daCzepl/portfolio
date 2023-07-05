import "./index.css";
import { Nav } from "../components/nav";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

function App() {
  const location = useLocation();

  return (
    <div className="grid grid-cols-12 grid-rows-1 h-screen">
      <div className="col-span-1 bg-black">
        <Nav />
      </div>
      <div className="col-span-11 bg-neutral-800">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
