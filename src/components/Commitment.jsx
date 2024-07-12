const Commitment = () => {
  return (
    <div className="px-4 md:px-16 mt-28">
      <h2 className="text-3xl md:text-[42px] font-bold">
        Our Commitment: Protecting Traders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-xl font-bold">Protect Your Capital</h4>
            <p className="text-lg">
              You capital is protected with a <br /> cap on potential declines
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Locked, Secure Smart Contract</h4>
            <p className="text-lg">
              Only you can withdraw <br /> your funds. No one else can
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Risk Management</h4>
            <p className="text-lg">
              Keep patience and continue trading <br /> as per our suggested
              guidelines
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Risk-Free Growth</h4>
            <p className="text-lg">Eliminate Fear and build confidence</p>
          </div>
        </div>
        <div className="flex justify-end mt-10 md:mt-0">
          <img
            className="w-full"
            loading="lazy"
            src="commitment.png"
            alt="commitment"
          />
        </div>
      </div>
    </div>
  );
};

export default Commitment;
