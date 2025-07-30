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
        <div className={`hover-supported:hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                hover-supported:hover:scale-110
                hover-supported:hover:z-100 no-hover:active:z-100
            `}
            onClick={() => {dispatch(changeBudget(budget))}}
        >
            <div className={`bordered-element p-2 h-[70px] w-[200px] flex flex-col justify-between
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