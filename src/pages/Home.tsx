import { WritingAnimationText } from "../components/writing-animated-text";

export const Home = () => {
  return (
    <div className="text-white flex h-full justify-center items-center px-12 flex-col">
      <div className="text-9xl text-center mb-8">
        <WritingAnimationText>
          Stefan Czepl
        </WritingAnimationText>
      </div>
      <div className="text-3xl text-center mb-80 h-10">
        <WritingAnimationText delay={500}>
        Software Engineer & App Developer.
        </WritingAnimationText>
      </div>
    </div>
  );
};
