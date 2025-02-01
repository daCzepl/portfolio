import { ReactNode } from "react";

interface SkillsBoxProps {
  Icon: ReactNode;
  headingBgClass: string;
  headingText: string;
  paragraphText: string;
  className?: string;
}

export const SkillsBox: React.FC<SkillsBoxProps> = ({ Icon, headingBgClass, headingText, paragraphText, className }) => {
  return (
    <div className={`border-white px-6 pt-8 pb-20 ${className} w-4/5 md:w-2/5 lg:w-2/5 2xl:w-[20%] h-80 flex flex-col justify-between`}>
      <div className="flex items-center justify-start space-x-3 font-semibold ">
        <div className="text-2xl md:text-3xl lg:text-5xl">{Icon}</div>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-left">
          <span className={headingBgClass}>{headingText}</span>
        </h1>
      </div>
      <div className="text-left font-medium text-base md:text-lg lg:text-xl ">
        <p>{paragraphText}</p>
      </div>
    </div>
  );
};
