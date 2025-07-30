"use client"

import { changeBudget } from "@/lib/redux/features/selectedBudget/selectedBudgetSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"

interface cardsListInterface {
    budget: string
}

interface BudgetProps {
    budget: string
    onNextSlideClick: () => void
}

export default function Budget({ budget, onNextSlideClick }: BudgetProps) {
    const selectedBudget = useAppSelector((state) => state.selectedBudget.value)
    const dispatch = useAppDispatch()

    const cardsList: cardsListInterface[] = [
        { budget: "10 000 — 20 000" },
        { budget: "20 000 — 30 000" },
        { budget: "30 000 — 40 000" },
        { budget: "40 000 — 50 000" },
        { budget: "Більше 50.000" },
    ]

    const cardData = cardsList.find(budgetItem => budgetItem.budget === budget)
    const selectedScaleClass = cardData && selectedBudget.includes(cardData.budget) ? 'scale-110' : '';
    return (
        <div className={`hover-supported:hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                hover-supported:hover:scale-110
                hover-supported:hover:z-100 no-hover:active:z-100
                ${selectedScaleClass}
            `}
            onClick={() => {dispatch(changeBudget(budget)); onNextSlideClick()}}
        >
            <div className={`msm:border-none vsm:border vsm:border-opacity-20 vsm:border-project-white
                msm:bordered-element vsm:rounded-md
                p-2 h-[70px] w-[200px] flex flex-col justify-between
                transition-all duration-500 text-lg
                hover-supported:hover:rounded-lg no-hover:active:rounded-lg
                ${selectedBudget === budget ? "bg-project-green rounded-lg" : ""}
                `}
            >
                <div className={`bg-project-blue-darker rounded-lg h-[100%] flex items-center justify-center
                    transition-all duration-300
                    ${selectedBudget === budget ? "bg-opacity-45" : ""}
                    `}>
                    {budget} $
                </div>
            </div>
        </div>
    )
}