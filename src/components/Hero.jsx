import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero-bg text-white rounded-b-3xl relative">
      <Navbar />
      <div className="grid grid-cols-2 px-10 pb-16">
        <div>
          <h2 className="text-5xl font-bold leading-tight hero-text">
            IDEX - Unlimited Gains with Investment Protection
          </h2>
          <p className="text-2xl font-bold pr-32 mt-4">
            Enjoy our patent-filed IDEX, providing consistent, unlimited gains
            while protecting your investment
          </p>
          <button className="py-2 px-5 trade-button flex gap-2 rounded-md b-1 text-lg font-bold mt-4 ml-6">
            Connect Wallet
          </button>
        </div>
        <div className="pl-20">
          <img loading="lazy" src="hero-img.png" alt="hero-img" />
        </div>
      </div>
      <div className="absolute -bottom-10 left-16">
        <div className="logos-bar p-1">
          <div className="border px-6 py-4">
            <div className="flex justify-between gap-10 items-center">
                <img loading="lazy" src="huoui-global.png" alt="huoui-icon" />
                <img loading="lazy" src="arrington-capital.png" alt="arrington-icon" />
                <img loading="lazy" src="skynet-trading.png" alt="skynet-icon" />
                <img loading="lazy" src="ascensive-assets.png" alt="ascensive-icon" />
                <img loading="lazy" src="morningstar.png" alt="morningstar-icon" />
                <img loading="lazy" src="skyvision-capital.png" alt="skyvision-icon" />
                <img loading="lazy" src="lvt-capital.png" alt="lvt-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
