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
    <ul className="flex flex-wrap gap-x-6 gap-y-3 font-semibold">
      <li
        className={`${
          isMobileNav
            ? "w-full border-b border-white/10 py-4 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.HITRI_SERVICE}
          className={`uppercase transition-colors duration-300 hover:text-green-400 ${
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
            ? "w-full border-b border-white/10 py-4 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.MENJAVA_GUM}
          className={`uppercase transition-colors duration-300 hover:text-green-400 ${
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
            ? "w-full border-b border-white/10 py-4 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.CISTENJE_AVTA}
          className={`uppercase transition-colors duration-300 hover:text-green-400 ${
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
            ? "w-full border-b border-white/10 py-4 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.CENIK}
          className={`uppercase transition-colors duration-300 hover:text-green-400 ${
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
            ? "w-full border-b border-white/10 py-4 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.CONTACT.LINK}
          className={`uppercase transition-colors duration-300 hover:text-green-400 ${
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
            ? "w-full border-b border-white/10 py-4 text-center"
            : "text-center"
        }`}
        role="none"
      >
        <Link
          href={ROUTES.O_NAS}
          className={`uppercase transition-colors duration-300 hover:text-green-400 ${
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
