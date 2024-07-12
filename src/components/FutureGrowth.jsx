const FutureGrowth = () => {
    return (
        <div className="px-4 md:px-16 mt-28">
            <h2 className="text-3xl md:text-[42px] font-bold md:leading-normal">Beating the Top Cryptos : Unprecedented <br /> Future Growth of 1DEX</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <p className="text-xl font-medium mt-10 md:mt-16 pr-16">Our patented technology ensures price increases regardless of market conditions, offering unlimited growth and the potential to outperform top cryptocurrencies. Follow our suggested trading guidelines to ensure profits</p>
                    <button className="bg-[#383e44] text-white flex gap-3 items-center justify-center py-3 px-2 border-[#5858a7] border-2 mt-16 md:mt-32">
                        <img src="download-icon.png" alt="download-icon" />
                        <span className="text-lg font-bold">Download Whitepaper</span>
                    </button>
                </div>
                <div className="">
                    <img className="w-full mt-10 md:mt-0" loading="lazy" src="future-growth.png" alt="future-growth" />
                </div>
            </div>
        </div>
    );
};

export default FutureGrowth;