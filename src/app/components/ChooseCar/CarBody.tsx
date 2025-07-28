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

        { carBody: "unknown", carBodyToUkr: "Інший автомобіль", altText: "unknown auto", imageSrc: "/images/Car-Body/unknown.svg" },
    ]

    const cardData  = cardsList.find(car => car.carBody === carBody)

    if (!cardData ) {
        console.warn(`Дані для carBody: "${carBody}" не знайдено у cardslist.`)
        return null
    }

    return(
        <div className={` hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:z-100 active:scale-105
                ${selectedCarBodies.includes(cardData.carBody) ? "scale-110 " : ""}
                `}
            onClick={() => {dispatch(toggle(cardData.carBody))}}
            >
            <div className={`bordered-element p-2 h-[200px] w-[200px] flex flex-col justify-between
                transition-all duration-500
                hover:rounded-lg text-lg
                ${selectedCarBodies.includes(cardData.carBody) ? "bg-green-500 bg-opacity-65 rounded-lg" : ""}
                `}
            >
                <div className={`bg-project-blue-darker rounded-lg h-[90%] mb-1 flex items-center justify-center
                    transition-all duration-300
                    ${selectedCarBodies.includes(cardData.carBody) ? "bg-green-500 bg-opacity-50" : ""}
                    `}>
                    <Image
                        src={cardData.imageSrc}
                        alt={cardData.altText}
                        width={cardData.carBody === "unknown" ? 140 : 190}
                        height={cardData.carBody === "unknown" ? 140 : 190}
                        objectFit="contain"
                        priority
                    />
                </div>
                <div className="text-center">
                    {cardData.carBodyToUkr}
                </div>
            </div>
        </div>
    )
}