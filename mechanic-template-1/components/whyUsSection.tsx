import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";

import PrimaryBtn from "./buttons/PrimaryBtn";

interface BannerData {
  text: string;
  title: string;
  imageUrl: string;
  alt: string;
}

interface Props {
  data: BannerData;
}

const WhyUsSection = ({ data }: Props) => {
  const { text, alt, title, imageUrl } = data;
  return (
    <section>
      <div className="relative  min-h-[800px] w-screen md:min-h-[70vh] md:py-96 lg:max-h-[1400px]">
        <div className="size-full">
          <Image
            src={imageUrl}
            alt={alt}
            layout="fill"
            className=" size-full object-cover"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 flex w-[92%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-8 md:w-full md:px-4 lg:w-[1100px]">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center font-montserrat text-2xl font-bold  text-white md:text-3xl lg:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center font-Hind text-base text-white/85 md:text-base lg:text-lg"
          >
            {text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <PrimaryBtn icon={<BsTelephone />} text="Poliči nas" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
