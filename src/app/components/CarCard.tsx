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

    const cardsList: cardsListInterface[] = [
        { carType: "sedan", carTypeToUkr: "Седан", altText: "sedan auto", imageSrc: "/images/carCards/sedan.png" },
        { carType: "hatchback", carTypeToUkr: "Хетчбек", altText: "hatchback auto", imageSrc: "/images/carCards/hatchback.png" },
    ]

    const cardData  = cardsList.find(car => car.carType === carType)
    if (!cardData ) {
        console.warn(`Дані для carType: "${carType}" не знайдено у cardslist.`)
        return null
    }
    return(
        <div className="p-2 hover:cursor-pointer transform z-0
                transition-transform duration-300 ease-in-out
                hover:scale-110 hover:z-10 active:scale-105 mx-auto"
            >
            <div className="bordered-element p-2 h-[200px] w-[200px] flex flex-col justify-between
                transition-all duration-500
                 hover:rounded-lg text-lg"
            >
                <div className="bg-project-blue-darker rounded-lg h-[90%] mb-1 flex items-center justify-center">
                    <Image width={190} height={190} src={cardData.imageSrc} alt={cardData.altText} objectFit="contain" />
                </div>
                <div className="text-center">
                    {cardData.carTypeToUkr}
                </div>
            </div>
        </div>
    )
}