import czepl from "../assets/Czepl.jpg";

export const About = () => {
  return (
    <div className="bg-neutral-800" id="about">
      <div className="text-white h-full items-center flex px-4 md:px-12 flex-col justify-between">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center mb-10 md:mb-28 font-bold font-aquire">I'M STEFAN</h1>
        <div className="sm:grid sm:grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center w-full md:w-96 ml-2 h-auto md:mx-0 mb-10 md:mb-0">
            <img src={czepl} alt="Image" className="h-auto rounded-tl-full rounded-tr-full" />
          </div>
          <div className="mt-5 md:mt-0">
            <div className="mb-6 md:mb-10">
              <p className="leading-normal text-xl md:text-4xl lg:text-5xl max-w-full md:max-w-2xl">
                I'm a Software Engineer and App Developer from St.Valentin, Austria.
              </p>
            </div>
            <div className="leading-relaxed text-lg md:text-xl lg:text-2xl max-w-full md:max-w-3xl font-thin">
              <div className="mb-6 md:mb-10">
                <p>
                  I'm currently attending the 5th form of the colleague of software engineering in Perg. I have worked on various projects which you
                  can find under the Projects section.
                </p>
              </div>
              <p>I specialize in building backend solutions using Java, C# and Python.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
