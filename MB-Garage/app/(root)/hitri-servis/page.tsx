"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import Banner from "@/components/banner";
import BorderBwithImage from "@/components/cards/borderBwithImage";
import FAQ from "@/components/faq";
import FeatureComponent from "@/components/FeatureComponent";
import ServiceTable from "@/components/table";
import UnderLine from "@/components/texts/UnderLine";
import { banners } from "@/constants/banners";
import { faqs } from "@/constants/faqs";
import { featureSection } from "@/constants/futureComponents";
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

const HitriServis = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Funkcija za spreminjanje stanja
  const toggleHeight = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div>
      {/* BANNER */}
      <Banner data={banners.HitriServis} />

      {/* CARDS SECTION */}
      <div className="flex w-screen items-center justify-center  py-20">
        <div className="flex  w-full flex-col  flex-wrap items-center justify-center gap-6 md:max-w-screen-xl md:flex-row">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariables}
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              custom={index}
              className="w-[95%]  md:w-auto"
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
      </div>

      <FeatureComponent data={featureSection.HitriServis[0]} />

      {/* PRICING TABLES */}
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
          Hitri servis vozil: Cenik
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

      {/* FAQ */}
      <FAQ
        imgUrl="/images/feature-section/car-skoda.jpg"
        FAQs={faqs.hitriServis}
        alt="Avtoservis MB Garage"
        title="Hitri servis - pogosta vprašanja"
      />

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
                Naročite se na <UnderLine>hitri servis</UnderLine>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
              >
                Za hitri servis se lahko preprosto naročite preko telefona ali
                spletne strani. Naročanje je hitro, postopek pa udoben in
                brezskrbni. Poskrbite za svoje vozilo in ga pripeljite na
                pregled, kjer bomo izvedli vse potrebne storitve, kot so
                priprava avtomobila na tehnični pregled, menjava olja in
                čistilcev, menjava oljnega filtra, menjava zračnega filtra,
                menjava žarnic, menjava akumulatorja, menjavo akomulatorja,
                menjava sklopk, menjava kabinskega filtra, menjava brisalcev,
                menjava zavor, menjava filtra goriva in diagnostika vozila. Naš
                cilj je, da vam zagotovimo hitro in učinkovito storitev.
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
                  Akcija Hitri servis vozila
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Izkoristite naše posebne akcije za hitri servis in redni
                  servis ter poskrbite za svoje vozilo po dostopnih cenah.
                  Nudimo akcijske pakete, ki vključujejo vzdrževanje, menjavo
                  filtra goriva, menjavo oljnega filtra, pregled tekočin in
                  menjavo zavor. Naša ekipa vam zagotavlja kakovostno in hitro
                  storitev po konkurenčnih cenah. Poskrbite za svoje vozilo in
                  izkoristite ugodne akcije za vse vrste servisnih storitev.
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
                  Kako poteka hitri servis?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Hitri servis je storitev, ki omogoča hitro in učinkovito
                  servisiranje ter nego vašega vozila.Pri nas vam ponujamo širok
                  spekter hitrih servisnih storitev. Naša ekipa avtomehanikov
                  vam zagotavlja visoko kakovost storitev brez dolgega čakanja.
                  Nudimo menjavo motornega olja, pregled vozila, menjava oljnega
                  filtra, menjava zračnega filtra, menjavo kabinskega filtra,
                  menjavo brisalcev, menjava akomulatorja, menjava filtra
                  goriva, nujna popravila, vzdrževanje, popravilo in priprava
                  avtomobila na tehnični pregled. Vse storitve so izvedene hitro
                  in strokovno, tako da boste lahko hitro nadaljevali svojo
                  vožnjo.
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
                  Hitri servis za vaše vozilo – hitro, kakovostno in brez
                  čakalnih vrst
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Kaj je hitri servis? Hitri servis vozila je zasnovan za hitro
                  in kakovostno izvedbo osnovnih vzdrževalnih del in manjših
                  popravil. Z našimi dolgoletnimi izkušnjami in strokovnim
                  znanjem poskrbimo za brezhibno stanje vašega vozila, hkrati pa
                  preprečimo večje okvare, ki bi lahko nastale zaradi
                  zanemarjanja drobnih napak. Najboljša novica? Hitri servis pri
                  nas poteka brez čakalnih vrst, delo pa je opravljeno takoj.
                  Upoštevamo priporočila proizvajalca vašega avtomobila, zato
                  priporočamo redno izvajanje servisa enkrat letno ali po
                  prevoženih 15.000 do 30.000 kilometrov, odvisno od navodil
                  proizvajalca. Naročite na hitri servis še danes in omogočite
                  svojemu vozilu vrhunsko oskrbo!
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
                  Zakaj izbrati naš hitri servis blizu Žiri | Vrhnike | Logatca?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
                >
                  Hitro, ugodno in strokovno V naši mehanični delavnici vam
                  nudimo celovito storitev hitrega servisa, ki vključuje:
                  zamenjavo motornega olja, menjavo filtrov (zračni, oljni,
                  kabinski in gorivni filter), uporabo kakovostnih in
                  preverjenih nadomestnih delov, prijazno svetovanje glede
                  nadaljnjega vzdrževanja vašega vozila. Naš hitri servis je
                  primeren za vse vrste osebnih vozil. Z našo pomočjo bo vaše
                  vozilo vedno pripravljeno na varno in udobno vožnjo, ne glede
                  na razdaljo. Poleg kakovostnega dela se trudimo tudi za vaše
                  zadovoljstvo z ugodnimi cenami in hitro izvedbo storitve.
                  Zaupajte strokovnjakom in poskrbite, da bo vaš jekleni
                  konjiček v odličnem stanju. Pravočasno vzdrževanje pomeni manj
                  skrbi in manjše stroške v prihodnosti. Kontaktirajte nas za
                  hitri servis Ne odlašajte – rezervirajte svoj termin za hitri
                  servis pri nas še danes! Prepričajte se, zakaj smo prva izbira
                  za hitri servis. Poskrbeli bomo, da bo vaše vozilo
                  pripravljeno na vsako pot. Vaše zadovoljstvo in brezhibno
                  delovanje vozila sta naša prioriteta!
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HitriServis;
