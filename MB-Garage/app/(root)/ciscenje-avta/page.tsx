"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import Banner from "@/components/banner";
import CarCleaning from "@/components/carCleaning";
import BorderBwithImage from "@/components/cards/borderBwithImage";
import FeatureComponent from "@/components/FeatureComponent";
// import ServiceTable from "@/components/table";
import BgSquare from "@/components/texts/BgSquare";
import UnderLine from "@/components/texts/UnderLine";
import { banners } from "@/constants/banners";
import { featureSection } from "@/constants/futureComponents";
// import { ServicePricing } from "@/constants/pricing";

const cleaningSteps = [
  {
    step: "01",
    title: "Priprava",
    description:
      "Vozilo najprej temeljito speremo z vodo, kar je del procesa ciscenje avta po zimi, in uporabimo posebno čistilno raztopino za odstranjevanje trdovratne umazanije in insektov, ki jo pustimo delovati nekaj minut.",
    imgUrl: "/images/services/cleaning/priprava-avta-za-pranje.jpg",
  },
  {
    step: "02",
    title: "Skrbno pranje",
    description:
      "Po pripravi vozilo skrbno operemo z vrhunskimi čistilnimi sredstvi in nežnimi gobicami za temeljito ročno pranje avtomobila, ročno čiščenje in avto detajliranje, da odstranimo vse ostanke umazanije in zaščitimo lak, pri tem pa je avtomobilska nega ključnega pomena.",
    imgUrl: "/images/services/cleaning/pranje-avta.jpg",
  },
  {
    step: "03",
    title: "Pihanje in sušenje",
    description:
      "Po zunanje pranje avtomobila pihamo vsa območja zračnim curkom in nato vozilo skrbno posušimo, da preprečimo madeže in ohranimo sijaj, pri tem pa izvedemo še čiščenje avtomobilskih platišč.",
    imgUrl: "/images/services/cleaning/temeljito-ciscenje-avta.jpg",
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

const carCleaningServices = [
  {
    imageUrl: "/images/services/cleaning/zunanje-ciscenje-avta.jpg",
    header1: "ZUNANJE ČIŠČENJE AVTOMOBILA",
    text: "Očistimo in zaščitimo karoserijo, platišča in stekla, izboljšamo videz in vzdržljivost vašega avtomobila.",
    textShow: true,
    headerShow: true,
    imageShow: true,
  },
  {
    imageUrl: "/images/services/cleaning/notranje-ciscenje-avta.jpg",
    header1: "NOTRANJE ČIŠČENJE AVTOMOBILA",
    text: "Popolno čiščenje notranjosti za prijetnejše in zdravju bolj prijazno vozno okolje.",
    textShow: true,
    headerShow: true,
    imageShow: true,
  },
  {
    imageUrl: "/images/services/cleaning/globinsko-ciscenje-avta.jpg",
    header1: "GLOBINSKO ČIŠČENJE AVTOMOBILA",
    text: "Povrnemo svežino in čistost, za občutek novega vozila.",
    textShow: true,
    headerShow: true,
    imageShow: true,
  },
];

const CiscenjeAvta = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Funkcija za spreminjanje stanja
  const toggleHeight = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div>
      {/* BANNER */}
      <Banner data={banners.ciscenjeAvta} />

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
              <strong className="font-semibold">
                <UnderLine>Čiščenje avtomobila</UnderLine>- hitro ter ugodno
              </strong>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, x: 0 }}
              className=" text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
            >
              Pri vaši avtomehanični delavnici , ponujamo vrhunske storitve za
              ciscenje avtomobila, tudi za tisto zahtevnejše ciscenje, kot je
              ciscenje avtomobila, ki povrne vozilu popoln videz. Naša ekipa
              strokovnjakov poskrbi za notranje in zunanje ciscenje vozil, da
              vašemu vozilu povrnemo sijaj in svežino s celovitim čiscenje
              avtomobila, vključno s čiščenjem vozila ter storitvijo globinsko
              čiščenje. Z uporabo kakovostnih čistilnih sredstev, napredne
              opreme ter skrbnega pristopa vam zagotavljamo dolgotrajno zaščito
              in izboljšanje videza vašega avtomobila, vključno s storitvijo
              ciscenje avta po zimi.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CARD SECTION */}
      <section className="flex w-screen flex-col items-center justify-center pb-24 pt-6 ">
        <div className="flex w-[92%] flex-col items-center justify-center gap-y-10 md:mx-4  lg:max-w-[1440px]">
          <div className="mt-4 flex flex-wrap items-center  justify-center gap-6 md:max-w-screen-xl">
            {carCleaningServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariables}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <BorderBwithImage
                  imageUrl={service.imageUrl}
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

      {/* PRICING TABLES 
      <section
        className="flex w-screen flex-col items-center justify-center py-16"
        id="ciscenjeavtacenik"
      >
        <motion.h1
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-montserrat text-2xl font-semibold text-black md:text-2xl lg:text-4xl"
        >
          <BgSquare>Čiščenje avtomobila</BgSquare> : cenik
        </motion.h1>
        <div className="flex h-auto  w-screen  flex-col items-center justify-center    md:flex-row md:gap-y-8 lg:w-[1280px] ">
          <div className="flex w-[95%]  flex-col flex-wrap items-start justify-center gap-8 md:w-full   md:flex-row ">
            {ServicePricing.ciscenjeAvtomobila.length > 0 ? (
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
*/}
      {/* GUIDE */}
      <motion.h1
        initial={{ opacity: 0, x: -5 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="pb-12 pt-16 text-center font-montserrat text-4xl font-semibold text-black"
      >
        Kako poteka <BgSquare>čiščenje avta?</BgSquare>
      </motion.h1>
      <div className="pb-20">
        <CarCleaning cleaningSteps={cleaningSteps} />
      </div>

      <FeatureComponent data={featureSection.ciscenjeAvta[0]} />

      {/* PARAGRAPHS */}
      <section className="relative my-16">
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
                Zunanje in notranje <UnderLine>čiscenje avtomobila</UnderLine>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
              >
                Naša storitev ciscenja avtomobila vključuje celovito nego vašega
                vozila, tako znotraj kot zunaj, vključno s ciscenjem notranjosti
                avtomobila s profesionalno opremo, posebnimi ponudbami za
                ciscenje klimatske naprave v avtu, avto detajliranje, ciscenje
                avta s paro, ročno pranje avtomobila in ročno čiščenje, z
                dodatno storitvijo čiščenje avta po zimi. Pri nas boste deležni
                temeljitega ciscenja sedežev, vključno s specializiranim
                ciscenje sedezev in odstranjevanje madežev z avtomobilskih
                sedežev, preprog, ciscenjem avtomobilskih preprog, ciscenjem
                avto preprog, armaturne plošče ter odstranitve madežev in
                neprijetnih vonjav iz notranjosti. Z zunanjim ciscenjem se
                posvetimo pranju karoserije, poliranju, voskanju in ciscenju
                platišč, da vašemu vozilu povrnemo sijaj. Z uporabo napredne
                tehnologije in varnih čistilnih sredstev v našem avto servisu
                zagotavljamo, da vaše vozilo izgleda kot novo in ostane
                zaščiteno pred zunanjimi vplivi.
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
                  ZUNANJE CISCENJE AVTOMOBILA – Očistimo in Zaščitimo Vaš Avto
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Naša storitev zunanjega ciscenja vključuje poliranje
                  avtomobila: - Pranje karoserije in odstranjevanje trdovratne
                  umazanije. - Profesionalno poliranje za povrnitev sijaja. -
                  Voskanje za zaščito laka. - Čiščenje avtomobilskih platišč,
                  kar vključuje tudi čiščenje avtomobilskih platišč. - Ciscenje
                  stekel za boljšo vidljivost. Vse to izboljša videz vašega
                  vozila ter pomaga pri ohranjanju kakovosti in trajnosti
                  avtomobila.
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
                  Globinsko Ciscenje Avtomobila – Povrnite Svežino in Cistost
                  Svojega Vozila
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Globinsko ciscenje, vključno s ciscenjem notranjosti
                  avtomobila s profesionalno opremo, čiščenje avtomobilskih
                  platišč, čiščenja avtomobila s paro, vključuje podrobno
                  ciscenje vseh notranjih površin, odstranjevanje trdovratnih
                  madežev ter odstranjevanje madežev z avtomobilskih sedežev za
                  obnovo svežine vašega avtomobila. Z globinskim ciscenjem
                  preprog, sedežev in drugih površin se povrne občutek novega
                  vozila.
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
                  NOTRANJE CISCENJE AVTOMOBILA – Svežina in Cistoča Znotraj
                  Vašega Vozila
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Popolno notranje ciscenje, ki vključuje ročno čiščenje,
                  obsega: - Ciscenje in pranje sedežev, vključno s ciscenje
                  sedezev, čiščenje vozila avtomobilskih preprog in armaturne
                  plošče ter ciscenje avto preprog. - Odstranitev neprijetnih
                  vonjav. - Globinsko čiščenje preprog in usnjenih sedežev. Naše
                  čiscenje, vključno z čiscenje avtomobila , notranje čiscenje,
                  zunanje pranje avtomobila, ročno pranje avtomobila, poliranje
                  avtomobila, čiščenje klimatske naprave v avtu, čiščenje avta
                  po zimi, avtomobilska nega in storitve avto servisa, poskrbi
                  za udobno in zdravo vozno okolje, ki je pomembno za vaše dobro
                  počutje med vožnjo.
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
                  Zakaj Izbrati Ciscenje Avtomobila v MB Garage?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Strokovnost: Naša ekipa ima dolgoletne izkušnje in uporablja
                  najboljšo opremo za čiščenje vozila. - Visoka kakovost: Z
                  uporabo vrhunskih čistilnih sredstev in napredne tehnologije
                  zagotavljamo najboljše rezultate. - Dostopne cene: Naše
                  storitve so cenovno ugodne, brez kompromisov v kakovosti. -
                  Lokalna prisotnost: Na voljo smo vam v delavnici, kjer boste
                  vedno dobro poskrbljeni, vključno s storitvijo čiščenje
                  avtomobila. Poskrbite za vaš avto z uporabo storitev avto
                  servis in uživajte v čisti in prijetni vožnji, ki vključuje
                  tudi čiščenja avtomobila!
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CiscenjeAvta;
