import { DataSkills } from "../../service/data";

export const Skills = () => {
  return (
    <div className="bg-blue-800 mt-10 p-10 px-5 md:px-12 lg:px-36">
      <div className="flex gap-1 pt-4 items-center justify-center">
        <img src="/img/gif/code.gif" alt="code" className="w-10" />
        <h1 className="text-3xl font-bold text-white capitalize">
          Skills & <span className="text-orange-400">abilities</span>
        </h1>
      </div>
      <div className="bg-blue-950 p-4 mt-10 rounded-xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {DataSkills.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-lg shadow-blue-300 hover:shadow-blue-400 transition-shadow hover:scale-110 cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-2xl font-medium text-blue-950 text-center">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
