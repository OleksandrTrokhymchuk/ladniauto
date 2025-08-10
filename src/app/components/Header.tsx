"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";

import ladniAutoLogoNoText from "../../images/Logopng-for-header.png";
import ladniAutoLogo from "../../images/Logopng.png";
import phoneIcon from "@/images/phone-icon-for-header2.png";

import CallModal from "./CallModal/CallModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Послуги", href: "services" },
    { name: "Кейси", href: "/" },
    { name: "Про нас", href: "/" },
    { name: "Блог", href: "/" },
    { name: "Контакти", href: "/" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("header");

    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      const timeoutId = setTimeout(() => {
        setIsPulsing(false);
      }, 700);

      return () => clearTimeout(timeoutId);
    }, 10000);
    return () => clearInterval(pulseInterval);
  }, []);

  //   useEffect(() => {
  //     if (isMenuOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "";
  //     }
  //     return () => {
  //       document.body.style.overflow = "";
  //     };
  //   }, [isMenuOpen]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToTop: MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <header
        className={`
                z-10
                fixed top-0 w-full
                bg-project-blue
                ${
                  scrolled
                    ? "vsm:py-1 lg:py-1.5 shadow-lg opacity-95"
                    : "lg:py-3 vsm:py-2 shadow-md"
                }
                ${isMenuOpen ? "shadow-none" : ""}
                text-project-white
                transition-all duration-700 ease-in-out backdrop-blur-sm
                target:`}
      >
        <div className="container mx-auto custom-container flex items-center">
          <Link
            href="/"
            className={`hidden md:flex items-center justify-center md:mr-5 xl:mr-8 transition-opacity`}
            onClick={scrollToTop}
          >
            <div
              className={`flex flex-col transition-all duration-700 max-w-[140px]`}
            >
              <Image
                src={ladniAutoLogoNoText}
                alt="Ladni Auto Logo"
                width={ladniAutoLogoNoText.width}
                height={ladniAutoLogoNoText.height}
                className={`object-contain`}
                priority
              />
              <div className="mt-1 font-bicubik tracking-[0.285em] text-center text-[0.8rem] font-extralight leading-none">
                <p className="mb-0.5">Ladni Auto</p>
                <p className="text-[0.6rem]">ІЗ США</p>
              </div>
            </div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center md:space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <p
                    onClick={() => {
                      scrollToSection(item.href);
                    }}
                    className={`
                        md:text-base md1:text-lg xl:text-xl
                        px-2 py-2 relative block
                        hover-supported:hover:cursor-pointer
                        transition-all duration-300 ease-in-out font-medium text-gray-100 hover:text-project-white hover:after:scale-x-100
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.25 after:bg-project-white after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-out
                    `}
                  >
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`hidden md:flex items-center md:space-x-4 xl:space-x-6 ml-auto`}
          >
            <div
              className={`w-px bg-project-white opacity-50 ${
                scrolled ? "h-16" : "h-[4.5rem]"
              } transition-all duration-700`}
            ></div>
            <div className="flex md:flex-col lg:flex-row items-center md:items-start lg:items-center md:space-y-2 lg:space-y-0 lg:space-x-6">
              <a
                href="tel:+380667319809"
                className={`md:text-xl xl:text-2xl font-bold whitespace-nowrap mx-auto`}
              >
                +38 066 731 98 09
              </a>
              <button
                className={`bg-project-white lg:text-lg md:text-base hover:bg-gray-300 text-project-blue font-bold  rounded-full
                                    py-2 md:px-5 xl:px-6
                                    transition-all duration-700 transform hover:scale-105 active:scale-95 whitespace-nowrap
                                    ${
                                      isPulsing && !isModalOpen
                                        ? "scale-105 brightness-125 drop-shadow-lg rotate-1"
                                        : ""
                                    }
                              `}
                onClick={() => setIsModalOpen(true)}
              >
                Зателефонуйте мені
              </button>
            </div>
          </div>

          <div
            className={`md:hidden w-full ${
              isMenuOpen ? "pointer-events-none" : ""
            }`}
          >
            <div className="flex items-center vsm:gap-x-3 vsm1:gap-x-5 justify-between relative mr-11">
              <Link
                href="/"
                className={`md:hidden flex items-center transition-opacity`}
                onClick={scrollToTop}
              >
                <div
                  className={`flex flex-col transition-all duration-700 vsm:max-w-24 vsm1:max-w-28`}
                >
                  <Image
                    src={ladniAutoLogoNoText}
                    alt="Ladni Auto Logo"
                    width={ladniAutoLogoNoText.width}
                    height={ladniAutoLogoNoText.height}
                    className={`object-contain`}
                    priority
                  />
                  <div className="mt-1 font-bicubik tracking-[0.285em] text-center text-[0.6rem] font-extralight leading-none">
                    <p className="mb-0.5">Ladni Auto</p>
                    <p className="text-[0.6rem]">ІЗ США</p>
                  </div>
                </div>
              </Link>
              <div
                className={`
                                bg-project-white py-1 rounded-full relative
                                vsm:px-1 vsm1:px-1.5 vsm15:px-2 vsm2:px-5 vsm3:px-7 vsm4:px-9
                                flex gap-x-1
                                `}
              >
                <a
                  href="tel:+380667319809"
                  className={`text-project-blue font-bold
                                        vsm:text-base vsm1:text-lg vsm15:text-lg1 vsm2:text-xl vsm3:text-2xl
                                    `}
                >
                  066 731 98 09
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <div
                  className={`max-h-14 max-w-14 duration-700
                                        ${
                                          isPulsing && !isModalOpen
                                            ? "scale-50 rotate-12"
                                            : ""
                                        }
                                        active:opacity-70
                                        block md:hidden
                                        `}
                  onClick={() => {
                    !isMenuOpen && setIsModalOpen(true);
                  }}
                >
                  <Image src={phoneIcon} alt="phone icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <button
        onClick={toggleMenu}
        className={`z-50 md:hidden flex flex-col justify-around w-8 h-6 bg-transparent border-none cursor-pointer p-0 focus:outline-none fixed right-2
                    transition-all duration-700
                    ${scrolled ? "top-8" : "top-9"}
                    `}
        aria-label="Toggle menu"
      >
        <span
          className={`
                    w-8 h-[1px] bg-project-white
                    transition-all duration-500 ease-in-out
                    ${isMenuOpen ? "rotate-45 translate-y-2" : ""}
                `}
        ></span>
        <span
          className={`
                    w-8 h-[1px] bg-project-white
                    transition-all duration-200 ease-in-out
                    ${isMenuOpen ? "opacity-0" : ""}
                `}
        ></span>
        <span
          className={`
                    w-8 h-[1px] bg-project-white
                    transition-all duration-500 ease-in-out
                    ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}
                `}
        ></span>
      </button>

      <div
        className={`
                fixed top-0 left-0 h-full w-full z-40
                transition-opacity duration-500 ease-in-out
                ${
                  isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }
                flex justify-center items-start
            `}
        onClick={toggleMenu}
      >
        <nav
          className={` w-full h-full bg-project-blue transform transition-transform duration-500 ease-in-out  p-8
                    ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
                `}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={`flex flex-col space-y-5 pb-7 text-center pt-10`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <p
                  onClick={() => {
                    toggleMenu();
                    scrollToSection(item.href);
                  }}
                  className={`text-2xl font-bold text-project-white block py-2 `}
                >
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="w-[80%] h-px bg-opacity-50 bg-project-white mx-auto"></div>
          <div
            className=" pt-6  flex items-center vsm:justify-center msm:justify-around vsm:flex-col msm:flex-row vsm: gap-y-5"
          >
            <a
              href="tel:+380667319809"
              className="text-2xl font-bold text-project-white block transition-colors duration-300"
            >
              +38 066 731 98 09
            </a>
            <button
              className={`bg-project-white text-project-blue font-bold py-2 px-4 rounded-full w-full
                                hover:bg-gray-300
                                vsm:max-w-[80%] msm:max-w-[50%]
                                transition-all duration-700 transform
                                ${
                                  isPulsing && !isModalOpen
                                    ? "scale-105 brightness-125 drop-shadow-lg rotate-1"
                                    : ""
                                }
                                `}
              onClick={() => setIsModalOpen(true)}
            >
              Зателефонуйте мені
            </button>
          </div>
          <Link
            href="/"
            onClick={(e) => {
              toggleMenu();
              scrollToTop(e);
            }}
          >
            <Image
              src={ladniAutoLogo}
              alt="Ladni Auto Logo"
              className={`mx-auto pt-6 max-w-[75%]`}
            />
          </Link>
        </nav>
      </div>
      <CallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
