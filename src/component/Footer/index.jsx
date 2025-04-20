import { DataNavbar } from "../../service/data";
import { SocialMedia } from "../UI/SocialMedia";

export const Footer = () => {
  return (
    <div className="bg-[#00012b] px-5 md:px-12 lg:px-36 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium text-white capitalize">
            Eriza's Portfolio
          </h1>
          <p className="text-white">
            Thank you for exploring my personal portfolio. Feel free to connect
            with me on social media.
          </p>
          <p className="text-white">Keep Moving Forward 🚀. Let's chat live!</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium text-white capitalize">
            Quick Links
          </h1>
          <div className="space-y-1">
            {DataNavbar.map((data, index) => (
              <div key={index} className="flex gap-1 items-center">
                <img src="/img/icon/next (2).png" alt="arrow" className="w-5" />
                <a
                  href={data.title}
                  className="text-white font-medium hover:text-orange-400 hover:underline"
                >
                  {data.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium text-white capitalize">
            Contact Info
          </h1>
          <div className="space-y-4">
            {/* <div className="flex gap-2 items-center">
              <img src="/img/icon/phone-call.png" alt="phone" className="w-5" />
              <a
                href="https://wa.me/6285695655046"
                className="text-white font-medium text-base hover:text-orange-400"
                target="_blank"
              >
                +62 85695655046
              </a>
            </div> */}
            <div className="flex gap-2 items-center">
              <img src="/img/icon/email (1).png" alt="phone" className="w-5" />
              <a
                href="mailto:erizaangel5@gmail"
                className="text-white font-medium text-base hover:text-orange-400"
                target="_blank"
              >
                erizaangel5@gmail.com
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/icon/location.png" alt="phone" className="w-5" />
              <a
                href=""
                className="text-white font-medium text-base hover:text-orange-400"
              >
                Malang, indonesia
              </a>
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>
      <hr className="my-8" />
      <p className="text-white text-center">
        © 2024 Eriza Angel. All rights reserved.
      </p>
    </div>
  );
};
