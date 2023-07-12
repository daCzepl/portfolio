import { WritingAnimationText } from "../components/writing-animated-text";

export const Home = () => {
  return (
    <div
      className="text-white flex h-full justify-center items-center px-12 flex-col"
      id="home"
    >
      <div className="text-5xl md:text-7xl lg:text-9xl text-center mb-8">
        <WritingAnimationText>Stefan Czepl</WritingAnimationText>
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl text-center mb-40 h-10">
        <WritingAnimationText delay={500}>
          Software Engineer & App Developer.
        </WritingAnimationText>
      </div>
    </div>
  );
};
