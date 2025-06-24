"use client";

import { motion } from "framer-motion";
import React from "react";

import Banner from "@/components/banner";
import ServiceTable from "@/components/table";
import BgSquare from "@/components/texts/BgSquare";
import { banners } from "@/constants/banners";
import { ServicePricing } from "@/constants/pricing";

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

const Cenik = () => {
  return (
    <div>
      <Banner data={banners.cenik} />

      {/* PRICING MENJAVA GUM */}
      <section
        className="flex w-screen flex-col items-center justify-center py-16"
        id="menjavagumcenik"
      >
        <motion.h1
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-montserrat text-2xl font-semibold text-black md:text-2xl lg:text-4xl"
        >
          <BgSquare>Premontaža pnevmatik</BgSquare> : cenik
        </motion.h1>
        <div className="flex h-auto  w-screen  flex-col items-center justify-center    md:flex-row md:gap-y-8 lg:w-[1280px] ">
          <div className="flex w-[95%]  flex-col flex-wrap items-start justify-center gap-8 md:w-full   md:flex-row ">
            {ServicePricing.menjavaGum.length > 0 ? (
              ServicePricing.menjavaGum.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariables}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="w-full  md:w-[400px] md:min-w-[300px] lg:w-[600px] lg:min-w-[500px]"
                >
                  <ServiceTable pricing={service.tabela} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500"></p>
            )}
          </div>
        </div>
      </section>

      {/* PRICING HITRI SERVIS 
      <section
        className="flex w-screen flex-col items-center justify-center py-16"
        id="hitriserviscenik"
      >
        <motion.h1
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-montserrat text-2xl font-semibold text-black md:text-2xl lg:text-4xl"
        >
          <BgSquare>Hitri servis</BgSquare> : cenik
        </motion.h1>
        <div className="flex h-auto  w-screen  flex-col items-center justify-center    md:flex-row md:gap-y-8 lg:w-[1280px] ">
          <div className="flex w-[95%]  flex-col flex-wrap items-start justify-center gap-8 md:w-full   md:flex-row ">
            {ServicePricing.hitriServis.length > 0 ? (
              ServicePricing.hitriServis.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariables}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="w-full  md:w-[400px] md:min-w-[300px] lg:w-[600px] lg:min-w-[500px]"
                >
                  <ServiceTable pricing={service.tabela} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500"></p>
            )}
          </div>
        </div>
      </section>
*/}

      {/* PRICING CISCENJE AVTOMOBILA */}
      <section
        className="flex w-screen flex-col items-center justify-center py-16"
        id="ciscenjeavtomobilacenik"
      >
        <motion.h1
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-montserrat text-2xl font-semibold text-black md:text-2xl lg:text-4xl"
        >
          <BgSquare>Hitri servis storitve</BgSquare> : cenik
        </motion.h1>
        <div className="flex h-auto  w-screen  flex-col items-center justify-center    md:flex-row md:gap-y-8 lg:w-[1280px] ">
          <div className="flex w-[95%]  flex-col flex-wrap items-start justify-center gap-8 md:w-full   md:flex-row ">
            {ServicePricing.hitriServis.length > 0 ? (
              ServicePricing.ciscenjeAvtomobila.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariables}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="w-full  md:w-[400px] md:min-w-[300px] lg:w-[600px] lg:min-w-[500px]"
                >
                  <ServiceTable pricing={service.tabela} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500"></p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cenik;
