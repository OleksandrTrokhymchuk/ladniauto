"use client"

import instagramIcon from "@/images/instagram.svg"
import telegramIcon from "@/images/telegram.svg"
import youtubeIcon from "@/images/youtube.svg"
import ladniAutoLogo from "../../images/Logopng.png"

import Image from "next/image"
import { MouseEventHandler } from "react"

export default function Footer() {
    const scrollToTop: MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <footer className="bg-project-blue py-6 text-project-white">
            <div className="custom-container flex flex-col items-center md:flex-row md:justify-around md:items-center space-y-8 md:space-y-0">
                <div className="flex flex-col items-center space-y-4">
                    <address className="not-italic font-bold">
                        м. Київ, Україна
                    </address>
                    <a
                        href="tel:+380667319809"
                        className={`
                            font-bold whitespace-nowrap
                        `}
                    >
                        +38 066 731 98 09
                    </a>
                </div>
                <a onClick={scrollToTop} className="w-fit hover:cursor-pointer">
                    <Image src={ladniAutoLogo} alt="ladni auto logo" height={200} width={200} quality={100}/>
                </a>
                <div className="flex items-center space-x-4">
                    <a
                        href="https://www.youtube.com/@Ladni_auto"
                        target="_blank"
                        className="group relative inline-block rounded-full p-2 transition-all duration-500"
                    >
                        <span className="absolute inset-0 rounded-full border border-project-white opacity-0 scale-75 transition-all duration-500
                            group-hover-supported:group-hover:opacity-100 group-hover-supported:group-hover:scale-110
                            group-no-hover:group-active:opacity-100 group-no-hover:group-active:scale-110"></span>
                        <Image
                            src={youtubeIcon}
                            width={36}
                            alt="YouTube"
                            className="relative z-10 transition-all duration-500 hover-supported:hover:scale-110 no-hover:active:scale-110"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/ladni_auto/"
                        target="_blank"
                        className="group relative inline-block rounded-full p-2 transition-all duration-500"
                    >
                        <span className="absolute inset-0 rounded-full border border-project-white opacity-0 scale-75 transition-all duration-500
                            group-hover-supported:group-hover:opacity-100 group-hover-supported:group-hover:scale-110
                            group-no-hover:group-active:opacity-100 group-no-hover:group-active:scale-110"></span>
                        <Image
                            src={instagramIcon}
                            width={36}
                            alt="Instagram"
                            className="relative z-10 transition-all duration-500 hover-supported:hover:scale-110 no-hover:active:scale-110"
                        />
                    </a>
                    <a
                        href="https://t.me/Ivan_1162"
                        target="_blank"
                        className="group relative inline-block rounded-full p-2 transition-all duration-500"
                    >
                        <span className="absolute inset-0 rounded-full border border-project-white opacity-0 scale-75 transition-all duration-500
                            group-hover-supported:group-hover:opacity-100 group-hover-supported:group-hover:scale-110
                            group-no-hover:group-active:opacity-100 group-no-hover:group-active:scale-110"></span>
                        <Image
                            src={telegramIcon}
                            width={36}
                            alt="Telegram"
                            className="relative z-10 transition-all duration-500 hover-supported:hover:scale-110 no-hover:active:scale-110"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}