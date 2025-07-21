"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

import ladniAutoLogo from "../../images/logo.png"

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
                }, 500)

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
      `}>
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
                    <div className={`
                        md:hidden
                        transition-all duration-500 ease-in-out
                        ${isPulsing ? 'scale-105 brightness-125 drop-shadow-lg rotate-2' : ''}
                        `}
                    >
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.1753 52.0986C22.7044 43.9929 21 37.4583 21 33.0447C21 28.631 22.0844 27.3651 23.1848 26.3425C24.2851 25.3198 29.247 22.2607 30.0924 21.6901C30.9379 21.1196 34.1646 20.0109 36.1881 22.9217C38.2116 25.8326 42.0221 31.677 44.6492 35.5595C48.7717 41.0588 45.4874 43.4729 44.4266 44.9198C42.4745 47.5823 41.3505 48.239 41.3505 51.5084C41.3505 54.7778 50.4875 64.0662 52.6722 66.3547C54.8404 68.6259 63.9446 76.607 66.7657 77.0338C69.6066 77.4636 73.4098 74.4559 74.2184 73.6932C78.3319 70.535 80.6539 72.9294 82.5487 73.9701C84.4434 75.0109 93.0043 80.3454 95.6573 82.1436C98.1541 83.9417 97.9981 86.7207 97.9981 86.7207C97.9981 86.7207 92.8483 94.8941 92.2241 95.8749C91.4438 97.0192 89.5711 98 85.3577 98C81.1442 98 76.6423 97.2304 65.9433 91.3464C57.189 86.5319 48.8437 78.9927 44.4742 74.579C39.9486 70.1654 32.2823 61.3575 27.1753 52.0986Z" fill="#024097" transform="scale(0.4) translate(5, 2)"/>
                        </svg>
                  </div>
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