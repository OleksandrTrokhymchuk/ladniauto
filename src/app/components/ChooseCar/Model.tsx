"use client"

import { toggle } from "@/lib/redux/features/selectedBrands/selectedBrandsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"

interface modelsListInterface {
    [model: string]: string[]
}

interface ModelsProps {
    model: string
}

export default function Model({model}: ModelsProps) {
    const selectedModels = useAppSelector((state) => state.selectedModels.value)
    const selectedBrands = useAppSelector((state) => state.selectedBrands.value)

    const dispatch = useAppDispatch()

    const modelsList: modelsListInterface = {
        "toyota": [
            "Camry",
            "RAV4",
            "Corolla",
            "Highlander",
            "Sienna",
            "Prius"
        ],
        "hyundai": [
            "Sonata",
            "Elantra",
            "Santa Fe",
            "Tucson",
            "Kona"
        ],
        "kia": [
            "Optima (K5)",
            "Sportage",
            "Sorento",
            "Forte (Cerato)",
            "Soul"
        ],
        "honda": [
            "Civic",
            "Accord",
            "CR-V",
            "HR-V",
            "Odyssey"
        ],
        "nissan": [
            "Altima",
            "Rogue (X-Trail)",
            "Sentra",
            "Juke",
            "Murano",
            "Leaf"
        ],
        "ford": [
            "Fusion (Mondeo)",
            "Escape (Kuga)",
            "Focus",
            "Fiesta",
            "Mustang",
            "F-150"
        ],
        "volkswagen": [
            "Passat",
            "Jetta",
            "Tiguan",
            "Atlas / Teramont",
            "Golf"
        ],
        "mazda": [
            "Mazda 3",
            "Mazda 6",
            "CX-5",
            "CX-9"
        ],
        "chevrolet": [
            "Malibu",
            "Cruze",
            "Equinox",
            "Impala",
            "Volt",
            "Camaro",
            "Tahoe / Suburban"
        ],
        "bmw": [
            "X5",
            "X3",
            "X1",
            "3 Series",
            "5 Series"
        ],
        "mercedes-benz": [
            "C-Class",
            "E-Class",
            "GLC",
            "GLE"
        ],
        "audi": [
            "Q5",
            "Q7",
            "A4",
            "A6"
        ],
        "lexus": [
            "RX",
            "ES",
            "NX",
            "IS"
        ],
        "tesla": [
            "Model 3",
            "Model Y",
            "Model S",
            "Model X"
        ],
        "subaru": [
            "Outback",
            "Forester",
            "Legacy",
            "Impreza"
        ],
        "jeep": [
            "Grand Cherokee",
            "Cherokee",
            "Compass",
            "Patriot",
            "Wrangler"
        ],
        "mitsubishi": [
            "Outlander",
            "Lancer"
        ],
        "dodge": [
            "Charger",
            "Challenger",
            "Durango",
            "Journey"
        ],
        "chrysler": [
            "300",
            "Pacifica",
            "Town & Country"
        ],
        "cadillac": [
            "Escalade",
            "CTS",
            "SRX / XT5"
        ],
        "acura": [
            "MDX",
            "RDX",
            "TLX"
        ],
        "infiniti": [
            "Q50",
            "QX60",
            "QX80 (QX56)"
        ],
        "volvo": [
            "XC90",
            "XC60",
            "S60",
            "S90"
        ],
        "lincoln": [
            "MKZ",
            "MKC / Corsair",
            "Navigator"
        ],
        "genesis": [
            "G70",
            "G80",
            "GV70",
            "GV80"
        ],
        "hummer": [
            "H1",
            "H2",
            "H3",
            "Hummer EV"
        ],
        "land-rover": [
            "Range Rover Sport",
            "Range Rover Evoque",
            "Discovery"
        ],
        "jaguar": [
            "XE",
            "XF",
            "F-Pace"
        ],
        "porsche": [
            "Cayenne",
            "Macan",
            "Panamera",
            "911"
        ],
        "alfa-romeo": [
            "Giulia",
            "Stelvio"
        ],
        "smart": [
            "Fortwo"
        ],
        "gmc": [
            "Sierra",
            "Acadia",
            "Yukon"
        ]
    }
        // "toyota": [
        //     "Camry",
        //     "RAV4",
        //     "Corolla",
        //     "Highlander",
        //     "Sienna",
        //     "Prius"
        // ],

        // const cardData = modelsList.find(card => card.model === "Toyota")

    // if (!cardData ) {
    //     console.warn(`Дані для model: "${model}" не знайдено у brandsList.`)
    //     return null
    // }

    return(
            <div className={`hover:cursor-pointer transform z-0 mx-auto
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:z-10 active:scale-105
                `}
            >
                <div className={`bordered-element p-2 h-[70px] w-[200px] flex flex-col justify-between
                    transition-all duration-500
                    hover:rounded-lg text-lg
                    `}
                >
                    <div className={`bg-project-blue-darker rounded-lg h-[100%] flex items-center justify-center
                        transition-all duration-300
                        `}>
                        {model}
                    </div>
                </div>
            </div>
        )
        // <ul>
        //     {
        //         selectedBrands.map((brand => <li key={brand}>
        //                 {
        //                     modelsList[brand].map(model => (
        //                         <div key={model} className={`hover:cursor-pointer transform z-0 mx-auto
        //                             transition-all duration-300 ease-in-out
        //                             hover:scale-110 hover:z-10 active:scale-105
        //                             `}
        //                         >
        //                             <div className={`bordered-element p-2 h-[70px] w-[200px] flex flex-col justify-between
        //                                 transition-all duration-500
        //                                 hover:rounded-lg text-lg
        //                                 `}
        //                             >
        //                                 <div className={`bg-project-blue-darker rounded-lg h-[100%] flex items-center justify-center
        //                                     transition-all duration-300
        //                                     `}>
        //                                     {brand} {model}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     ))
        //                 }
        //             </li>
        //             )
        //         )
        //     }
        // </ul>
        // <ul className="grid grid-auto-fit-cards gap-9">
        //     {
        //         modelsList["toyota"].map(model => (
        //             <div key={model} className={`hover:cursor-pointer transform z-0 mx-auto
        //                 transition-all duration-300 ease-in-out
        //                 hover:scale-110 hover:z-10 active:scale-105
        //                 `}
        //             >
        //                 <div className={`bordered-element p-2 h-[70px] w-[200px] flex flex-col justify-between
        //                     transition-all duration-500
        //                     hover:rounded-lg text-lg
        //                     `}
        //                 >
        //                     <div className={`bg-project-blue-darker rounded-lg h-[100%] flex items-center justify-center
        //                         transition-all duration-300
        //                         `}
        //                     >
        //                         Toyota {model}
        //                     </div>
        //                 </div>
        //             </div>
        //         ))
        //     }
        // </ul>
}