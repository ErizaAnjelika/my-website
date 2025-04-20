export const Contact = () => {
  return (
    <div className="bg-blue-100 px-5 md:px-12 lg:px-36 pb-10 space-y-10">
      <div className="flex gap-1 pt-4 items-center justify-center">
        <img src="/img/icon/service.png" alt="code" className="w-10" />
        <h1 className="text-3xl font-bold text-blue-950 capitalize">
          Get In <span className="text-orange-400">Touch</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <img src="/img/icon/contact.png" alt="contact" />
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdB8-tz3j0Q01gBr1SE8Ig1fMIrghzrZ-ko233kog-LgjBaZg/viewform?embedded=true"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            className="w-full h-96"
          >
            Memuat...
          </iframe>
        </div>
      </div>
    </div>
  );
};
