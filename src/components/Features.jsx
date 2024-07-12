const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 md:px-16 mt-32">
      <div className="flex flex-col items-center justify-start md:justify-center">
        <img loading="lazy" src="invest.png" alt="invest" />
        <h4 className="text-2xl font-bold text-[#20202c] mt-4">
          Invest with Confidence
        </h4>
        <h6 className="text-lg font-bold text-[#6943e0] mt-2">
          You Benefit from Pump and Dump
        </h6>
        <p className="text-lg text-[#000154] mt-2 text-center px-4">
          Price increases with every trade, ensuring all traders benefit even
          during Pump and Dump scenarios
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img loading="lazy" src="referral.png" alt="referral" />
        <h4 className="text-2xl font-bold text-[#20202c] mt-4">
          Referral Growth
        </h4>
        <h6 className="text-lg font-bold text-[#6943e0] mt-2">
          Build wealth through referrals
        </h6>
        <p className="text-lg text-[#000154] mt-2 text-center px-4">
          Earn recurring 5% referral income for every trade made by your r
          eferrals, FOREVER
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img loading="lazy" src="guaranteed.png" alt="guaranteed" />
        <h4 className="text-2xl font-bold text-[#20202c] mt-4">
          Guaranteed Liquidity
        </h4>
        <h6 className="text-lg font-bold text-[#6943e0] mt-2">
          Get Paid at Every Sale Without Worry
        </h6>
        <p className="text-lg text-[#000154] mt-2 text-center px-4">
          Our patented 1DEX ensures liquidity under all conditions
        </p>
      </div>
    </div>
  );
};

export default Features;
