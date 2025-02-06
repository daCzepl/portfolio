import { useEffect, useState } from "react";
import CircularGallery from "../components/ui/CircularGallery";

export const Projects = () => {
  const [bend, setBend] = useState(window.innerWidth < 1500 ? 0 : 2);

  useEffect(() => {
    const handleResize = () => {
      setBend(window.innerWidth < 1500 ? 0 : 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-neutral-800 text-white min-h-screen" id="projects">
      <div className="text-3xl md:text-5xl lg:text-7xl text-center mb-14 font-bold 2xl">My Work</div>
      <div style={{ position: "relative" }} className="">
        <CircularGallery bend={bend} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
};
