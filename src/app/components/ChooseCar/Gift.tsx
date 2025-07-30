"use client"

import { changeGift } from "@/lib/redux/features/selectGift/selectedGiftsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"

interface cardsListInterface {
    gift: string
    giftToUkr: string
}

interface GiftProps {
    gift: string
    onNextSlideClick: () => void
}

export default function Gift({ gift, onNextSlideClick }: GiftProps) {
    const selectedGift = useAppSelector((state) => state.selectedGifts.value)
    const dispatch = useAppDispatch()

    const cardsList: cardsListInterface[] = [
        { gift: "gift1", giftToUkr: "Подарунок  1" },
        { gift: "gift2", giftToUkr: "Подарунок  2" },
        { gift: "gift3", giftToUkr: "Подарунок  3" },
        { gift: "gift4", giftToUkr: "Подарунок  4" },
    ]

    const cardData = cardsList.find(giftItem => giftItem.gift === gift)
    const selectedScaleClass = cardData && selectedGift.includes(cardData.gift) ? 'scale-110' : '';
    return (
        <div className={`hover-supported:hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                hover-supported:hover:scale-110
                hover-supported:hover:z-100 no-hover:active:z-100
                ${selectedScaleClass}
            `}
            onClick={() => {dispatch(changeGift(gift)); onNextSlideClick()}}
        >
            <div className={`msm:border-none vsm:border vsm:border-opacity-20 vsm:border-project-white
                msm:bordered-element vsm:rounded-md
                p-2 h-[70px] w-[200px] flex flex-col justify-between
                transition-all duration-500 text-lg
                hover-supported:hover:rounded-lg no-hover:active:rounded-lg
                ${selectedGift === gift ? "bg-project-green rounded-lg" : ""}
                `}
            >
                <div className={`bg-project-blue-darker rounded-lg h-[100%] flex items-center justify-center
                    transition-all duration-300
                    ${selectedGift === gift ? "bg-opacity-45" : ""}
                    `}>
                    {cardData?.giftToUkr}
                </div>
            </div>
        </div>
    )
}