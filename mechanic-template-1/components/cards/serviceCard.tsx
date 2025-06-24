import Image from "next/image";
import Link from "next/link";
import React from "react";

interface serviceCardProps {
  Icon: React.ReactNode;
  header: string;
  description: string;
  btnText: string;
  imgUrl: string;
  link: string;
}

const ServiceCard: React.FC<serviceCardProps> = ({
  Icon,
  header,
  description,
  btnText,
  imgUrl,
  link,
}) => {
  return (
    <div className="card-shadow-2 group m-1 flex h-auto w-full flex-col gap-y-3 rounded-md border border-black/20  p-3 pb-6 transition-all duration-300 md:h-[440px] md:w-[300px]  md:hover:translate-x-1">
      <div className="h-auto w-full cursor-pointer overflow-hidden rounded-md">
        <Image
          src={imgUrl}
          alt="storitev"
          layout="responsive"
          width={1600}
          height={900}
          objectFit="cover"
          className="transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <h6 className="mt-3 text-left font-montserrat text-lg font-semibold text-black ">
        {header}
      </h6>
      <p className="text-left font-Hind text-base text-black/80">
        {description}
      </p>
      <div className="group mt-auto inline-block">
        <Link
          href={link}
          className="flex w-fit items-center gap-x-2 rounded-md bg-primary/50 px-3 py-2 font-montserrat  font-semibold text-black/95 transition-all duration-300 hover:gap-x-2.5 hover:bg-primary/70  hover:pl-3.5"
        >
          {btnText}
          {Icon}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
