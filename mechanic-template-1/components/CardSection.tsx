import { motion } from "framer-motion";
import React from "react";

import BorderBwithImage from "./cards/borderBwithImage";
const serviceItems = [
  {
    imageUrl: "/images/services/menjava-filtra-goriva.jpg",
    header1: "MENJAVA FILTRA GORIVA",
  },
  {
    imageUrl: "/images/services/menjava-kabinskega-filtra.jpg",
    header1: "MENJAVA KABINSKEGA FILTRA",
  },
  {
    imageUrl: "/images/services/menjava-olja.jpg",
    header1: "MENJAVA OLJA",
  },
  {
    imageUrl: "/images/services/menjava-zracnega-filtra.jpg",
    header1: "MENJAVA FILTRA GORIVA",
  },
];

const fadeInAnimationVariables = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: index * 0.3,
    },
  }),
};

const CardSection = () => {
  return (
    <div className="flex w-[92%]  flex-col flex-wrap gap-6  md:max-w-screen-xl md:flex-row">
      {serviceItems.map((service, index) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariables}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <BorderBwithImage
            imageUrl={service.imageUrl}
            header1={service.header1}
            headerShow
            imageShow
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CardSection;
