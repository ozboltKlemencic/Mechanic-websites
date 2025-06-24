import { motion } from "framer-motion";
import React from "react";
import { BsTelephone } from "react-icons/bs";

import PrimaryBtn from "./buttons/PrimaryBtn";

interface FeatureData {
  text: string;
  title: string;
  imageUrl: string;
}

interface Props {
  data: FeatureData;
}

const FeatureComponent = ({ data }: Props) => {
  const { text, imageUrl, title } = data;
  return (
    <section className="bg-gradient min-h-[50vh] px-3 py-16 md:p-8 lg:p-12 lg:py-24">
      <div className="mx-auto max-sm:w-[92%]  md:max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-x-16 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 items-center space-y-6"
          >
            <h2 className="text-left font-montserrat  text-2xl font-semibold text-black md:text-left md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className=" text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl">
              {text}
            </p>
            <PrimaryBtn text="Pokličite" icon={<BsTelephone />} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:flex-1"
          >
            <div className="aspect-square size-full">
              <div
                className="relative size-full overflow-hidden bg-cover bg-no-repeat md:rounded-md "
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
