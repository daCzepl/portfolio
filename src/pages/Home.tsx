import { WritingAnimationText } from "../components/writing-animated-text";

export const Home = () => {
  return (
    <div className="text-white flex h-full justify-center items-center px-12 flex-col">
      <div className="text-center mb-8">
        <h1 className="text-9xl">Stefan Czepl</h1>
      </div>
      <div className="text-center mb-80">
        <WritingAnimationText styling="text-3xl">
          Software Engineer & App Developer.
        </WritingAnimationText>
      </div>
    </div>
  );
};

