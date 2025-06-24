"use client";

import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

interface Props {
  isMobileNav?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ isMobileNav, onClick }: Props) => {
  return (
    <>
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
          className="uppercase text-white transition-colors duration-300 hover:text-green-400"
          onClick={onClick}
        >
          Servis
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
          className="uppercase text-white transition-colors duration-300 hover:text-green-400"
          onClick={onClick}
        >
          Menjava Pnevmatik
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
          href={ROUTES.SERVIS_MENJALNIKOV}
          className="uppercase text-white transition-colors duration-300 hover:text-green-400"
          onClick={onClick}
        >
          Servis Menjalnikov
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
          href={ROUTES.POPRAVILA_PODVOZJA}
          className="uppercase text-white transition-colors duration-300 hover:text-green-400"
          onClick={onClick}
        >
          Popravila Podvozja
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
          href={ROUTES.SERVIS_HIBRIDNIH_VOZIL}
          className="uppercase text-white transition-colors duration-300 hover:text-green-400"
          onClick={onClick}
        >
          Servis Hibridnih Vozil
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
          className="uppercase text-white transition-colors duration-300 hover:text-green-400"
          onClick={onClick}
        >
          O Nas
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
