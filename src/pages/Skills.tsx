import { FiSmartphone } from "react-icons/fi";
import { SkillsBox } from "../components/skills-box";
import { BsDatabaseCheck } from "react-icons/bs";
import { TbDeviceImacCog } from "react-icons/tb";

export const Skills = () => {
  return (
    <div className="bg-neutral-800 h-screen text-white" id="skills">
      <div className="text-3xl md:text-5xl lg:text-7xl text-center mb-14 font-bold">My Skills</div>
      <div className="text-center flex items-center justify-center">
        <SkillsBox
          Icon={<TbDeviceImacCog />}
          headingBgClass="bg-software"
          headingText="Software Development"
          paragraphText="Experienced in both functional and OOP programming: Java, C#, Python, Typescript, Javascript."
          className="border-l-4"
        />
        <SkillsBox
          Icon={<BsDatabaseCheck />}
          headingBgClass="bg-database"
          headingText="Test Engineering"
          paragraphText="Experienced in realational dmbs and designing databases using MYSQL, Oracle , MSSQLServer."
        />
        <SkillsBox
          Icon={<FiSmartphone />}
          headingBgClass="bg-app"
          headingText="App Development"
          paragraphText="Beginner at building mobile app for both Android and iOS using Java and Swift."
          className="border-r-4"
        />
      </div>
    </div>
  );
};
