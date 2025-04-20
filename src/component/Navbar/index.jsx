import { useState, useEffect, useRef } from "react";
import { DataNavbar } from "../../service/data";
import "./Style.css";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (index) => {
    setSelectedMenu(index);
    setToggle(false);
  };

  const [currentMenu, setCurrentMenu] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentMenu(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="bg-gray-100 fixed w-full px-5 md:px-10 lg:px-36 py-2 shadow-md z-10">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div>
            <img src="/img/icon/ER.png" alt="ER-logo" className="w-10" />
          </div>
          <h1 className="text-2xl font-bold">
            iza<span className="text-2xl text-blue-600">.</span>
          </h1>
        </div>
        <div className="hidden md:flex lg:flex gap-7 items-center">
          {DataNavbar.map((data, index) => (
            <div key={index}>
              <a
                href={`#${data.title}`}
                className={`font-semibold hover:text-orange-700 hover:border-b-4 hover:border-b-orange-600 
                  ${
                    currentMenu === `#${data.title}`
                      ? "text-orange-700 border-b-4 border-b-orange-600"
                      : ""
                  }
                  `}
              >
                {data.title}
              </a>
            </div>
          ))}
        </div>
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="block md:hidden lg:hidden"
        >
          {toggle ? (
            <img src="/img/gif/close.gif" alt="close-icon" className="w-10" />
          ) : (
            <img src="/img/gif/menu.gif" alt="menu-icon" className="w-10" />
          )}
        </button>
        <div
          ref={menuRef}
          className={`absolute right-0 top-14 h-screen w-64 bg-blue-950 shadow-lg ring-1 ring-black ring-opacity-5 transition-transform transform ${
            toggle ? "animate-slide-in-right" : "animate-slide-out-right"
          } ${toggle ? "opacity-100" : "opacity-0"} ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 p-4">
            {DataNavbar.map((data, index) => (
              <div key={index} onClick={() => handleItemClick(index)}>
                <a
                  href={`#${data.title}`}
                  className={`${
                    selectedMenu === index
                      ? "text-white font-bold border-b-4 border-b-blue-600"
                      : "text-white font-semibold hover:border-b-4 hover:border-b-blue-600"
                  }`}
                >
                  {data.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
