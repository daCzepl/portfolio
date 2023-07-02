import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { Nav } from "../components/nav";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="grid grid-cols-12 grid-rows-1 h-screen">
        <div className="col-span-1 bg-black">
            <Nav />
        </div>
        <div className="col-span-11 bg-neutral-800">
            <div className="text-white flex h-full items-center px-8">
                <h1 className="text-7xl">Hi,<br/>
                I'm Stefan<br/>
                software developer</h1>
            </div>
        </div>
    </div>
  );
}

export default App;
