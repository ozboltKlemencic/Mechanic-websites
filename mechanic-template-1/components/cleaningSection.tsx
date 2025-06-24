import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";

import ContaktBox from "./navigation/contaktBox";

const CleaninigSection = () => {
  return (
    <div>
      <div className="relative flex h-[65vh] w-screen">
        <div className="size-full">
          <Image
            src="/images/banners/about.jpg"
            alt="Team discussing FAQs"
            layout="fill"
            className=" size-full object-cover"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
          <h2>Zakaj izbrati nas</h2>
          <p className="text-center">
            Vaše zadovoljstvo in varnost sta naša glavna cilja. Z najsodobnejšo
            opremo in tehnikami zagotavljamo, da bo vaše vozilo opremljeno s
            pnevmatikami, ki so idealne za vaše potrebe
          </p>
          <div className="rounded-lg bg-black px-4 py-2.5 ">
            <ContaktBox Icon={<BsTelephone />} text="123 123 123" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaninigSection;
