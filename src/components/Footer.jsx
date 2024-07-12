const Footer = () => {
  return (
    <footer className="px-4 md:px-16 mt-10 md:mt-28">
      <h2 className="text-3xl md:text-[42px] font-bold leading-normal">
        Jump in to our <br />
        community
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="flex gap-8">
          <a className="flex flex-col items-center gap-1" href="">
            <img
              className="w-8"
              loading="lazy"
              src="facebook.png"
              alt="facebook"
            />
            <span className="text-sm text-[#07085b]">Facebook</span>
          </a>
          <a className="flex flex-col items-center gap-1" href="">
            <img
              className="w-8"
              loading="lazy"
              src="youtube.png"
              alt="youtube"
            />
            <span className="text-sm text-[#07085b]">Youtube</span>
          </a>
          <a className="flex flex-col items-center gap-1" href="">
            <img className="w-8" loading="lazy" src="x.png" alt="x" />
            <span className="text-sm text-[#07085b]">X</span>
          </a>
        </div>
        <div className="flex gap-8">
          <a className="flex flex-col items-center gap-1.5" href="">
            <img
              className="w-8"
              loading="lazy"
              src="telegram.png"
              alt="telegram"
            />
            <span className="text-sm text-[#07085b]">Telegram</span>
          </a>
          <a className="flex flex-col items-center gap-1" href="">
            <img className="w-8" loading="lazy" src="reddit.png" alt="reddit" />
            <span className="text-sm text-[#07085b]">Reddit</span>
          </a>
          <a className="flex flex-col items-center gap-2" href="">
            <img
              className="w-8"
              loading="lazy"
              src="discord.png"
              alt="discord"
            />
            <span className="text-sm text-[#07085b]">Discord</span>
          </a>
        </div>
      </div>
    <p className="text-[#07085b] flex items-center gap-2 my-10">
        <span className="text-xl font-bold">1dex.network</span>
        <span className="text-sm">Crafted by Plus Technology</span>
        <span className="text-base font-medium">2024R</span>
    </p>
    </footer>
  );
};

export default Footer;
