export const SocialMedia = () => {
  return (
    <div className="flex gap-4 mt-5">
      <div className="bg-yellow-400 rounded-full p-2 hover:bg-blue-300">
        <a href="https://github.com/ErizaAnjelika" target="_blank">
          <img src="/img/icon/github.png" alt="" className="w-7" />
        </a>
      </div>
      <div className="bg-yellow-400 rounded-full p-2 hover:bg-blue-300">
        <a href="https://www.linkedin.com/in/eriza-anjelika/" target="_blank">
          <img src="/img/icon/linkedin (1).png" alt="" className="w-7" />
        </a>
      </div>
      <div className="bg-yellow-400 rounded-full p-2 hover:bg-blue-300">
        <a href="mailto:erizaangel5@gmail.com" target="_blank">
          <img src="/img/icon/email.png" alt="" className="w-7" />
        </a>
      </div>
    </div>
  );
};
