"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import Banner from "@/components/banner";
import WhyUsCard from "@/components/cards/whyUsCard";
import FAQ from "@/components/faq";
import MyMapComponent from "@/components/map";
import { banners } from "@/constants/banners";
import { faqs } from "@/constants/faqs";

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

const CardTexts = [
  {
    header: "Strankam Prijazne Cene",
    text: "pri nas ponujamo servisne storitve po prijaznih cenah, brez skritih stroškov. Nudimo pregledne cene za vse storitve, vključno z popravili vozil, menjavo olja, menjavo pnevmatik in drugimi avtoservisnimi storitvami.",
    imgUrl: "/images/icons/gear.png",
  },
  {
    header: "Hitra in Učinkovita Storitev",
    text: "pri nas se zavedamo, da je hitrost popravila vozil ključna za zadovoljstvo strank. Nudimo hiter servis, brez kompromisov v kakovosti. Z uporabo naprednih tehnologij, diagnostika in strokovno ekipo mehanikov poskrbimo, da boste hitro in brezskrbno nadaljevali svojo vožnjo.",
    imgUrl: "/images/icons/tire.png",
  },
  {
    header: "Kakovostni Rezervni Deli",
    text: "pri nas ponujamo širok spekter rezervnih delov, vključno z originalnimi in nadomestnimi deli. Glede na vaše potrebe vam naši mehaniki svetujejo, kateri deli so najbolj primerni za vaše vozilo, da zagotovimo dolgotrajno delovanje in visoko kakovost.",
    imgUrl: "/images/icons/piston.png",
  },
  {
    header: "Diagnostična Orodja in Oprema",
    text: "Naša delavnica je opremljena z vrhunskimi diagnostičnimi orodji, ki omogočajo hitro in natančno iskanje napak na vašem avtomobilu. To omogoča hiter servis z minimalnim čakanjem in večjo natančnostjo pri odkrivanju težav.",
    imgUrl: "/images/icons/car-oil.png",
  },
  {
    header: "Certifikati in Usposabljanja",
    text: "pri nas se ponašamo s strokovno usposobljeno ekipo, ki je redno izobraževalna na področju napredne mehanike. S pomočjo naših certifikatov zagotavljamo kakovostno storitev, ki je v skladu z najnovejšimi smernicami in tehnologijami v avtomobilski industriji.",
    imgUrl: "/images/icons/tire.png",
  },
];

const page = () => {
  return (
    <div>
      {/* BANNER */}
      <Banner data={banners.oNas} />

      {/* FAQ */}
      <FAQ
        title="Pogosta vprašaja"
        imgUrl="/images/feature-section/car-skoda.jpg"
        FAQs={faqs.oNas}
        alt="Avtoservis MB Garage"
      />

      {/* MAP */}
      <div className=" flex h-auto w-full items-center justify-center bg-green-100/20">
        <div className="relative flex size-full  flex-col items-center justify-center gap-x-16 py-20 md:w-[1220px] lg:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex w-[92vw] flex-col items-start justify-start md:mx-4 lg:w-1/2 "
          >
            <h1 className="pb-2 text-left font-montserrat text-3xl font-bold text-black/90 md:text-4xl">
              Kje se nahajamo?
            </h1>
            <Link href="https://maps.app.goo.gl/VGrjVjAx1p9EWSRT9">
              <address className="primary-text-gradient mb-2 font-Hind text-lg font-medium hover:underline">
                Blejska Dobrava 114, 4273 Blejska dobrava, Slovenija
              </address>
            </Link>
            <p className="mt-2 font-Hind text-lg text-gray-500">
              Nahajamo se na odlični lokaciji na Gorenjskem, blizu Bleda,
              Jesenic in Radovljice. Do nas enostavno dostopate z osebnim
              avtomobilom, zagotovljena pa so tudi brezplačna parkirna mesta.
              lokacija je primerna tako za voznike, ki prihajajo z osebnim
              avtomobilom, kot za tiste, ki uporabljajo javne prevoze.
              Zagotavljamo dovolj parkirnih mest za vaša vozila. Obiščite nas v
              avtoservisu za vrhunske storitve, kot so hitri servis, menjava
              gum, diagnostika vozil in čiščenje avtomobilov. Naša ekipa vam bo
              z veseljem pomagala pri ohranjanju vašega vozila v najboljšem
              stanju.
            </p>
            <p className="mt-2 font-Hind text-lg text-gray-500">
              Obiščite nas za visokokakovostne storitve in izdelke, ki ustrezajo
              vašim potrebam. Naša prijazna ekipa vam bo z veseljem pomagala!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="h-[500px] w-[95vw] md:mx-4 lg:w-1/2"
          >
            <MyMapComponent />
          </motion.div>
          {/* ANIMATION */}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="my-20 flex h-auto w-screen flex-col items-center justify-center gap-y-4 md:gap-y-8">
        <h2 className="w-[90%]  text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
          Zakaj izbrati avtoservis Klemenčič?
        </h2>
        <div className=" flex w-[95vw] flex-wrap items-center justify-center gap-3 md:max-w-screen-xl md:gap-8">
          {CardTexts.map((Cardtext, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariables}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <WhyUsCard
                header={Cardtext.header}
                text={Cardtext.text}
                imgUrl={Cardtext.imgUrl}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
