import { DataProjects } from "../../service/data";
export const Work = () => {
  return (
    <div className="bg-blue-950 px-5 md:px-12 lg:px-36 pb-10 space-y-10">
      <div className="flex gap-1 pt-4 items-center justify-center">
        <img src="/img/gif/code.gif" alt="code" className="w-10" />
        <h1 className="text-3xl font-bold text-white capitalize">
          Projects <span className="text-yellow-400">made</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {DataProjects.map((data, index) => (
          <div
            key={index}
            className="relative h-64 w-full rounded-md overflow-hidden group shadow-md shadow-white"
          >
            <img src={data.image} alt="Project" className="w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-orange-400 bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <div className="px-2">
                <h1 className="text-2xl font-bold text-white">{data.title}</h1>
              </div>
              <div className="mt-2 py-5 space-y-8 bg-gray-400 px-3 h-full">
                <p>{data.description}</p>
                <div className="flex items-center justify-between gap-5">
                  <a
                    href={data.preview}
                    className="flex items-center justify-center gap-1 bg-black text-white p-2 rounded-lg w-full"
                    target="_blank"
                  >
                    <h4 className="text-base font-medium">Preview</h4>
                    <img src="/img/gif/eye.gif" alt="code" className="w-6" />
                  </a>
                  <a
                    href={data.code}
                    className="flex items-center justify-center gap-1 bg-black text-white p-2 rounded-lg w-full"
                    target="_blank"
                  >
                    <h4 className="text-base font-medium">Code</h4>
                    <img src="/img/gif/code.gif" alt="code" className="w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
