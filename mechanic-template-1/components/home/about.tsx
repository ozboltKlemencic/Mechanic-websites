"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";

import PrimaryBtn from "../buttons/PrimaryBtn";

const About = () => {
  return (
    <div className="mt-16 flex h-auto w-full flex-col items-center justify-center  md:mt-16 md:px-4">
      <div className="relative flex h-[50vh] w-screen items-center justify-center  overflow-hidden  md:h-[450px] md:w-screen ">
        <Image
          src="/images/banners/menjava-gum-2.jpg"
          alt="storitev"
          layout="fill"
          objectFit="cover"
          className="flex items-center justify-center"
        />
      </div>

      <div className=" flex flex-col flex-wrap items-center justify-center gap-x-20 gap-y-12 md:flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative flex h-auto min-h-[500px] w-[95vw] -translate-y-1/2 items-start justify-center overflow-hidden rounded-md bg-gray-900 px-8 py-16 md:h-auto md:w-[680px] lg:min-h-[570px]"
        >
          <div className="flex w-full flex-col gap-y-5 ">
            <h3 className="text-left font-montserrat text-2xl font-semibold text-gray-100 md:text-3xl lg:text-4xl">
              Kako Izbrati Primeren Avtoservis?
            </h3>
            <p className="text-left font-Hind text-base text-white/80 md:text-lg lg:text-xl">
              Pri izbiri avtoservisa je pomembno upoštevati strokovnost
              mehanikov, kot je mehanik Vrhnika, uporabo napredne tehnologije,
              kakovost rezervnih delov in celovit servis. Avtoservis Klemenčič v
              Vrhniki in Žirih nudi vse to in še več, saj se zavedamo, kako
              pomembno je, da vaš avto prejme najboljšo oskrbo, as Klemenčič
              prioritizes quality service. Ne glede na to, ali potrebujete
              popravilo vozil ali redno vzdrževanje, vam zagotavljamo visoko
              kakovost storitev, ki podaljšajo življenjsko dobo vašega vozila.
            </p>
            <div className="flex items-center justify-start gap-x-3 py-3">
              <PrimaryBtn icon={<BsTelephone />} text="Poliči nas" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative flex h-auto min-h-[500px] w-[95vw] -translate-y-1/2 items-start justify-center overflow-hidden  rounded-md bg-[#317c4e] bg-contain bg-right-bottom bg-no-repeat px-8 py-16 md:w-[680px] lg:min-h-[570px]"
          style={{ backgroundImage: `url(/images/mechanic-body.png)` }}
        >
          <div className="flex w-full flex-col gap-y-5">
            <h3 className="text-left font-montserrat text-2xl font-semibold text-gray-100 md:text-3xl lg:text-4xl">
              Uporaba Vrhunske Tehnologije
            </h3>
            <p className="text-left font-Hind text-base text-white/80 md:text-lg lg:text-xl">
              V Avtoservisu Klemenčič v Vrhniki in Žirih uporabljamo najnovejša
              diagnostična orodja in tehnologijo za analizo napak na vašem
              vozilu. Z napredno opremo za diagnostiko vozil hitro ugotovimo
              težave in izvedemo potrebna popravila. Naši mehaniki uporabljajo
              najnovejše naprave za hitro in natančno diagnostiko, kar
              zagotavlja hitre in učinkovite rešitve za vaše vozilo, saj je
              pravilna diagnostika ključnega pomena.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
