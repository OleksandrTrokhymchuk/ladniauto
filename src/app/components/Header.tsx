"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

import ladniAutoLogo from "../../images/logo.png"
import phone from "../../images/phone-call.png"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isPulsing, setIsPulsing] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                  setScrolled(true)
            } else {
                  setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const navItems = [
        { name: "Послуги", href: "/services" },
        { name: "Про нас", href: "/about" },
        { name: "Блог", href: "/blog" },
        { name: "Контакти", href: "/contact" },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const pulseInterval = setInterval(() => {
                setIsPulsing(true)
                const timeoutId = setTimeout(() => {
                    setIsPulsing(false)
                }, 700)

                return () => clearTimeout(timeoutId)
            }, 10000)
            return () => clearInterval(pulseInterval)
    }, [])


    return (
      <header className={`
            fixed top-0 w-full z-50
            bg-project-blue
            ${scrolled ? 'py-1 shadow-lg opacity-95' : 'py-4 shadow-md'}
            text-project-white
            transition-all duration-700 ease-in-out backdrop-blur-sm
        target:`}>
        <div className="container mx-auto custom-container flex items-center justify-between">
            <Link href="/" className="flex items-center mr-8">
              <Image
              src={ladniAutoLogo}
              alt="Ladni Auto Logo"
              width={scrolled ? 90 : 100}
              height={scrolled ? 31 : 34}
              className={`
                object-contain transition-all duration-700 ease-in-out
                md:w-[125px] md:max-h-[90px]
              `}
              priority
            />
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={`
                      lg:text-lg md:text-base px-2 py-2 relative block
                      transition-all duration-300 ease-in-out
                      ${pathname === item.href
                        ? 'font-bold text-project-white after:scale-x-100'
                        : 'font-medium text-gray-100 hover:text-project-white hover:after:scale-x-100'
                      }
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.25 after:bg-project-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out
                    `}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:flex items-center space-x-6 ml-auto">
                <div className={`w-px bg-project-white opacity-50 ${scrolled ? 'h-14' : 'h-16'} transition-all duration-500`}></div>
                <div className="flex md:flex-col lg:flex-row items-center md:items-start lg:items-center md:space-y-2 lg:space-y-0 lg:space-x-6">
                    <a
                        href="tel:+380667319809"
                        className={`
                            lg:text-xl md:text-base font-bold whitespace-nowrap
                            transition-all duration-500 ease-in-out
                            mx-auto
                            hover:transform hover:scale-105
                        `}
                    >
                        +38 066 731 98 09
                    </a>
                    <button
                      className={`bg-project-white lg:text-lg md:text-base hover:bg-gray-300 text-project-blue font-bold py-2 px-6 rounded-full
                          transition-all duration-700 transform hover:scale-105 active:scale-95 whitespace-nowrap
                          ${isPulsing ? 'scale-105 brightness-125 drop-shadow-lg rotate-1' : ''}
                      `}
                    >
                        Зателефонуйте мені
                    </button>
                </div>
            </div>


            <div className="md:hidden">
                  <div className="flex items-center gap-x-5 ">
                      <Image src={phone} alt="phone" width={50} height={50} className={`transition-all duration-700 ease-in-out transform  ${isPulsing ? 'scale-50 rotate-12' : ''}`}/>
                      <button
                          onClick={toggleMenu}
                          className="flex flex-col justify-around w-8 h-6 bg-transparent border-none cursor-pointer p-0 focus:outline-none z-50 relative"
                          aria-label="Toggle menu"
                      >
                          <div className={`
                              w-8 h-0.25 bg-project-white rounded
                              transition-all duration-500 ease-in-out
                              ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
                          `}></div>
                          <div className={`
                              w-8 h-0.25 bg-project-white rounded
                              transition-all duration-200 ease-in-out
                              ${isMenuOpen ? 'opacity-0' : ''}
                          `}></div>
                          <div className={`
                              w-8 h-0.25 bg-project-white rounded
                              transition-all duration-500 ease-in-out
                              ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                          `}></div>
                    </button>
                  </div>
                  </div>
            </div>
        </header>
    )
}