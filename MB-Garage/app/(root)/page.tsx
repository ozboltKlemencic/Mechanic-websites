"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";

import Banner from "@/components/banner";
import GradientCard from "@/components/cards/gradientCard";
import ReviewCard from "@/components/cards/reviewCard";
import ServiceCard from "@/components/cards/serviceCard";
import WhyUsCard from "@/components/cards/whyUsCard";
import FAQ from "@/components/faq";
import FeatureComponent from "@/components/FeatureComponent";
import About from "@/components/home/about";
import UnderLine from "@/components/texts/UnderLine";
import { banners } from "@/constants/banners";
import { faqs } from "@/constants/faqs";
import { featureSection } from "@/constants/futureComponents";
import REVIEWS from "@/constants/reviews";
import ROUTES from "@/constants/routes";

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

const services = [
  {
    header: "HITRI SERVIS",
    description:
      "Menjava gum, popravila in vzdrževanje. Ponujamo hitri servis vozil z menjavo gum, popravili avtomobilov in vzdrževanjem vozil.",
    imgUrl: "/images/services/hitri-servis.webp",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/hitri-servis`,
    btnText: "Več o hitrem servisu",
  },
  {
    header: "MENJAVA GUM",
    description:
      "Nudimo menjavo gum in sezonsko premontažo. Če nimate svojih gum, jih lahko naročimo za vas po odličnih cenah.",
    imgUrl: "/images/services/menjava-gum.webp",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/menjava-gum`,
    btnText: "Več o menjavi gum",
  },
  {
    header: "DIAGNOSTIKA",
    description:
      "S natančno diagnostiko zagotavljamo mirno vožnjo in zmanjšamo tveganje za nepričakovane okvare vašega vozila.",
    imgUrl: "/images/services/diagnostika.webp",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/hitri-servis`,
    btnText: "Več o diagnostiki",
  },
  {
    header: "ČIŠČENJE AVTA",
    description:
      "Nudimo notranje in zunanje čiščenje vozil, vključno s pranjem, voskanjem in globinskim čiščenjem, da vaše vozilo zasije v popolni čistoči",
    imgUrl: "/images/services/ciscenje-avta.webp",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/ciscenje-avta`,
    btnText: "Več o čiščenju avta",
  },
];

const CardTexts = [
  {
    header: "Strankam Prijazne Cene",
    text: "pri nas ponujamo servisne storitve po prijaznih cenah, brez skritih stroškov. Nudimo pregledne cene za vse storitve, vključno z popravili vozil, menjavo olja, menjavo pnevmatik in drugimi avtoservisnimi storitvami.",
    imgUrl: "/images/icons/gear.png",
  },
  {
    header: "Hitra in Učinkovita Storitev",
    text: "V MB Garage vemo, kako pomembno je, da je avto čim prej spet na cesti. Zato poskrbimo za servis – brez izgube na kakovosti. Z moderno diagnostiko in izkušnjami delo opravimo, natančno in brez zapletov. Tako lahko vi brez skrbi nadaljujete svojo vožnjo..",
    imgUrl: "/images/icons/tire.png",
  },
  {
    header: "Kakovostni Rezervni Deli",
    text: "V MB Garage poskrbimo, da vaš avto dobi le najboljše. Na voljo imamo širok izbor kakovostnih rezervnih delov – tako originalnih kot preverjenih nadomestkov.Naši mehaniki vam glede na vozilo in način uporabe svetujejo, kateri deli so najbolj primerni, da bo avto deloval zanesljivo in dolgo časa. Ne delamo kompromisov pri kakovosti – ker vemo, da se dolgoročno najbolj splača.",
    imgUrl: "/images/icons/piston.png",
  },
  {
    header: "Diagnostična Orodja in Oprema",
    text: "Naša delavnica je opremljena z napredno diagnostično opremo, ki omogoča hitro in natančno odkrivanje napak na vašem vozilu. Tako lahko težave rešimo hitreje, z manj čakanja in večjo zanesljivostjo.",
    imgUrl: "/images/icons/car-oil.png",
  },
  {
    header: "Certifikati in Usposabljanja",
    text: "V MB Garage imamo izkušeno in strokovno ekipo, ki se redno izpopolnjuje na področju sodobne mehanike. Sledimo novostim v avtomobilski industriji in delamo po najnovejših standardih, kar potrjujejo tudi naši certifikati. Tako lahko zagotovimo kakovostno in zanesljivo storitev.",
    imgUrl: "/images/icons/tire.png",
  },
];

const fadeInAnimationVariables2 = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
};

