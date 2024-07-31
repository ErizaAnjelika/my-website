import { DataEducation } from "../../service/data";

export const Education = () => {
  return (
    <div className="bg-blue-50 px-5 md:px-12 lg:px-36 pb-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img src="/img/icon/toga.png" alt="toga" className="w-24" />
          <h1 className="text-3xl font-bold text-blue-950">My Education</h1>
        </div>
        <p className="text-base font-semibold text-blue-950 text-center w-96">
          "The only person who is educated is the one who has learned how to
          learn and change." - Carl Rogers
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        {DataEducation.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-[80%] lg:w-[70%] flex flex-col md:flex-row lg:flex-row items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:scale-100 cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-32 h-32 object-contain"
            />
            <div className="flex flex-col gap-2 text-center md:text-left lg:text-left">
              <h1 className="text-2xl lg:text-3xl font-medium text-blue-900">
                {item.title}
              </h1>
              <h5 className="text-base">{item.description}</h5>
              <h5 className="text-base font-bold text-green-700">
                {item.date} | {item.status}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
