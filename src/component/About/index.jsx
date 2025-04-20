import TypingEffect from "../UI/TypingEfect";

export const About = () => {
  return (
    <div id="about" className="mt-10 px-5 md:px-12 lg:px-36 h-full">
      <div className="flex gap-1 items-center justify-center">
        <img src="/img/gif/user.gif" alt="user" className="w-20" />
        <h1 className="text-4xl lg:text-5xl font-bold capitalize">
          about <span className="text-orange-400">me</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 lg:mt-20 gap-8">
        <div className="flex justify-center">
          <img
            src="/img/photo/foto-eriza.jpeg"
            alt="foto-eriza"
            className="w-80 h-96 object-cover rounded-xl shadow-lg hover:shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">I am Eriza Anjelika</h1>
            <TypingEffect text="Frontend Web Developer" />
          </div>
          <p className="text-base font-medium">
            I am a Frontend Web Developer. I am passionate about
            <span className="text-orange-400"> Frontend Web Development</span>.
            I enjoy creating interactive and user-friendly web applications. My
            goal is to continuously improve my skills and deliver high-quality
            code.
          </p>
          <div className="space-y-2">
            <p className="text-blue-800 font-bold">
              Email :{" "}
              <a href="mailto:erizaangel5@gmail.com" target="_blank">
                <span className="text-blue-950 font-medium hover:text-blue-500 hover:underline">
                  erizaangel5@gmail.com
                </span>
              </a>
            </p>
            {/* <p className="text-blue-800 font-bold">
              Phone :{" "}
              <a href="https://wa.me/6285695655046" target="_blank">
                <span className="text-blue-950 font-medium hover:text-blue-500 hover:underline">
                  +62 856 956 55046
                </span>
              </a>
            </p> */}
          </div>
          <a
            href="https://drive.google.com/file/d/1UQM6cnPfmwoixFVjj9bkjGhH9lGz4TTE/view"
            className="flex gap-2 mt-8 w-36 p-2 bg-orange-400 items-center rounded-full justify-center shadow-lg shadow-orange-400 hover:shadow-orange-500"
            target="_blank"
          >
            <h1 className="text-lg font-medium text-white">Resume</h1>
            <img
              src="/img/gif/arrow-right.gif"
              alt="arrow-down"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
