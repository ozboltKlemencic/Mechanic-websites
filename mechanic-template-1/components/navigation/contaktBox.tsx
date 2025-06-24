import Link from "next/link";
import React from "react";

interface ContaktBoxProps {
  Icon: React.ReactNode;
  text: string;
  telephone?: boolean;
  link: string;
  mail?: boolean;
}

const ContaktBox: React.FC<ContaktBoxProps> = ({
  Icon,
  text,
  link,
  mail = false,
  telephone = false,
}) => {
  return (
    <Link
      href={mail ? `mailto:${link}` : telephone ? `tel:+38640123456` : link}
      className="flex items-center gap-x-3"
    >
      <div className="text-primary md:text-sm lg:text-base">{Icon}</div>
      <span className="font-normal text-white transition-colors duration-300 hover:text-primary md:text-xs lg:text-sm">
        {text}
      </span>
    </Link>
  );
};

export default ContaktBox;
