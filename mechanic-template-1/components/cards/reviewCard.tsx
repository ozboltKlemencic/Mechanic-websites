import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
interface ReviewCardProps {
  rating: number;
  review: string;
  ImageUrl: string;
  name: string;
  surename: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  review,
  ImageUrl,
  name,
  surename,
}) => {
  return (
    <>
      <div className="h-[240px] w-full rounded-md bg-gradient-to-r from-white to-green-300/60 p-px transition-all duration-300 hover:-translate-y-1 md:w-[350px]">
        <div className=" flex size-full flex-col gap-y-2 rounded-[calc(0.375rem-1px)] bg-black px-4 py-5">
          <div className="flex items-center  justify-start gap-x-3 ">
            <div className="size-10 overflow-hidden rounded-[100%] ">
              <Image
                src={ImageUrl}
                alt="Profilna slika uporabnika"
                height={42}
                width={42}
              />
            </div>
            <span className="flex text-center font-montserrat text-base font-semibold text-white ">
              {name}&nbsp;{surename}
            </span>
          </div>
          <div className="">
            <div className="flex items-start justify-start gap-x-1 py-2">
              {Array.from({ length: rating }, (_, index) => (
                <FaStar key={index} className="text-green-400" />
              ))}
            </div>
          </div>
          <p className="font-Hind text-base font-light text-white/85">
            {review}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
