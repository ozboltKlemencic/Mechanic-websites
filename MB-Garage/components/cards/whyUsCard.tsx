import React from "react";

const WhyUsCard = ({
  header,
  text,
  imgUrl,
}: {
  header: string;
  text: string;
  imgUrl: string;
}) => {
  return (
    <div
      className="card-shadow-2 relative flex h-auto w-full items-start   justify-center overflow-hidden rounded-md border border-gray-400/10 bg-gray-50 bg-contain bg-right-top bg-no-repeat px-8 py-14  transition-all duration-300 hover:-translate-y-1 hover:border-green-400  md:aspect-square md:h-[400px] "
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "110%",
      }}
    >
      <div className=" flex flex-col items-center justify-center  gap-y-3 font-Hind text-xl font-medium ">
        <h3 className="primary-text-gradient text-center font-montserrat text-2xl font-semibold  md:text-3xl lg:text-4xl">
          {header}
        </h3>
        <p className="text-center font-Hind text-sm text-black md:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
