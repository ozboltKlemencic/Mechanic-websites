import React from "react";

interface Props {
  imageUrl: string;
  header1?: string;
  text?: string;
  textShow?: boolean;
  imageShow?: boolean;
  headerShow?: boolean;
}

const BorderBwithImage = ({
  header1,
  text,
  imageUrl,
  textShow,
  imageShow,
  headerShow,
}: Props) => {
  return (
    <div
      className={`card-shadow  relative  h-auto  w-full cursor-pointer overflow-hidden rounded-md border-2   transition-all duration-500 hover:-translate-y-2  ${textShow ? "  md:w-[calc((1280px-3*24px)/3)]" : " md:w-[calc((1280px-3*24px)/4)]"}`}
    >
      {imageShow && (
        <div
          className="relative left-0 top-0 h-[220px] bg-cover bg-center md:w-full"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}
      <div
        className={`flex  flex-col items-center gap-y-3.5 px-6 py-8  ${textShow ? "max-h-[240px] min-h-[220px] justify-start" : "h-[120px] justify-center"}`}
      >
        {headerShow && (
          <h3
            className={`text-center font-montserrat  uppercase text-black/80 md:text-xl ${textShow ? "text-xl font-bold" : "text-lg font-semibold"}`}
          >
            {header1}
          </h3>
        )}

        {textShow && (
          <p className=" text-center font-Hind text-lg  text-black/70 md:text-xl">
            {text}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-[20px] w-full bg-gradient-to-b from-transparent to-green-400/40"></div>
    </div>
  );
};

export default BorderBwithImage;