const page = () => {
  return (
    <>
      {/* BANNER */}
      <Banner data={banners.domov} />

      {/* PARAGRAPH */}
      <section>
        <div className="mb-4 flex w-screen flex-col items-center justify-center pb-2 pt-16  md:pb-4 md:pt-20  lg:pb-10 lg:pt-32 ">
          <div className="flex w-[95%] flex-col items-center justify-center gap-y-4 md:mx-4 md:gap-y-6 lg:max-w-screen-xl lg:gap-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl"
            >
              Obseg <UnderLine>Storitev</UnderLine> v{" "}
              <strong className="font-semibold">našem avtoservisu</strong>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, x: 0 }}
              className=" text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
            >
              <strong className="primary-text-gradient">MB garage</strong> je
              avtoservis v okolici{" "}
              <strong className="primary-text-gradient">
                Bleda, Jesenic ali Radovljice
              </strong>{" "}
              in vam nudimo širok spekter storitev, od menjave olja do
              kompleksnih popravkov motorja, čiščenja avtomobila in
              detajliranja. Naši mehaniki so strokovnjaki za vse vrste popravkov
              in zagotavljajo vrhunski servis ter storitve.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <div className=" flex w-full items-center justify-center pb-20">
        <div className="z-20 h-auto  w-full gap-3  overflow-hidden rounded-md px-[2.5%]  md:mx-4 lg:max-w-[1440px]">
          <div className="  mt-4  flex  w-full items-center justify-center gap-4 max-md:flex-col max-md:justify-center md:flex-wrap md:px-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariables}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <ServiceCard
                  header={service.header}
                  imgUrl={service.imgUrl}
                  description={service.description}
                  btnText={service.btnText}
                  link={service.link}
                  Icon={<FaArrowRight className=" font-normal text-black/85" />}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section className="flex w-screen flex-col items-center justify-center bg-green-50/30  py-12  md:py-20 lg:py-32">
        <div className="flex w-[95%] flex-col items-center justify-center gap-y-4 md:mx-4 md:gap-y-6 lg:max-w-screen-xl lg:gap-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -5 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl"
          >
            Pregled <UnderLine>Cen storitev</UnderLine>v{" "}
            <strong className="font-semibold">našem</strong> avtoservisu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -5 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, x: 0 }}
            className=" text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
          >
            Naša politika je jasna: vedno boste seznanjeni s cenami za vse naše
            storitve, kot so menjava olja, popravilo motorja, kontakt in drugi
            postopki. Na ta način{" "}
            <span className="primary-text-gradient">
              omogočamo transparentnost
            </span>{" "}
            in zaupanje v naše storitve.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, x: 0 }}
            className=" mt-4 flex w-screen flex-col flex-wrap items-center justify-center gap-4 md:flex-row"
          >
            <GradientCard
              text="Menjava gum"
              link={`${ROUTES.MENJAVA_GUM}/#menjavagumcenik`}
            />
            <GradientCard
              text="Hitri servis"
              link={`${ROUTES.HITRI_SERVICE}/#hitriserviscenik`}
            />
            <GradientCard
              text="Čiščenje avta"
              link={`${ROUTES.CISTENJE_AVTA}/#ciscenjeavtacenik`}
            />
            <GradientCard text="Vsi ceniki" link={`${ROUTES.CENIK}`} />
          </motion.div>
        </div>
      </section>

      {/* PARAGRAPHS */}
      <section>
        <div className="flex w-screen flex-col items-center justify-center pb-10 pt-20  lg:pb-16  lg:pt-32">
          <div className="flex w-[95%] flex-col items-center justify-center gap-y-4 md:mx-4 md:gap-y-6 lg:max-w-screen-xl lg:gap-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl"
            >
              Prednosti Izbire <UnderLine> MB Garage</UnderLine>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -5 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
            >
              Izbira{" "}
              <span className="primary-text-gradient">MB Garage pomeni</span>{" "}
              izbiro zanesljivega in srčnega pristopa k servisu vašega vozila.
              Naša servisna delavnica v{" "}
              <span className="primary-text-gradient">
                Blejski Dobravi, tik ob Bledu in Bohinju
              </span>
              , ponuja hitro, natančno in prilagodljivo storitev tako za
              domačine kot tudi za turiste. Pri nas vas vedno pričaka mladi
              mehanik, ki svoje delo opravlja z veseljem in predanostjo. Nudimo
              konkurenčne cene, hiter odziv in prijazen stik. Ne glede na to,
              ali gre za{" "}
              <span className="primary-text-gradient">
                redni servis, menjavo pnevmatik ali manjše popravilo
              </span>{" "}
              – pri nas ste v dobrih rokah. Zaupajte svojemu vozilu – zaupajte
              MB Garage.
            </motion.p>
          </div>
        </div>

        {/* DOUBLE PARAGRAPH */}
        <div className="flex w-screen flex-col items-center justify-center pb-20 ">
          <div className="flex w-screen flex-col items-center justify-center gap-4 md:max-w-[1300px] md:flex-row md:items-start md:px-4 ">
            <div className="card-shadow-2 flex w-[95%] flex-col items-start justify-start gap-y-4 rounded-md border border-black/10 p-8 shadow-md transition-all duration-300 hover:translate-x-1 md:min-h-[440px] md:w-full lg:min-h-[340px]">
              <motion.h3
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-left font-montserrat text-xl font-semibold text-black md:text-2xl lg:text-3xl"
              >
                Ponudba Dodatnih Storitev
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, x: 0 }}
                className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
              >
                Poleg osnovnega popravila vozil ponujamo vam v{" "}
                <span className="primary-text-gradient">MB Garage</span>
                ponujamo tudi vrsto dodatnih storitev, ki poskrbijo za varno in
                brezskrbno vožnjo: ,{" "}
                <span className="primary-text-gradient">
                  Menjava in centriranje pnevmatik
                </span>{" "}
                (za osebna in SUV vozila) ,{" "}
                <span className="primary-text-gradient">
                  Popravilo pnevmatik{" "}
                </span>
                (injekcija ali radialna krpa) ,{" "}
                <span className="primary-text-gradient">Menjava ventilov</span>{" "}
                , <span className="primary-text-gradient">Menjava žarnic</span>{" "}
                (H4 in H7) ,{" "}
                <span className="primary-text-gradient">
                  Diagnostika vozila{" "}
                </span>
                ,{" "}
                <span className="primary-text-gradient">
                  {" "}
                  Mala servisna dela
                </span>
                Vsako storitev opravimo hitro, natančno in po dostopni ceni.
              </motion.p>
            </div>

            <div className="card-shadow-2 flex w-[95%]  flex-col items-start justify-start gap-y-4  rounded-md border border-black/10 p-8 shadow-md transition-all duration-300 hover:translate-x-1 md:min-h-[440px] md:w-full lg:min-h-[340px]">
              <motion.h3
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-left font-montserrat text-lg font-semibold text-black md:text-xl lg:text-2xl"
              >
                Menjava Gum in Centiranje Gum v Avtoservisu MB Garage
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, x: 0 }}
                className="text-left font-Hind text-base text-black/80 md:text-lg lg:text-xl"
              >
                Poskrbimo tudi za{" "}
                <span className="primary-text-gradient">centiranje koles</span>,
                ki zmanjšuje obrabo pnevmatik in povečuje udobje med vožnjo. Če
                opazite tresenje volana ali neenakomerno obrabo gum, je
                centriranje nujno. Za brezhibno delovanje vozila ponujamo tudi
                <span className="primary-text-gradient">menjavo ventilov</span>,
                ki so majhen, a ključen del varnosti pnevmatik.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* REVIEWS */}
      <section className="flex w-screen  flex-wrap items-center justify-center bg-black  py-32">
        <div className="flex w-[95%] flex-col items-center justify-center md:max-w-[1300px] ">
          <div className="mb-10 flex flex-col items-center justify-center gap-y-4 ">
            <h2 className="text-center font-montserrat text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
              Izjave strank
            </h2>
            <p className="text-center font-Hind text-base text-white/80 md:text-lg lg:text-xl">
              ta Avtoservis je zanesljiv partner za vse, ki želijo dolgo in
              brezskrbno vožnjo. Preverite izkušnje naših zadovoljnih strank, ki
              so izbrale naše mehanike blizu. Naše stranke so naša prioriteta.
              Stranke cenijo naše kvalitetno popravilo vozil, hitro storitev,
              diagnostika, in prijazne mehanike. Preverite naše ocene strank, ki
              potrjujejo visoko kakovost naših storitev.
            </p>
          </div>
          <div className=" relative flex h-auto w-[95vw] flex-col flex-wrap items-center justify-center gap-8  md:max-w-screen-xl  md:flex-row lg:gap-10 ">
            {REVIEWS.map((REVIEWS, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariables}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <ReviewCard
                  rating={REVIEWS.rating}
                  ImageUrl={REVIEWS.imageUrl}
                  review={REVIEWS.review}
                  name={REVIEWS.name}
                  surename={REVIEWS.surname}
                />
              </motion.div>
            ))}

            <motion.div
              variants={fadeInAnimationVariables2}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 "
            >
              <GiCarWheel className="hidden animate-spin-slow text-[230px] text-white/5 md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="flex w-screen flex-col items-center justify-center py-20 pt-28 ">
        <div className="flex w-[92%] flex-col items-center justify-center gap-y-4  md:mx-4 md:gap-y-6 lg:max-w-screen-xl lg:gap-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -5 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl"
          >
            <UnderLine>Nasveti</UnderLine> za Vzdrževanje Avtomobila
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -5 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center font-Hind text-base text-black/80 md:text-lg lg:text-xl"
          >
            Za dolgo življenjsko dobo vašega vozila redno izvajajte vzdrževanje
            avtomobila. Za več informacij o vzdrževanju vašega vozila ali za
            kontakt, se posvetujte z našimi strokovnjaki. Nudimo vam nasvete
            glede menjave olja, kontrole zavor in drugih ključnih postopkov.
          </motion.p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="my-20 flex h-auto w-screen flex-col items-center justify-center gap-y-4 md:gap-y-8">
        <h2 className="w-[90%]  text-center font-montserrat text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
          Zakaj izbrati MB Garage?
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

      {/* PARAGRAPH SECTION */}
      <FeatureComponent data={featureSection.domov[0]} />

      {/* FAQ */}
      <FAQ
        imgUrl="/images/services/tire-change/premontaza-pnevmatik.jpg"
        FAQs={faqs.doma}
        alt="Avtoservis MB Garage"
        title="Pogosta Vprašanja"
      />
    </>
  );
};

export default page;
