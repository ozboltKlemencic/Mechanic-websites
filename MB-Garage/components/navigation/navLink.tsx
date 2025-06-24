"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import ROUTES from "@/constants/routes";

interface Props {
  isMobileNav?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ isMobileNav, onClick }: Props) => {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <ul
      className={`${isMobileNav ? "flex w-full flex-col" : "flex flex-wrap gap-x-6 gap-y-3"} px-3 py-2 text-sm font-semibold md:font-medium lg:font-semibold`}
    >
      <li
        className={`${
          isMobileNav
            ? "w-full border-b border-white/20 px-8 py-6 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.HITRI_SERVICE}
          className={`text-base uppercase transition-colors duration-300 hover:text-green-400 lg:text-xl ${
            isActive(ROUTES.HITRI_SERVICE) ? "text-green-400" : "text-white"
          }`}
          onClick={onClick}
        >
          Hitri Servis
        </Link>
      </li>
      <li
        className={`${
          isMobileNav
            ? "w-full border-b border-white/20 px-8 py-6 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.MENJAVA_GUM}
          className={`text-base uppercase transition-colors duration-300 hover:text-green-400 lg:text-xl ${
            isActive(ROUTES.MENJAVA_GUM) ? "text-green-400" : "text-white"
          }`}
          onClick={onClick}
        >
          Menjava Gum
        </Link>
      </li>
      <li
        className={`${
          isMobileNav
            ? "w-full border-b border-white/20 px-8 py-6 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.CISTENJE_AVTA}
          className={`text-base uppercase transition-colors duration-300 hover:text-green-400 lg:text-xl ${
            isActive(ROUTES.CISTENJE_AVTA) ? "text-green-400" : "text-white"
          }`}
          onClick={onClick}
        >
          Čiščenje Avta
        </Link>
      </li>
      <li
        className={`${
          isMobileNav
            ? "w-full border-b border-white/20 px-8 py-6 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.CENIK}
          className={`text-base uppercase transition-colors duration-300 hover:text-green-400 lg:text-xl ${
            isActive(ROUTES.CENIK) ? "text-green-400" : "text-white"
          }`}
          onClick={onClick}
        >
          Cenik
        </Link>
      </li>
      <li
        className={`${
          isMobileNav
            ? "w-full border-b border-white/20 px-8 py-6 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.CONTACT.LINK}
          className={`text-base uppercase transition-colors duration-300 hover:text-green-400 lg:text-xl ${
            isActive(ROUTES.CONTACT.LINK) ? "text-green-400" : "text-white"
          }`}
          onClick={onClick}
        >
          Kontakt
        </Link>
      </li>
      <li
        className={`${
          isMobileNav
            ? "w-full border-b border-white/20 px-8 py-6 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.O_NAS}
          className={`text-base uppercase transition-colors duration-300 hover:text-green-400 lg:text-xl ${
            isActive(ROUTES.O_NAS) ? "text-green-400" : "text-white"
          }`}
          onClick={onClick}
        >
          O Nas
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
