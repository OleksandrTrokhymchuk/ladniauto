"use client"

import { changeGift } from "@/lib/redux/features/selectGift/selectedGiftsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"

interface cardsListInterface {
    gift: string
    giftTitleToUkr: string
    giftDescrToUkr: string
}

interface GiftProps {
    gift: string
    onNextSlideClick: () => void
}

export default function Gift({ gift, onNextSlideClick }: GiftProps) {
    const selectedGift = useAppSelector((state) => state.selectedGifts.value)
    const dispatch = useAppDispatch()

    const cardsList: cardsListInterface[] = [
        {
            gift: "Vehicle History Check",
            giftTitleToUkr: "🎁 Перевірка авто на безпечність покупки та попередні потрапляння на аукціони",
            giftDescrToUkr: `🔎 Професійно перевіримо обране авто на аукціоні США: документи, критичність пошкоджень,
                історію участі в торгах. Відсіюємо ризикові варіанти ДО торгів. Ви купуєте тільки перевірене авто.`
        },
        {
            gift: "Vehicle Report",
            giftTitleToUkr: "🎁 Carfax + Windows Sticker / комплектація",
            giftDescrToUkr: `✅ Перевіримо історію авто в США (пробіг, обслуговування, попередні ремонти та ДТП) а
                також комплектацію перед тим як купувати. Надаємо звіт Carfax, Windows Sticker або розшифровку комплектації і
                власний висновок — ви дізнаєтесь про авто більше, ніж вказано на сторінці лоту.`
        },
        {
            gift: "Market Analysis",
            giftTitleToUkr: "🎁 Аналіз ринку і реальна ціна покупки авто",
            giftDescrToUkr: `📊 Даємо свіжу статистику та формуємо реальну вилку цін по вашій моделі і визначаємо оптимальний бюджет
                для покупки. Жодних переплат по ходу аукціону, торги відбуваються тільки в межах погодженого бюджету.`
        },
        {
            gift: "Total Cost Calculation",
            giftTitleToUkr: "🎁 Персональний прорахунок вартості авто під ключ",
            giftDescrToUkr: `💰 Розрахунок усіх витрат без прихованих платежів: від ціни лота та зборів аукціону до доставки і ремонту.
                Ви заздалегідь бачите фінальний бюджет свого авто.`
        },

    ]

    const cardData = cardsList.find(giftItem => giftItem.gift === gift)
    const selectedScaleClass = cardData && selectedGift.includes(cardData.giftTitleToUkr) ? 'scale-105' : '';

    return (
        <div className={`hover-supported:hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-200 ease-in-out
                hover-supported:hover:scale-105
                hover-supported:hover:z-100 no-hover:active:z-100
                ${selectedScaleClass}
            `}
            onClick={() => {dispatch(changeGift(cardData?.giftTitleToUkr ?? "")); onNextSlideClick()}}
        >
            <div className={`msm:border-none vsm:border vsm:border-opacity-20 vsm:border-project-white
                msm:bordered-element-gift-card vsm:rounded-md p-2
                vsm:h-auto vsm:max-w-full
                sm1:h-[300px] md:h-[350px] md1:h-[330px] md2:h-[300px] lg:h-[280px] lg1:h-[360px] xl1:h-[310px] xl2:h-[370px]
                flex flex-col justify-between
                transition-all duration-200
                hover-supported:hover:rounded-lg no-hover:active:rounded-lg
                ${selectedGift === cardData?.giftTitleToUkr ? "bg-project-green rounded-lg" : ""}
                `}
            >
                <div className={`bg-project-blue-darker rounded-lg h-[100%] flex justify-start
                    transition-all duration-200 text-center vsm:p-3 msm:p-4 lg:p-5 flex-col
                    ${selectedGift === cardData?.giftTitleToUkr ? "bg-opacity-45" : ""}
                    `}>
                        <h4 className="vsm:text-lg vsm2:text-xl font-semibold">
                            {cardData?.giftTitleToUkr}
                        </h4>
                        <div className="h-0.25 w-3/4 mx-auto bg-project-white bg-opacity-30
                            vsm:my-3"
                        ></div>
                        <div className="vsm:text-base md:text-lg">
                            {cardData?.giftDescrToUkr}
                        </div>

                </div>
            </div>
        </div>
    )
}