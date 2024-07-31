import { SocialMedia } from "../UI/SocialMedia";
import TypingEffect from "../UI/TypingEfect";

export const Home = () => {
  return (
    <div
      className="pt-11 px-5 md:px-12 lg:px-36"
      style={{ backgroundImage: "url('/img/icon/fabric.png')" }}
    >
      <div className="grid py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="flex flex-col py-0 lg:py-20 gap-4">
          <h1 className="text-4xl font-bold text-blue-950">Hi There,</h1>
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-950">
            I'm{" "}
            <span className="text-orange-400 font-bold text-4xl lg:text-5xl">
              Eriza Anjelika
            </span>
          </h1>
          <div className="flex gap-2 items-center">
            <div className="w-8 h-[2px] bg-orange-400"></div>
            <p className="text-lg font-medium text-blue-950">
              I am a <TypingEffect text="Frontend Web Developer" />
            </p>
          </div>
          <button className="flex gap-2 w-36 p-2 bg-orange-400 items-center rounded-full justify-center shadow-lg shadow-orange-300 hover:shadow-orange-500">
            <h1 className="text-lg font-medium text-white">About Me</h1>
            <img
              src="/img/gif/arrow-down.gif"
              alt="arrow-down"
              className="w-5 h-5"
            />
          </button>
          <SocialMedia />
        </div>
        <div className="flex justify-center p-2 lg:p-10">
          <img
            src="/img/photo/Eriza.jpg"
            alt="hero"
            className="w-72 h-72 lg:w-80 lg:h-80 shadow-2xl transition-shadow hover:shadow-orange-400 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
