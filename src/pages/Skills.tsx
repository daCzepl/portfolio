import { FiSmartphone } from "react-icons/fi";
import { SkillsBox } from "../components/skills-box";
import { BsDatabaseCheck } from "react-icons/bs";
import { TbDeviceImacCog } from "react-icons/tb";
import CodeSample from "../assets/sample_code.png";

export const Skills = () => {
  return (
    <div className="bg-neutral-800 min-h-screen text-white relative pb-24" id="skills">
      <div className="text-3xl md:text-5xl lg:text-7xl text-center mb-14 font-bold font-aquire">MY SKILLS</div>
      <div className="flex flex-wrap justify-center md:justify-start 2xl:justify-center w-full px-4 relative z-10">
        <SkillsBox
          Icon={<TbDeviceImacCog />}
          headingBgClass="bg-software"
          headingText="Software Development"
          paragraphText="Experienced in both functional and OOP programming: Java, C#, Python, Typescript, Javascript."
          className="border-l-4 border-r-4 border-t-4 md:border-l-4 md:border-r-4 md:border-t-4 md:border-b-4 2xl:border-b-4 2xl:border-r-2"
        />
        <SkillsBox
          Icon={<BsDatabaseCheck />}
          headingBgClass="bg-database"
          headingText="Database Engineering"
          paragraphText="Experienced in realational dmbs and designing databases using MYSQL, Oracle , MSSQLServer."
          className="border-l-4 border-r-4 border-t-2 md:border-l-0 md:border-r-4 md:border-t-4 md:border-b-4 2xl:border-l-0 2xl:border-r-2"
        />
        <SkillsBox
          Icon={<FiSmartphone />}
          headingBgClass="bg-app"
          headingText="App Development"
          paragraphText="Beginner at building mobile app for both Android and iOS using Java and Swift."
          className="border-l-4 border-r-4 border-t-2 border-b-4 md:border-t-0 2xl:border-l-0 2xl:border-t-4"
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[7%] opacity-50 mix-blend-lighten w-[90%] max-w-xl md:w-11/12 lg:w-11/12 xl:w-11/12">
        <img src={CodeSample} alt="Sample Code" />
      </div>
    </div>
  );
};
