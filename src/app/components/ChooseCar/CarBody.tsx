"use client"

import { toggle } from "@/lib/redux/features/selectedCarBodies/selectedCarBodiesSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import Image from "next/image"

interface cardsListInterface {
    carBody: string
    carBodyToUkr: string
    altText: string
    imageSrc: string
}

interface CardCardProps {
  carBody: string
}

export default function CarBody({ carBody }: CardCardProps) {
    const selectedCarBodies = useAppSelector((state) => state.selectedCarBodies.value)
    const dispatch = useAppDispatch()

    const cardsList: cardsListInterface[] = [
        { carBody: "crossover", carBodyToUkr: "Кросовер", altText: "crossover auto", imageSrc: "/images/Car-Body/crossover.png" },
        { carBody: "sedan", carBodyToUkr: "Седан", altText: "sedan auto", imageSrc: "/images/Car-Body/sedan.png" },
        { carBody: "hatchback", carBodyToUkr: "Хетчбек", altText: "hatchback auto", imageSrc: "/images/Car-Body/hatchback.png" },
        { carBody: "minivan", carBodyToUkr: "Мінівен", altText: "minivan auto", imageSrc: "/images/Car-Body/minivan.png" },
        { carBody: "pickup", carBodyToUkr: "Пікап", altText: "pickup auto", imageSrc: "/images/Car-Body/pickup.png" },
        { carBody: "universal", carBodyToUkr: "Універсал", altText: "universal auto", imageSrc: "/images/Car-Body/universal.png" },
        { carBody: "coupe", carBodyToUkr: "Купе", altText: "coupe auto", imageSrc: "/images/Car-Body/coupe.png" },
        { carBody: "cabriolet", carBodyToUkr: "Кабріолет", altText: "cabriolet auto", imageSrc: "/images/Car-Body/cabriolet.png" },

        { carBody: "unknown", carBodyToUkr: "Інше авто", altText: "another auto", imageSrc: "/images/Car-Body/unknown.svg" },
    ]

    const cardData  = cardsList.find(car => car.carBody === carBody)

    if (!cardData ) {
        console.warn(`Дані для carBody: "${carBody}" не знайдено у cardslist.`)
        return null
    }

    return(
        <div className={`hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:z-100 active:scale-105
                ${selectedCarBodies.includes(cardData.carBody) ? "scale-110 " : ""}
                `}
            onClick={() => {dispatch(toggle(cardData.carBody))}}
            >
            <div className={`msm:border-none vsm:border vsm:border-opacity-20 vsm:border-project-white
                msm:bordered-element vsm:rounded-md
                pb-1
                vsm:px-1 msm:px-2
                vsm:pt-1 msm:pt-2
                vsm:h-[110px] vsm:w-[110px]
                vsm1:h-[130px] vsm1:w-[130px]
                vsm2:h-[150px] vsm2:w-[150px]
                vsm3:h-[170px] vsm3:w-[170px]
                vmsm:h-[200px] vmsm:w-[200px]
                flex flex-col justify-between
                transition-all duration-500
                hover:rounded-lg
                ${selectedCarBodies.includes(cardData.carBody) ? "bg-project-green rounded-lg" : ""}
                `}
            >
                <div className={`bg-project-blue-darker rounded-lg h-[90%]
                    ${cardData.carBody === "unknown" ? "vsm2:mb-[2px] msm:mb-0" : "mb-1"}
                    flex items-center justify-center
                    transition-all duration-300
                    ${selectedCarBodies.includes(cardData.carBody) ? "bg-opacity-45" : ""}
                    `}>
                    {
                        cardData.carBody === "unknown" ? (
                        <div className="vsm:max-w-[70px] vsm:max-h-[70px] vsm2:max-w-[110px] vsm2:max-h-[110px]">
                            <Image
                                src={cardData.imageSrc}
                                alt={cardData.altText}
                                width={110}
                                height={110}
                                objectFit="contain"
                            />
                        </div>
                        ) : (
                        <>
                            <Image
                                src={cardData.imageSrc}
                                alt={cardData.altText}
                                width={190}
                                height={190}
                                objectFit="contain"
                            />
                        </>)
                    }
                </div>
                <div className="text-center vsm:text-base msm:text-xl">
                    {cardData.carBodyToUkr}
                </div>
            </div>
        </div>
    )
}