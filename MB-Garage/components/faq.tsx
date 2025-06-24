"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

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

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  imgUrl: string;
  alt: string;
  FAQs: FAQItem[];
  title: string;
}

const FAQ = ({ imgUrl, FAQs, alt, title }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" flex w-screen items-center justify-center  bg-white bg-gradient-to-br py-12 md:p-8 md:py-28">
      <div className=" w-[92%] overflow-hidden rounded-2xl  md:max-w-screen-xl  ">
        <div className="flex min-h-[480px] w-full flex-col gap-x-16 md:min-h-[600px] lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" relative left-0 top-0  w-full overflow-hidden rounded-md lg:w-1/2"
          >
            {/* dddd */}
            <Image
              src={imgUrl}
              alt={alt}
              title={alt}
              layout="fill"
              loading="lazy"
              objectFit="cover"
              objectPosition="center"
              className="flex size-full items-center justify-center object-cover"
            />
          </motion.div>

          <div className="w-full  md:p-8 md:lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className=" pb-10 text-center font-montserrat text-2xl font-semibold text-black md:text-left md:text-3xl lg:text-4xl"
            >
              {title}
            </motion.h2>

            <div className="space-y-4">
              {FAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariables}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="mx-2 rounded-lg border shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    className="flex w-full items-center justify-between px-6 py-4 text-left focus:rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:ring-offset-2"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="  text-center font-montserrat text-lg font-medium text-black ">
                      {faq.question}
                    </span>
                    <IoIosArrowDown
                      className={`text-gray-400 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      size={24}
                    />
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="px-6 py-4 text-left font-Hind text-sm text-black/80 md:text-base ">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
