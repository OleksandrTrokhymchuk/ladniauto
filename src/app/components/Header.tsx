"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

import ladniAutoLogo from "../../images/logo.png"
import phoneIconWithoutBg from "../../images/phone-icon-for-modal.png"
import phoneIcon from "@/images/phone-icon-for-header.png"

import CallModal from "./CallModal/CallModal"

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


    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className={`
                z-500
                fixed top-0 w-full z-50
                bg-project-blue
                ${scrolled ? 'vsm:py-1 lg:py-2 shadow-lg opacity-95' : 'lg:py-3 vsm:py-2 shadow-md'}
                ${isMenuOpen ? "shadow-none" : ""}
                text-project-white
                transition-all duration-700 ease-in-out backdrop-blur-sm
                target:`}
            >
                <div className="container mx-auto custom-container flex items-center justify-between">
                    <Link href="/" className={`hidden md:flex items-center mr-8 transition-opacity
                        ${isMenuOpen ? "duration-200 opacity-0" : "duration-700"}
                        `}
                        >
                            <Image
                                src={ladniAutoLogo}
                                alt="Ladni Auto Logo"
                                width={ladniAutoLogo.width}
                                height={ladniAutoLogo.height}
                                className={`
                                    transition-all duration-700
                                    object-contain

                                    ${scrolled ? "max-w-[130px]" : "max-w-[140px]"}
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
                                    lg:text-2xl md:text-xl font-bold whitespace-nowrap
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
                                    ${isPulsing && !isModalOpen ? 'scale-105 brightness-125 drop-shadow-lg rotate-1' : ''}
                              `}
                            onClick={() => setIsModalOpen(true)}
                            >
                                Зателефонуйте мені
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden w-full">
                        <div className="flex items-center vsm:gap-x-3 vsm1:gap-x-5 justify-between relative">
                            <Link href="/" className={`md:hidden flex items-center transition-opacity
                                ${isMenuOpen ? "duration-200 opacity-0" : "duration-700"}
                                `}
                                >
                                    <Image
                                        src={ladniAutoLogo}
                                        alt="Ladni Auto Logo"
                                        width={ladniAutoLogo.width}
                                        height={ladniAutoLogo.height}
                                        className={`
                                            transition-all duration-700
                                            object-contain
                                            vsm:max-w-24 vsm1:max-w-28
                                        `}
                                    priority
                                />
                            </Link>
                            <div className={`
                                bg-project-white py-1 rounded-full relative
                                vsm:px-2 vsm2:px-5 vsm3:px-7 vsm4:px-9
                                flex gap-x-1
                                ${isMenuOpen ? "duration-200 opacity-0" : "duration-700"}
                                ${isPulsing && !isModalOpen ? 'scale-105 brightness-125 drop-shadow-lg rotate-1' : ''}
                                `}
                            >
                                <div className="vsm:h-[18px] vsm:w-[18px] my-auto">
                                    <Image height={24} width={24} src={phoneIconWithoutBg} alt="phone icon" objectFit="contain"/>
                                </div>
                                <a
                                    href="tel:+380667319809"
                                    className={`text-project-blue font-bold
                                        vsm:text-lg vsm4:text-xl
                                        pl-1
                                        `}
                                >
                                    066 731 98 09
                                </a>
                            </div>
                            {/* <div> */}
                                {/* <Image src={phone} alt="phone" width={50} height={50} className={`
                                    ${isMenuOpen ? "duration-200 opacity-0" : "duration-700"}
                                    transition-all ease-in-out transform  ${isPulsing && !isModalOpen ? 'scale-50 rotate-12' : ''}`}
                                    onClick={() => {!isMenuOpen && setIsModalOpen(true)}}
                                /> */}
                                {/* <div className="scale-45 absolute -top-9 left-0 bg-project-white rounded-full p-5">
                                    <Image src={phoneIcon} alt="phone icon" />
                                </div> */}
                            {/* </div> */}
                            <div className="flex items-center gap-x-4">
                                <div
                                    className={`max-h-14 max-w-14
                                        duration-200
                                        ${isMenuOpen ? "opacity-0" : ""}
                                        active:opacity-70
                                        hidden vsm3:block
                                        `}
                                    onClick={() => {!isMenuOpen && setIsModalOpen(true)}}
                                >
                                    <Image src={phoneIcon} alt="phone icon" />
                                </div>

                                <button
                                    onClick={toggleMenu}
                                    className="z-1000 flex flex-col justify-around w-8 h-6 bg-transparent border-none cursor-pointer p-0 focus:outline-none z-50 relative"
                                    aria-label="Toggle menu"
                                >
                                    <span className={`
                                        w-8 h-[1px] bg-project-white
                                        transition-all duration-500 ease-in-out
                                        ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
                                    `}></span>
                                    <span className={`
                                        w-8 h-[1px] bg-project-white
                                        transition-all duration-200 ease-in-out
                                        ${isMenuOpen ? 'opacity-0' : ''}
                                    `}></span>
                                    <span className={`
                                        w-8 h-[1px] bg-project-white
                                        transition-all duration-500 ease-in-out
                                        ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                                    `}></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`
                fixed top-0 left-0 h-full w-full z-40
                transition-opacity duration-500 ease-in-out
                ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                flex justify-center items-start
            `} onClick={toggleMenu}>
                <nav className={`
                    w-full
                    h-full
                    bg-project-blue
                    transform transition-transform duration-500 ease-in-out
                    ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} // Виїжджає зверху
                    p-8
                    ${scrolled ? "pt-[66px]" : "pt-[94px]"}
                `} onClick={(e) => e.stopPropagation()}>
                    <ul className="flex flex-col space-y-6 border-t border-project-white border-opacity-50 pt-10 mt-[2px]">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={toggleMenu}
                                    className={`
                                        text-xl font-bold text-project-white block py-2
                                        hover:text-project-green transition-colors duration-300
                                        ${pathname === item.href ? 'text-project-green' : ''}
                                    `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 pt-6 border-t border-project-white border-opacity-50 flex items-center vsm:justify-center msm:justify-around
                    vsm:flex-col msm:flex-row vsm: gap-y-5
                    ">
                        <a
                            href="tel:+380667319809"
                            className="text-xl font-bold text-project-white block hover:text-project-green transition-colors duration-300"
                        >
                            +38 066 731 98 09
                        </a>
                        <button
                            className= {`bg-project-white text-project-blue font-bold py-2 px-4 rounded-full w-full
                                hover:bg-gray-300
                                vsm:max-w-[80%] msm:max-w-[50%]
                                transition-all duration-700 transform
                                ${isPulsing && !isModalOpen ? 'scale-105 brightness-125 drop-shadow-lg rotate-1' : ''}
                                `}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Зателефонуйте мені
                        </button>
                    </div>
                    <Link href="/" onClick={toggleMenu}>
                        <Image src={ladniAutoLogo} alt="Ladni Auto Logo" className={`mx-auto
                            ${scrolled ? "max-w-[80%] pt-10" : "max-w-[65%] pt-6"}
                            `}/>
                    </Link>
                </nav>
            </div>
            <CallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </>
    )
}