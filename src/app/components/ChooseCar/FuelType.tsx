"use client"

import { toggle } from "@/lib/redux/features/selectedFuelTypes/selectedFuelTypesSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import Image from "next/image"

import lightningIcon from "../../../../public/images/Fuel-Types/lightning.svg"

interface cardsListInterface {
    fuelType: string
    fuelTypeToUkr: string
    altText: string
    imageSrc: string
}

interface CardCardProps {
  fuelType: string
}

export default function FuelType({ fuelType }: CardCardProps) {
    const selectedFuelTypes = useAppSelector((state) => state.selectedFuelTypes.value)
    const dispatch = useAppDispatch()

    const cardsList: cardsListInterface[] = [
        { fuelType: "petrol", fuelTypeToUkr: "Бензин", altText: "petrol", imageSrc: "/images/Fuel-Types/petrol.svg" },
        { fuelType: "diesel", fuelTypeToUkr: "Дизель", altText: "diesel", imageSrc: "/images/Fuel-Types/diesel.svg" },
        { fuelType: "electric", fuelTypeToUkr: "Електро", altText: "electric", imageSrc: "/images/Fuel-Types/lightning.svg" },
        { fuelType: "hybrid", fuelTypeToUkr: "Гібрид", altText: "hybrid", imageSrc: "/images/Fuel-Types/petrol.svg" },
        { fuelType: "gas", fuelTypeToUkr: "Газ", altText: "gag", imageSrc: "/images/Fuel-Types/gas.png" },

        { fuelType: "unknown", fuelTypeToUkr: "Інший тип", altText: "another fuel", imageSrc: "/images/Car-Body/unknown.svg" },
    ]

    const cardData  = cardsList.find(car => car.fuelType === fuelType)

    if (!cardData ) {
        console.warn(`Дані для carBody: "${fuelType}" не знайдено у cardslist.`)
        return null
    }

    return(
        <div className={`hover-supported:hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                active:scale-105
                hover-supported:hover:scale-110 hover-supported:hover:z-100
                no-hover:active:z-100

                ${selectedFuelTypes.includes(cardData.fuelType) ? "scale-110 " : ""}
                `}
            onClick={() => {dispatch(toggle(cardData.fuelType))}}
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
                    hover-supported:hover:rounded-lg   no-hover:active:rounded-lg
                ${selectedFuelTypes.includes(cardData.fuelType) ? "bg-project-green rounded-lg" : ""}
                `}
            >
                <div className={`bg-project-blue-darker rounded-lg h-[90%]
                        ${cardData.fuelType === "unknown" ? "vsm2:mb-[2px] msm:mb-0" : "mb-1"}
                        flex items-center justify-center
                        transition-all duration-300
                        ${selectedFuelTypes.includes(cardData.fuelType) ? "bg-opacity-45" : ""}
                    `}
                >
                    <div className="relative">
                        <div className={`
                            ${cardData.fuelType === "unknown" ? "vsm:max-w-[70px] vsm:max-h-[70px] vsm2:max-w-[110px] vsm2:max-h-[110px]" 
                                : "vsm:max-w-[50px] vsm:max-h-[50px] vsm2:max-w-[80px] vsm2:max-h-[80px] vsm3:max-w-[90px] vsm3:max-h-[90px]"}
                            `}>
                            {
                                cardData.fuelType === "unknown" ? (
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
                            <span
                                className={`absolute font-bold vsm:text-xs vsm3:text-lg
                                    top-1/2
                                    ${cardData.fuelType === "hybrid" ? "vsm:left-[12px] vsm2:left-[24px]" : "vsm:left-[16px] vsm2:left-[28px] vsm3:left-[30px]"}
                                    `}
                            >
                                {cardData.fuelType === "petrol" && "A"}
                                {cardData.fuelType === "diesel" && "D"}
                                {cardData.fuelType === "hybrid" && <div className="vsm:max-h-[18px] vsm:max-w-[18px] vsm3:max-h-[30px] vsm3:max-w-[30px]">
                                    <Image src={lightningIcon} width={30} alt="electro"/>
                                </div>}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-center vsm:text-base msm:text-xl">
                    {cardData.fuelTypeToUkr}
                </div>
            </div>
        </div>
    )
}