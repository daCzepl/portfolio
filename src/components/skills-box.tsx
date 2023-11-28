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
    <div className={`border-white px-6 py-8 border-t-4 border-b-4 border-r-2 ${className} w-[18vw] h-[20vw]`}>
      <div className="flex items-center justify-start space-x-3 font-semibold">
        <div className="text-lg md:text-xl lg:text-5xl">{Icon}</div>
        <h1 className="text-lg md:text-xl lg:text-2xl text-left">
          <span className={headingBgClass}>{headingText}</span>
        </h1>
      </div>
      <div className="text-left pt-12 font-medium text-lg">
        <p>{paragraphText}</p>
      </div>
    </div>
  );
};
