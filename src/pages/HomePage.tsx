import { Home } from "./Home";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const HomePage = () => {
  return (
    <div className="row-span-5 max-md:space-y-24">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
