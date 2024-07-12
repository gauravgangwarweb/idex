const ToolsRequired = () => {
  return (
    <div className="px-4 md:px-16 mt-28">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-20">
        <div>
          <img className="w-full" loading="lazy" src="tools.png" alt="tools" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-[42px] font-bold leading-normal">
            Financial Tools <br /> Required
          </h2>
          <ul className="list-disc flex flex-col gap-4 ml-4 md:ml-0">
            <li>Risk-free Growth: Be a King</li>
            <li>On the right side, we will provide a flow <br /> diagram on how trading works</li>
            <li>e Patient, Be Committed and <br /> Continue Trading. Follow our Guidelines and <br /> You Will Earn Without Worry.</li>
          </ul>
          <button className="w-40 h-16 rounded-md text-white font-semibold mt-2 ml-8 md:ml-16" style={{backgroundImage: "linear-gradient(0deg, #6d51cc 0%, #4c2ea8 99%, #4c2ea8 100%)"}}>Trade Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToolsRequired;
