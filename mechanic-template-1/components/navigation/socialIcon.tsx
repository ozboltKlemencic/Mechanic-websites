import Link from "next/link";
import React from "react";

interface ContaktBoxProps {
  Icon: React.ReactNode;
  link: string;
}

const SocialIcon: React.FC<ContaktBoxProps> = ({ Icon, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-x-3"
    >
      <div className="text-white transition-colors duration-300 hover:text-primary md:text-xl lg:text-2xl">
        {Icon}
      </div>
    </Link>
  );
};

export default SocialIcon;
