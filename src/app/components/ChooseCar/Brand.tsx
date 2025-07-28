"use client"

import { toggle } from "@/lib/redux/features/selectedBrands/selectedBrandsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import Image from "next/image"

interface brandsListInterface {
    brand: string
    brandToUkr: string
    altText: string
    imageSrc: string
}

interface brandProps {
    brand: string
}

export default function Brand({ brand }: brandProps) {
    const selectedBrands = useAppSelector((state) => state.selectedBrands.value)
    const dispatch = useAppDispatch()

    const brandsList: brandsListInterface[] = [
        { brand: "mercedes-benz", brandToUkr: "Mercedes-Benz", altText: "mercedes-benz brand", imageSrc: "/images/Brands/mercedes-benz.svg" },
        { brand: "bmw", brandToUkr: "BMW", altText: "bmw brand", imageSrc: "/images/Brands/bmw.svg" },
        { brand: "volkswagen", brandToUkr: "Volkswagen", altText: "volkswagen brand", imageSrc: "/images/Brands/volkswagen.svg" },
        { brand: "audi", brandToUkr: "Audi", altText: "audi brand", imageSrc: "/images/Brands/audi.svg" },
        { brand: "ford", brandToUkr: "Ford", altText: "ford brand", imageSrc: "/images/Brands/ford.svg" },
        { brand: "lincoln", brandToUkr: "Lincoln", altText: "lincoln brand", imageSrc: "/images/Brands/lincoln.svg" },
        { brand: "kia", brandToUkr: "Kia", altText: "kia brand", imageSrc: "/images/Brands/kia.svg" },
        { brand: "infiniti", brandToUkr: "Infiniti", altText: "infiniti brand", imageSrc: "/images/Brands/infiniti.svg" },
        { brand: "hyundai", brandToUkr: "Hyundai", altText: "hyundai brand", imageSrc: "/images/Brands/hyundai.svg" },
        { brand: "jaguar", brandToUkr: "Jaguar", altText: "jaguar brand", imageSrc: "/images/Brands/jaguar.svg" },
        { brand: "jeep", brandToUkr: "Jeep", altText: "jeep brand", imageSrc: "/images/Brands/jeep.svg" },
        { brand: "hummer", brandToUkr: "Hummer", altText: "hummer brand", imageSrc: "/images/Brands/hummer.svg" },
        { brand: "mitsubishi", brandToUkr: "Mitsubishi", altText: "mitsubishi brand", imageSrc: "/images/Brands/mitsubishi.svg" },
        { brand: "dodge", brandToUkr: "Dodge", altText: "dodge brand", imageSrc: "/images/Brands/dodge.svg" },
        { brand: "land-rover", brandToUkr: "Land Rover", altText: "land-rover brand", imageSrc: "/images/Brands/land-rover.svg" },
        { brand: "nissan", brandToUkr: "Nissan", altText: "nissan brand", imageSrc: "/images/Brands/nissan.svg" },
        { brand: "lexus", brandToUkr: "Lexus", altText: "lexus brand", imageSrc: "/images/Brands/lexus.svg" },
        { brand: "mazda", brandToUkr: "Mazda", altText: "mazda brand", imageSrc: "/images/Brands/mazda.svg" },
        { brand: "toyota", brandToUkr: "Toyota", altText: "toyota brand", imageSrc: "/images/Brands/toyota.svg" },
        { brand: "subaru", brandToUkr: "Subaru", altText: "subaru brand", imageSrc: "/images/Brands/subaru.svg" },
        { brand: "volvo", brandToUkr: "Volvo", altText: "volvo brand", imageSrc: "/images/Brands/volvo.svg" },
        { brand: "chrysler", brandToUkr: "Chrysler", altText: "chrysler brand", imageSrc: "/images/Brands/chrysler.svg" },
        { brand: "tesla", brandToUkr: "Tesla", altText: "tesla brand", imageSrc: "/images/Brands/tesla.svg" },
        { brand: "chevrolet", brandToUkr: "Chevrolet", altText: "chevrolet brand", imageSrc: "/images/Brands/chevrolet.svg" },
        { brand: "acura", brandToUkr: "Acura", altText: "acura brand", imageSrc: "/images/Brands/acura.svg" },
        { brand: "alfa-romeo", brandToUkr: "Alfa Romeo", altText: "alfa-romeo brand", imageSrc: "/images/Brands/alfa-romeo.svg" },
        { brand: "cadillac", brandToUkr: "Cadillac", altText: "cadillac brand", imageSrc: "/images/Brands/cadillac.svg" },
        { brand: "smart", brandToUkr: "Smart", altText: "smart brand", imageSrc: "/images/Brands/smart.svg" },
        { brand: "porsche", brandToUkr: "Porsche", altText: "porsche brand", imageSrc: "/images/Brands/porsche.svg" },
        { brand: "gmc", brandToUkr: "GMC", altText: "gmc brand", imageSrc: "/images/Brands/gmc.svg" },
        { brand: "honda", brandToUkr: "Honda", altText: "honda brand", imageSrc: "/images/Brands/honda.svg" },
        { brand: "genesis", brandToUkr: "Genesis", altText: "genesis brand", imageSrc: "/images/Brands/genesis.svg" },

        { brand: "unknown", brandToUkr: "Інше авто", altText: "unknown brand", imageSrc: "/images/Brands/unknown.svg" },
    ]

    const cardData  = brandsList.find(car => car.brand === brand)

    if (!cardData ) {
        console.warn(`Дані для brand: "${brand}" не знайдено у brandsList.`)
        return null
    }

    return(
        <div className={`hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:z-10 active:scale-105
                ${selectedBrands.includes(cardData.brand) ? "scale-110 " : ""}
                `}
                onClick={() => {dispatch(toggle(cardData.brand))}}
            >
            <div className={`bordered-element p-2 h-[200px] w-[200px] flex flex-col justify-between
                transition-all duration-500
                hover:rounded-lg text-lg
                ${selectedBrands.includes(cardData.brand) ? "bg-green-500 bg-opacity-65 rounded-lg" : ""}
                `}
            >
                <div className={`bg-project-blue-darker rounded-lg h-[90%] mb-1 flex items-center justify-center
                    transition-all duration-300
                    ${selectedBrands.includes(cardData.brand) ? "bg-green-500 bg-opacity-50" : ""}
                    `}>
                    <Image
                        src={cardData.imageSrc}
                        alt={cardData.altText}
                        width={140}
                        height={140}
                        objectFit="contain"
                        priority
                    />
                </div>
                <div className="text-center">
                    {cardData.brandToUkr}
                </div>
            </div>
        </div>
    )
}