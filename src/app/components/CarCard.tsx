"use client"

import { toggle } from "@/lib/redux/features/selectedCars/selectedCarsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import Image from "next/image"

interface cardsListInterface {
    carType: string
    carTypeToUkr: string
    altText: string
    imageSrc: string
}

interface CardCardProps {
  carType: string
}

export default function CarCard({ carType }: CardCardProps) {
    const selectedCars = useAppSelector((state) => state.selectedCars.value)
    const dispatch = useAppDispatch()

    const cardsList: cardsListInterface[] = [
        { carType: "sedan", carTypeToUkr: "Седан", altText: "sedan auto", imageSrc: "/images/carCards/sedan.png" },
        { carType: "hatchback", carTypeToUkr: "Хетчбек", altText: "hatchback auto", imageSrc: "/images/carCards/hatchback.png" },
        { carType: "pickup", carTypeToUkr: "Пікап", altText: "pickup auto", imageSrc: "/images/carCards/pickup.png" },
        { carType: "universal", carTypeToUkr: "Універсал", altText: "universal auto", imageSrc: "/images/carCards/universal.png" },
        { carType: "crossover", carTypeToUkr: "Кросовер", altText: "crossover auto", imageSrc: "/images/carCards/crossover.png" },
        { carType: "minivan", carTypeToUkr: "Мінівен", altText: "minivan auto", imageSrc: "/images/carCards/minivan.png" },
        { carType: "suv", carTypeToUkr: "Позашляховик", altText: "suv auto", imageSrc: "/images/carCards/suv.png" },
    ]

    const cardData  = cardsList.find(car => car.carType === carType)

    if (!cardData ) {
        console.warn(`Дані для carType: "${carType}" не знайдено у cardslist.`)
        return null
    }

    return(
        <div className={`p-2 hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:z-10 active:scale-105
                ${selectedCars.includes(cardData.carType) ? "scale-110 " : ""}
                `}
            onClick={() => {dispatch(toggle(cardData.carType))}}
            >
            <div className={`bordered-element p-2 h-[200px] w-[200px] flex flex-col justify-between
                transition-all duration-500
                hover:rounded-lg text-lg
                ${selectedCars.includes(cardData.carType) ? "bg-green-500 bg-opacity-65 rounded-lg" : ""}
                `}
            >
                <div className={`bg-project-blue-darker rounded-lg h-[90%] mb-1 flex items-center justify-center
                    transition-all duration-300
                    ${selectedCars.includes(cardData.carType) ? "bg-green-500 bg-opacity-50" : ""}
                    `}>
                    <Image priority width={190} height={190} src={cardData.imageSrc} alt={cardData.altText} objectFit="contain"/>
                </div>
                <div className="text-center">
                    {cardData.carTypeToUkr}
                </div>
            </div>
        </div>
    )
}