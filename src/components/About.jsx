const About = () => {
    return (
        <div className="px-4 md:px-16 mt-28">
            <div className="flex items-center justify-center">
                <img className="w-32" loading="lazy" src="purple-logo.png" alt="purple-logo" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
                <ul className="flex flex-col gap-4 list-disc ml-4 md:ml-0">
                    <li>It is not a standard DEX. It is different.</li>
                    <li>Follow our trading blue print for the continued <br />and regular returns on your investments</li>
                    <li>1DEX supports only USDT for trading</li>
                    <li>Invite more traders to receive whopping 5% <br />referral fees continuously on their every trade</li>
                </ul>
                <ul className="flex flex-col gap-4 list-disc ml-4 md:ml-0">
                    <li>Encouraging more trading enhances return percentages. <br />Trading returns are based on trading volume.</li>
                    <li>Traders are protected from speculations and pump & dump</li>
                    <li>Our constant liquidity enables trader protection <br /> and capital efficiency</li>
                    <li>1DEX is designed with keeping only traders <br />needs and expectations in mind. </li>
                </ul>
            </div>
        </div>
    );
};

export default About;