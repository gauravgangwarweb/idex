const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 md:px-10 py-4">
            <img className="w-20" loading="lazy" src="logo-new.png" alt="logo" />
            <div className="hidden md:flex gap-4 items-center">
                <p className="text-[15px] font-bold">Opportunity</p>
                <p className="text-[15px] font-bold">Architecture</p>
                <p className="text-[15px] font-bold">Community</p>
            </div>
            <div className="md:flex hidden gap-3">
                <button className="py-2 px-3 lang-button flex gap-2 rounded-md b-1 text-lg">
                    <img src="en.png" alt="en" />
                    <span>En</span>
                </button>
                <button className="py-2 px-5 trade-button flex gap-2 rounded-md b-1 text-lg font-bold">
                    Trade
                </button>
            </div>
            <button className="block md:hidden">
                <img loading="lazy" src="menu.png" alt="menu" />
            </button>
        </nav>
    );
};

export default Navbar;