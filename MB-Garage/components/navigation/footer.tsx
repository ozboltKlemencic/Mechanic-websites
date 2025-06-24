"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegPaperPlane, FaRegClock } from "react-icons/fa";

import ROUTES from "@/constants/routes";

import ContaktBox from "./contaktBox";
import MyMapComponent from "../map";
import NavLinks from "./navLink";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Footer = () => {
  return (
    <div className="  flex h-auto w-screen items-center justify-center bg-black md:h-[650px] lg:h-[720px] ">
      <div className="flex size-full max-w-[2800px] gap-x-10 overflow-hidden max-md:flex-col">
        {/* left side */}
        <div className="relative flex h-auto min-h-[60vh] w-full items-center justify-center py-16 md:h-full md:w-1/3 md:p-0">
          <div className="absolute inset-0 z-0 ">
            <Image
              src="/images/footer-car.jpg"
              alt="mechanic garage"
              layout="fill"
              objectFit="cover"
              className="size-full"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-y-3 p-4">
            <strong className="text-center text-3xl font-semibold text-white/90 md:text-2xl lg:text-5xl">
              MB Garage
            </strong>
            <p className="md: w-3/4 text-center text-base font-normal text-white/80 md:text-sm lg:text-base">
              Vas zaupanja vreden avtoservis
            </p>
            <div className="mt-3 flex items-center justify-center gap-x-3 py-3 md:scale-[80%] lg:scale-100">
              <PrimaryBtn icon={<BsTelephone />} text="Poliči nas" />
            </div>
          </div>
        </div>

        {/* central side */}
        <div className="flex h-auto w-full flex-col justify-center gap-y-3 px-4 py-8 md:w-1/3 md:justify-start md:py-12">
          <div>
            <Link
              href="/"
              className="flex items-center justify-center gap-x-2 md:justify-start"
            >
              <Image
                src="/images/icons/logo.svg"
                width={105}
                height={40}
                alt="mechanic logo"
                className="w-[55px] lg:w-[70px]"
              />
              <h6 className="flex gap-x-2 text-2xl font-bold uppercase text-white md:text-2xl lg:text-4xl ">
                MB <span>Garage</span>
              </h6>
            </Link>
          </div>
          <div className=" my-4  border-b-2 border-white/15 pb-6">
            <p className="text-center text-sm text-white/80 md:text-left lg:text-base">
              Pomagamo vam ohranjati brezhibno vožnjo z zanesljivim
              servisom,čiščenjem,centriranjem in kakovostno menjavo gum za
              neprekinjeno pot.
            </p>
          </div>
          <div className="flex w-full flex-col justify-center gap-y-3">
            <ul className="flex flex-wrap items-start justify-center gap-x-3 gap-y-2 text-base md:justify-start">
              <NavLinks />
            </ul>
          </div>
          <div className="mb-8 mt-20 flex flex-col items-center justify-center gap-y-4 md:mt-auto md:items-start">
            <ContaktBox
              Icon={<BsTelephone />}
              text="040 517 788"
              link={ROUTES.CONTACT.PHONE}
              telephone
            />
            <ContaktBox
              mail
              Icon={<FaRegPaperPlane />}
              text="beronja.miroslav32@gmail.com"
              link={ROUTES.CONTACT.EMAIL.replace("mailto:", "")}
            />
            <ContaktBox
              Icon={<FaRegClock />}
              text="Pon-Pet: 08.00-17.00"
              link="#"
            />
          </div>
          <p className="primary-text-gradient text-center text-xs font-medium md:text-left md:text-sm">
            © MB garage, avtomehanična delavnica, Miroslav Beronja, s.p.
          </p>
        </div>

        {/* right side */}
        <div className="flex size-full flex-col items-center overflow-hidden bg-black  p-2 md:w-1/3  md:p-8">
          <MyMapComponent />
        </div>
      </div>
    </div>
  );
};

export default Footer;
