import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import { Nav } from "../components/nav";
import { useEffect, useState } from "react";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const text = "Hi,\nI'm Stefan\nsoftware developer";
  const textArray = text.split("\n");

  return (
    <div className="grid grid-cols-12 grid-rows-1 h-screen">
      <div className="col-span-1 bg-black">
        <Nav />
      </div>
      <div className="col-span-11 bg-neutral-800">
        <div className="text-white flex h-full items-center px-12">
          <h1>
            {textArray.map((line, index) => (
              <AnimatePresence key={index}>
                {visible && (
                  <motion.div
                    className="text-7xl"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.75, duration: 2 }}
                  >
                    {line}
                    <br />
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
