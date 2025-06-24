import { motion } from "framer-motion";
import React from "react";

interface StepsArray {
  step: string;
  title: string;
  description: string;
  imgUrl: string;
}

interface Props {
  cleaningSteps: StepsArray[];
}

const CarCleaning = ({ cleaningSteps }: Props) => {
  return (
    <div>
      <div className=" flex h-auto w-screen flex-col md:h-[80vh] md:flex-row">
        {cleaningSteps.map((step, index) => (
          <div
            className="cleaning-gradient relative h-[700px]  w-full overflow-hidden md:h-full md:w-1/3"
            key={index}
          >
            <div
              className="size-full scale-110 bg-cover bg-center opacity-80 transition-all duration-700 hover:scale-100"
              style={{
                backgroundImage: `url(${step.imgUrl})`,
              }}
            ></div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="pointer-events-none absolute bottom-0 left-0 flex h-[400px] flex-col items-start justify-start gap-y-6 p-5 pb-10  md:p-3 lg:p-6"
            >
              <span className="primary-text-gradient w-full border-b-2 border-gray-500 pb-8 font-montserrat text-5xl font-bold lg:text-6xl">
                {step.step}
              </span>
              <h3 className="font-montserrat text-xl font-semibold text-white lg:text-3xl">
                {step.title}
              </h3>
              <p className="text-left font-Hind text-lg text-white/90 md:text-base lg:text-xl">
                {step.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCleaning;
