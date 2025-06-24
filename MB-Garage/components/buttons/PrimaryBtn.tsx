import { motion } from "framer-motion";
import React from "react";

interface Props {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const PrimaryBtn = ({ icon, text, className }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 1 }}
      onClick={() => (window.location.href = "tel:+38640517788")}
      className={`group relative z-10 flex min-h-10 items-center justify-center gap-x-3 overflow-hidden rounded bg-[#317c4e] px-8 py-4 text-xl text-white duration-1000 hover:text-white md:min-h-12 lg:min-h-14 ${className}`}
    >
      <span className="absolute -left-3 -top-10 -z-10 size-56 origin-center scale-0 rounded-full bg-[#258f4e] transition-all duration-700 group-hover:scale-125 group-hover:duration-500"></span>
      <span className="absolute -left-3 -top-10 -z-10 size-56 origin-center scale-0 rounded-full bg-[#8ce0ae] transition-all duration-300 group-hover:scale-x-125 group-hover:duration-700"></span>
      <p className="font-montserrat text-base md:text-lg lg:text-xl">{text}</p>
      <span className="-rotate-3 pb-1 transition-all duration-300 group-hover:rotate-6">
        {icon}
      </span>
    </motion.button>
  );
};

export default PrimaryBtn;
