"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegPaperPlane, FaRegClock, FaPhone } from "react-icons/fa";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia";

import ROUTES from "@/constants/routes";

import ContaktBox from "./contaktBox";
import NavLinks from "./navLink";
import SocialIcon from "./socialIcon";
import PrimaryBtn from "../buttons/PrimaryBtn";

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
      // Prevent scrolling on body
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");

      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      // Prevent touch move events (for mobile)
      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault();
      };

      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });

      // Store the function to remove it later
      (
        document.body as HTMLElement & {
          _preventTouchMove?: (e: TouchEvent) => void;
          _scrollY?: number;
        }
      )._preventTouchMove = preventTouchMove;
      (
        document.body as HTMLElement & {
          _preventTouchMove?: (e: TouchEvent) => void;
          _scrollY?: number;
        }
      )._scrollY = scrollY;
    } else {
      // Restore scrolling
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");

      // Restore scroll position
      const scrollY =
        (
          document.body as HTMLElement & {
            _preventTouchMove?: (e: TouchEvent) => void;
            _scrollY?: number;
          }
        )._scrollY || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Remove touch event listener
      const preventTouchMove = (
        document.body as HTMLElement & {
          _preventTouchMove?: (e: TouchEvent) => void;
          _scrollY?: number;
        }
      )._preventTouchMove;
      if (preventTouchMove) {
        document.removeEventListener("touchmove", preventTouchMove);
        delete (
          document.body as HTMLElement & {
            _preventTouchMove?: (e: TouchEvent) => void;
            _scrollY?: number;
          }
        )._preventTouchMove;
        delete (
          document.body as HTMLElement & {
            _preventTouchMove?: (e: TouchEvent) => void;
            _scrollY?: number;
          }
        )._scrollY;
      }

      // Restore scroll position
      window.scrollTo(0, scrollY);
    }

    return () => {
      // Cleanup on unmount
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      const preventTouchMove = (
        document.body as HTMLElement & {
          _preventTouchMove?: (e: TouchEvent) => void;
          _scrollY?: number;
        }
      )._preventTouchMove;
      if (preventTouchMove) {
        document.removeEventListener("touchmove", preventTouchMove);
        delete (
          document.body as HTMLElement & {
            _preventTouchMove?: (e: TouchEvent) => void;
            _scrollY?: number;
          }
        )._preventTouchMove;
        delete (
          document.body as HTMLElement & {
            _preventTouchMove?: (e: TouchEvent) => void;
            _scrollY?: number;
          }
        )._scrollY;
      }
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
              text={ROUTES.CONTACT.PHONE}
              link={ROUTES.CONTACT.PHONE}
              telephone
            />
            <ContaktBox
              mail
              Icon={<FaRegPaperPlane />}
              text="beronja.miroslav32@gmail.com"
              link={ROUTES.CONTACT.EMAIL.replace("mailto:", "")}
            />
            <ContaktBox
              Icon={<FaRegClock />}
              text="Pon-Pet: 08.00-17.00"
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
                MB <span> garage</span>
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
            {!isMenuOpen ? (
              <IoMenuOutline className="text-4xl text-white transition-all duration-300" />
            ) : (
              <IoCloseOutline className="text-4xl text-white transition-all duration-300" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`fixed left-0 top-0 z-[10000] h-screen w-full bg-black transition-all duration-300 ${
          isMenuOpen
            ? "translate-y-0 pt-12 opacity-100 "
            : "-translate-y-full opacity-0"
        } flex flex-col`}
        aria-label="Mobile Navigation"
      >
        <div className="flex w-full flex-col px-2 pt-8">
          <ul className="flex w-full flex-col">
            <NavLinks isMobileNav onClick={handleMenuClose} />
          </ul>
        </div>

        <div className="mx-auto mb-4 mt-auto flex w-[90vw] items-center justify-center ">
          <PrimaryBtn
            icon={<FaPhone />}
            text="Pokliči nas"
            className="w-full"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
