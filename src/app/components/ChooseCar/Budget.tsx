"use client"

import { changeBudget } from "@/lib/redux/features/selectedBudget/selectedBudgetSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"

interface BudgetProps {
    budget: string
}

export default function Budget({budget}: BudgetProps) {
    const selectedBudget = useAppSelector((state) => state.selectedBudget.value)
    const dispatch = useAppDispatch()

    return (
        <div className={`hover:cursor-pointer transform z-0 mx-auto
            transition-all duration-300 ease-in-out
            hover:scale-110 hover:z-10 active:scale-105
            `}
            onClick={() => {dispatch(changeBudget(budget))}}
        >
            <div className={`bordered-element p-2 h-[70px] w-[200px] flex flex-col justify-between
                transition-all duration-500
                hover:rounded-lg text-lg
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