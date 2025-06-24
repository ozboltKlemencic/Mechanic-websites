"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import Banner from "@/components/banner";
import BorderBwithImage from "@/components/cards/borderBwithImage";
import FAQ from "@/components/faq";
import FeatureComponent from "@/components/FeatureComponent";
import ServiceTable from "@/components/table";
import BgSquare from "@/components/texts/BgSquare";
import UnderLine from "@/components/texts/UnderLine";
import WhyUsSection from "@/components/whyUsSection";
import { aboutUsSection } from "@/constants/aboutUsSection";
import { banners } from "@/constants/banners";
import { faqs } from "@/constants/faqs";
import { featureSection } from "@/constants/futureComponents";
import { ServicePricing } from "@/constants/pricing";

const services = [
  {
    imgurl: "/images/services/tire-change/premontaza-pnevmatik.jpg",
    header1: "PREMONTAŽA PNEVMATIK",
    text: "Izkušeni mehaniki opravijo premontažo hitro in natančno",
  },
  {
    imgurl: "/images/services/tire-change/svetovanje-pri-izbiri-gum.jpg",
    header1: "SVETOVANJE PRI IZBIRI PNEVMATIK",
    text: "Pomagamo vam izbrati najprimernejše pnevmatike za vaše vozilo",
  },
  {
    imgurl: "/images/services/tire-change/centriranje-gum.jpg",
    header1: "CENTRIRANJE PNEVMATIK",
    text: "Centriranje gum ob menjavi za stabilnost in enakomerno obrabo",
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

const MenjavaGum = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Funkcija za spreminjanje stanja
  const toggleHeight = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div>
      {/* BANNER */}
      <Banner data={banners.menjavaGum} />

      {/* PARAGRAPH */}
      <section>
        <div className="flex w-screen flex-col items-center justify-center pb-2 pt-16  md:pb-4 md:pt-20  lg:pb-10 lg:pt-32 ">
          <div className="flex w-[95%] flex-col items-center justify-center gap-y-4 md:mx-4 md:gap-y-6 lg:max-w-screen-xl lg:gap-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl"
            >
              Hitra
              <strong className="font-semibold">
                <UnderLine>menjava gum</UnderLine>
              </strong>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, x: 0 }}
              className=" text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
            >
              Dobro vzdrževane in pravilno nameščene pnevmatike so osnova varne
              vožnje. V MB Garage ponujamo kakovostne letne in zimske pnevmatike
              ter profesionalno menjavo in centriranje gum. Z natančno montažo
              in svetovanjem poskrbimo, da so vaše pnevmatike vedno v optimalnem
              stanju – ne glede na vreme ali cesto. Obiščite nas in se
              prepričajte, da vaš avto vozi varno v vseh razmerah.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CARD SECTION */}
      <section className="flex w-screen flex-col items-center justify-center pb-24 pt-6 ">
        <div className="flex w-[92%] flex-col items-center justify-center gap-y-10 md:mx-4  lg:max-w-[1440px]">
          <div className="mt-4 flex flex-wrap items-center  justify-center gap-6 md:max-w-screen-xl">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariables}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <BorderBwithImage
                  imageUrl={service.imgurl}
                  header1={service.header1}
                  text={service.text}
                  textShow
                  headerShow
                  imageShow
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TABLES */}
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

      <WhyUsSection data={aboutUsSection.menjavaGum} />

      <FeatureComponent data={featureSection.menjavaGum[0]} />

      {/* PARAGRAPHS */}
      <section className="relative">
        <div
          className={`flex ${
            isExpanded ? "h-auto" : "h-[800px]"
          } w-screen flex-col items-center justify-start overflow-hidden pb-10 pt-20  transition-all duration-300 lg:pb-16 lg:pt-32`}
        >
          <div
            className={`${isExpanded ? "hidden" : ""} absolute bottom-0 left-0 z-40 flex h-3/4 w-full items-end justify-center bg-gradient-to-t from-white to-transparent`}
          >
            <button onClick={toggleHeight}>
              <span className=" hover:primary-text-gradient   mb-4 px-4 py-2 pb-20 font-montserrat  text-lg font-medium text-black/80 transition-all duration-300 hover:text-black hover:underline">
                Preberi več
              </span>
            </button>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex w-[92%] flex-col items-center justify-center gap-y-4 pb-12 md:mx-4 md:gap-y-6 lg:max-w-screen-xl lg:gap-y-8">
              <motion.h2
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl"
              >
                <UnderLine>Izbira Pravih Pnevmatik</UnderLine> za Vaš Avtomobil
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
              >
                Izbira pravih pnevmatik za vaš avtomobil je ključnega pomena za
                varno in učinkovito vožnjo. Kakovostne pnevmatike, vključno z
                zimske gume, zagotavljajo boljši oprijem, krajšo zavorno pot in
                udobnejšo vožnjo, kar je še posebej pomembno, če se vozite po
                različnih vremenskih razmerah, kot so zimske razmere ali vroča
                poletja. V Žireh, Logatec, in Vrhniki vam v našem avtoservisu
                svetujemo pri izbiri najprimernejših pnevmatik, ki ustrezajo
                vašemu vozilu, vozniškim navadam in specifičnim vremenskim
                razmeram.
              </motion.p>
            </div>
          </div>

          {/* DOUBLE PARAGRAPH */}
          <div className="flex w-screen flex-col items-center justify-center pb-20 ">
            <div className="flex w-screen flex-col flex-wrap items-center justify-center gap-4 md:max-w-[1300px] md:flex-row md:items-start md:px-4 ">
              <div className="card-shadow-2 flex w-[95%] flex-col items-start justify-start gap-y-4 rounded-md border border-black/10 p-8 shadow-md transition-all duration-300 hover:translate-x-1 md:min-h-[440px] md:w-full lg:min-h-[530px] lg:w-[calc(50%-0.5rem)] lg:max-w-none ">
                <motion.h2
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-left font-montserrat text-xl font-semibold text-black md:text-2xl lg:text-3xl"
                >
                  Kdaj Zamenjati Letne Pnevmatike za Zimske?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Pravilna menjava gum, vključno z letnih pnevmatik za zimske
                  pnevmatike , ni le zakonska obveznost, ampak tudi pomemben
                  korak za zagotavljanje varnosti na cesti. Pri temperaturah pod
                  7 °C zimske pnevmatike zaradi svoje posebne sestave
                  zagotavljajo boljši oprijem. Naša ekipa strokovnjakov v avto
                  servisu , ki vključuje tudi našega avtomehanika, vam priporoča
                  redno vzdrževanje in servis avtomobilov ter da pnevmatike
                  zamenjate pravočasno, še posebej pred prvimi zimskimi
                  padavinami. V našem vulkanizerstvu v Vrhniki in Žireh
                  poskrbimo za hitro in strokovno menjavo gum , kar vam omogoča
                  brezskrbno vožnjo tudi v najzahtevnejših zimskih razmerah,
                  kjer je menjava gum posebej pomembna.
                </motion.p>
              </div>

              <div className="card-shadow-2 flex w-[95%] flex-col  items-start justify-start gap-y-4 rounded-md  border border-black/10 p-8 shadow-md transition-all duration-300 hover:translate-x-1 md:min-h-[440px] md:w-full lg:min-h-[530px] lg:w-[calc(50%-0.5rem)] lg:max-w-none">
                <motion.h2
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-left font-montserrat text-lg font-semibold text-black md:text-xl lg:text-2xl"
                >
                  Vrste Pnevmatik, Ki Jih Ponujamo
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Na voljo imamo široko izbiro pnevmatik , primernih za različne
                  vremenske razmere in tipe vozil: - Letne pnevmatike – Odlične
                  za vroča poletja in suhe ceste. - Zimske pnevmatike ali zimske
                  gume – Prilagojene nizkim temperaturam in zasneženim cestam. -
                  Celovite pnevmatike – Dobra izbira za vse, ki se želijo
                  izogniti sezonskim menjavam gum. V našem avto servisu ponujamo
                  tudi storitev servis avtomobilov , vzdrževanje, avtomehanik pa
                  vam bo podal strokovne nasvete o tem, kako izbrati prave
                  pnevmatike glede na specifikacije vozila in vaše vozne
                  potrebe.
                </motion.p>
              </div>

              <div className="card-shadow-2 flex w-[95%] flex-col items-start justify-start gap-y-4 rounded-md border border-black/10 p-8 shadow-md transition-all duration-300 hover:translate-x-1 md:min-h-[440px] md:w-full lg:min-h-[330px] ">
                <motion.h2
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-left font-montserrat text-lg font-semibold text-black md:text-xl lg:text-2xl"
                >
                  Kdaj Zamenjati Letne Pnevmatike za Zimske?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Pravilna menjava gum, vključno z letnih pnevmatik za zimske
                  pnevmatike , ni le zakonska obveznost, ampak tudi pomemben
                  korak za zagotavljanje varnosti na cesti. Pri temperaturah pod
                  7 °C zimske pnevmatike zaradi svoje posebne sestave
                  zagotavljajo boljši oprijem. Naša ekipa strokovnjakov v avto
                  servisu , ki vključuje tudi našega avtomehanika, vam priporoča
                  redno vzdrževanje in servis avtomobilov ter da pnevmatike
                  zamenjate pravočasno, še posebej pred prvimi zimskimi
                  padavinami. V našem vulkanizerstvu v Vrhniki in Žireh
                  poskrbimo za hitro in strokovno menjavo gum , kar vam omogoča
                  brezskrbno vožnjo tudi v najzahtevnejših zimskih razmerah,
                  kjer je menjava gum posebej pomembna.
                </motion.p>
              </div>
              <div className="card-shadow-2 flex w-[95%] flex-col items-start justify-start gap-y-4 rounded-md border border-black/10 p-8 shadow-md transition-all duration-300 hover:translate-x-1 md:min-h-[440px] md:w-full lg:min-h-[330px] ">
                <motion.h2
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-left font-montserrat text-lg font-semibold text-black md:text-xl lg:text-2xl"
                >
                  Kdaj Je Čas za Zamenjavo Gum?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Obstaja več znakov, da je čas za menjavo menjava gum za avto .
                  Najpogostejši razlogi so: - Sezonske spremembe – Menjava gum
                  vključuje prehod iz letnih na zimske pnevmatike in obratno. -
                  Obrabljenost profila – Če je globina profila manjša od 3 mm,
                  je treba pnevmatike zamenjati. - Poškodbe pnevmatik – Razpoke,
                  izbokline ali pnevmatska poškodba so znak za menjavo, kar
                  pomeni, da je potrebna menjava gum. Naš avtoservis v Žireh in
                  Vrhniki vam pomaga oceniti stanje vaših pnevmatik , razloži
                  menjava pnevmatik cena, vključno z menjavo gum, ter svetuje
                  najboljšo rešitev.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        imgUrl="/images/services/tire-change/premontaza-pnevmatik.jpg"
        FAQs={faqs.menjavaGum}
        alt="slika Pogosta vprašanja o menjavi gum"
        title="Pogosta Vprašanja o Menjavi Gum"
      />

      <FeatureComponent data={featureSection.menjavaGum[1]} />

      {/* PARAGRAPH */}
      <section className="pb-10">
        <div className="flex w-screen flex-col items-center justify-center pb-2 pt-16  md:pb-4 md:pt-20  lg:pb-10 lg:pt-32 ">
          <div className="flex w-[95%] flex-col items-center justify-center gap-y-4 md:mx-4 md:gap-y-6 lg:max-w-screen-xl lg:gap-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl"
            >
              Naše <UnderLine>Lokacija in Kontakt</UnderLine>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, x: 0 }}
              className=" text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
            >
              Naše storitve nudimo v bližini Bleda, Bohinja in Jesenic, kjer
              poskrbimo za celovito oskrbo vašega avtomobila. Poleg menjave gum
              in svetovanja pri izbiri pnevmatik vam ponujamo tudi: Za več
              informacij nas kontaktirajte – naš izkušeni avtomehanik vam bo z
              veseljem svetoval. Zaupajte nam svoj avtomobil. Poskrbeli bomo, da
              bo vedno varen, zanesljiv in pripravljen na vse razmere. Obiščite
              naš servis in prihranite čas, denar in skrbi – kakovostna storitev
              je pri nas vedno na prvem mestu!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, x: 0 }}
              className=" -mt-4 text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
            >
              Zaupajte nam svoj avtomobil in poskrbeli bomo, da bo vaša vožnja
              na cesti vedno varna in pripravljena na vse razmere. Z obiskom
              našega avtoservisa boste dobili kakovostne storitve in nasvete, ki
              vam bodo pomagali prihraniti čas in denar.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenjavaGum;
