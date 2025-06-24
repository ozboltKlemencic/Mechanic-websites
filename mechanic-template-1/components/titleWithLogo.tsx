import Image from "next/image";
import React from "react";

interface Props {
  imgUrl: string;
  title: string;
}

const TitleWithLogo = ({ imgUrl, title }: Props) => {
  return (
    <div className="flex items-center justify-center gap-x-4 md:justify-start">
      <Image
        src={imgUrl}
        width={80}
        height={80}
        alt="logo"
        className="hidden md:block"
      />
      <h2 className="text-center text-xl font-semibold text-black md:text-left md:text-3xl">
        {title}
      </h2>
    </div>
  );
};

export default TitleWithLogo;
