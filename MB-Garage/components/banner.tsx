"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";

import PrimaryBtn from "./buttons/PrimaryBtn";

interface BannerData {
  header1: string;
  header2: string;
  text: string;
  imageUrl: string;
}

interface Props {
  data: BannerData;
}

const Banner = ({ data }: Props) => {
  const { header1, header2, text, imageUrl } = data;

  return (
    <>
      {/* Predpomnjenje slike za hitrejše nalaganje */}
      <Head>
        <link rel="preload" href={imageUrl} as="image" />
      </Head>

      <section className="flex max-h-[830px] w-full items-center justify-center bg-background pb-6 pt-2 md:h-[530px] lg:h-[calc(100vh-10rem)] lg:min-h-[780px] lg:px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }} // Zakasni animacijo
          className="flex h-full w-[97%] flex-col items-center overflow-hidden rounded-md shadow-2xl md:min-h-[400px] md:flex-row lg:h-full lg:w-[1650px]"
        >
          {/* Slika kot ozadje (z uporabo next/image za optimizacijo) */}
          <div className="relative h-[200px] w-full md:h-full md:w-1/3 lg:w-1/2">
            <Image
              src={imageUrl}
              alt={header1} // Dodaj alt tekst za boljšo dostopnost
              layout="fill" // Slika se bo prilagodila velikosti div-a
              objectFit="cover"
              quality={65}
              priority
            />
            {/* Overlay za povečanje kontrasta besedila na sliki */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          <div className="flex min-h-[500px] w-full flex-col items-center justify-center bg-[#2B2B2B] md:top-0 md:h-full md:w-2/3 md:px-6 lg:w-1/2">
            <div className="flex size-full flex-col items-start justify-center p-4 md:h-4/5 md:w-full lg:h-3/5">
              <div className="mb-3 flex w-full flex-col items-start justify-start gap-y-3 border-b border-white/30 md:gap-y-4 lg:gap-y-6">
                <h2 className="font-Hind text-lg font-medium text-white md:text-xl lg:text-2xl">
                  {header1}
                </h2>
                <h1 className="primary-text-gradient py-2 font-montserrat text-3xl font-bold leading-snug md:text-4xl lg:text-5xl">
                  {header2}
                </h1>
                <p className="pb-4 font-Hind text-base font-light text-white/70 lg:pb-8 lg:text-lg">
                  {text}
                </p>
              </div>
              {/* Dinamično nalaganje ikone za gumb */}
              <PrimaryBtn icon={<BsTelephone />} text="Pokliči nas" />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Banner;
