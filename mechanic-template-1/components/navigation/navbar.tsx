"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegPaperPlane, FaRegClock } from "react-icons/fa";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia";

import ROUTES from "@/constants/routes";

import ContaktBox from "./contaktBox";
import NavLinks from "./navLink";
import SocialIcon from "./socialIcon";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 144 * 2.8) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={`z-[100000] flex w-screen items-center justify-center border-b border-white/10 bg-black px-8 pt-[11px] transition-all duration-500 ease-in-out max-md:hidden md:h-16 `}
        style={{ transform: isSticky ? "translateY(0)" : "translateY(-10px)" }}
      >
        <div className="flex max-w-[1300px]  items-center justify-between md:w-[95%] lg:min-w-[85%]">
          <div className="flex gap-x-10">
            <ContaktBox
              Icon={<BsTelephone />}
              text="031 682 144"
              link={ROUTES.CONTACT.PHONE.replace("tel:", "")}
              telephone
            />
            <ContaktBox
              mail
              Icon={<FaRegPaperPlane />}
              text="info@asklemencic.si"
              link={ROUTES.CONTACT.EMAIL.replace("mailto:", "")}
            />
            <ContaktBox
              Icon={<FaRegClock />}
              text="Delovni čas: Po dogovoru"
              link="#"
            />
          </div>
          <div className="flex gap-x-2">
            <SocialIcon
              Icon={<LiaFacebookSquare />}
              link="https://www.facebook.com/ASM.Avtoservis.Mivsek/"
            />
            <SocialIcon
              Icon={<LiaInstagram />}
              link="https://www.instagram.com/obnova_motorjev/"
            />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`z-[100000] flex h-20 w-screen items-center justify-center  bg-black px-8 opacity-100 transition-all duration-500 ease-in-out md:h-16 lg:h-24 ${
          isSticky
            ? "fixed top-0 translate-y-0  opacity-100"
            : "relative pt-[10px] opacity-100 md:pt-0"
        }`}
        style={{
          transform: isSticky ? "translateY(0px)" : "translateY(-10px)",
        }}
      >
        <nav
          className="z-[100000] flex  w-screen max-w-[1300px] items-center justify-between  md:w-[95%] lg:min-w-[85%]"
          aria-label="Main Navigation"
        >
          <Link href={ROUTES.HOME} rel="canonical">
            <button
              onClick={handleMenuClose}
              className="flex items-center gap-x-2"
            >
              <Image
                src="/images/icons/logo.svg"
                width={105}
                height={40}
                alt="mechanic logo"
                className="ml-[-10px] mr-[-15px] h-[70px] w-[80px]  sm:h-[30px] sm:w-[80px] md:h-[40px] md:w-[60px] lg:h-[70px] lg:w-[120px]"
              />
              <span className="flex font-bold uppercase text-white md:gap-x-0 md:text-base  lg:gap-x-2 lg:text-xl">
                AS <span> Klemenčič</span>
              </span>
            </button>
          </Link>

          <div className="max-md:hidden">
            <ul
              className="min-lg:gap-x-3  flex md:gap-x-3 lg:gap-x-6 "
              role="menubar"
            >
              <NavLinks />
            </ul>
          </div>
          {/* Hamburger menu for mobile */}
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div
              className={`transition-opacity duration-300 ${isMenuOpen ? "hidden opacity-0" : "opacity-100"}`}
            >
              <IoMenuOutline className="text-4xl text-white" />
            </div>
            <div
              className={`transition-opacity duration-300 ${isMenuOpen ? "hidden opacity-0" : "opacity-100"}`}
            >
              <IoCloseOutline className="text-4xl text-white" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`fixed left-0 top-0 z-[10000] h-screen w-full bg-black opacity-0 transition-transform duration-300 ${
          isMenuOpen
            ? "translate-y-[4.5rem] opacity-100 lg:translate-y-24"
            : "-translate-y-full"
        } flex flex-col items-center`}
        aria-label="Mobile Navigation"
      >
        <ul className=" flex w-full flex-col gap-y-3 pt-2 text-lg font-normal md:pt-20">
          <NavLinks isMobileNav onClick={handleMenuClose} />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
