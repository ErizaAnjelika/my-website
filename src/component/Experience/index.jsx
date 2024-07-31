import { DataExperience } from "../../service/data";

export const Experience = () => {
  return (
    <div className="px-5 md:px-12 lg:px-36 pb-10 space-y-10">
      <div className="flex gap-1 pt-4 items-center justify-center">
        <img src="/img/gif/bag.gif" alt="code" className="w-10" />
        <h1 className="text-3xl font-bold text-blue-950 capitalize">
          Experience
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="relative border-l-4 border-blue-500">
          {DataExperience.map((event, index) => (
            <div key={index} className="mb-8 ml-6">
              <div className="absolute -left-4 h-8 w-8 bg-blue-500 rounded-full text-white flex items-center justify-center">
                <img src="/img/gif/bag.gif" alt="code" className="w-5" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-lg font-semibold">{event.company}</h1>
                <h3 className="text-base font-semibold">
                  {event.title} | {event.type}
                </h3>
                <p className="mt-2 text-gray-700">{event.description}</p>
                <p className="mt-2 text-gray-700">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
