"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

import CarBody from "./CarBody"
import Budget from './Budget'
import FuelType from './FuelType'
import Gift from './Gift'
import PhoneInput from '../CallModal/PhoneInput'
import phoneIcon from "@/images/phone-icon-for-modal.png"
import userIcon from "@/images/user-icon-for-modal.png"
import Image from 'next/image'
import { useAppSelector } from "@/lib/redux/hooks"


export default function ChooseCar() {
    const swiperRef = useRef<SwiperCore | null>(null)
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [userInput, setUserInput] = useState<string>("")
    const [isUserInputFocused, setIsUserInputFocused] = useState<boolean>(false)
    // const isAllOptionsSelected = useRef<boolean>(false)
    const [isAllOptionsSelected, setIsAllOptionsSelected] = useState<boolean>(false)

    const selectedCarBody = useAppSelector((state) => state.selectedCarBodies.value)
    const selectedFuelType = useAppSelector((state) => state.selectedFuelTypes.value)
    const selectedBudget = useAppSelector((state) => state.selectedBudget.value)
    const selectedGift = useAppSelector((state) => state.selectedGifts.value)

    useEffect(() => {
        setIsAllOptionsSelected(carBodies.includes(selectedCarBody)
            && fuelTypes.includes(selectedFuelType)
            && budgets.includes(selectedBudget)
            && gifts.includes(selectedGift))
    }, [selectedCarBody, selectedFuelType, selectedBudget, selectedGift])

    const carBodies: string[] = ["crossover", "sedan", "hatchback", "minivan", "pickup", "universal", "coupe", "cabriolet", "unknown"]
    const budgets: string[] = ["10 000 — 20 000", "20 000 — 30 000", "30 000 — 40 000", "40 000 — 50 000", "Більше 50 000"]
    const fuelTypes: string[] = ["petrol", "diesel", "electric", "hybrid", "gas", "unknown"]
    const gifts: string[] = ["gift1", "gift2", "gift3", "gift4"]

    const handleNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext()
        }
    }

    const handleFormSubmit = useCallback(
        (e: React.FormEvent) => {
          e.preventDefault()
          const cleanPhoneNumber = phoneNumber.replace(/\D/g, "")
          console.log("Номер телефону (відформатований):", phoneNumber)
          console.log("Номер телефону (чистий):", cleanPhoneNumber)

          console.log("user name", userInput)

          setPhoneNumber("")
          setUserInput("")
        },
        [phoneNumber, userInput]
      )

    return(
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                speed={1200}
                navigation={true}
                modules={[ Navigation]}
                autoHeight
                className="mySwiper"
                style={{ width: '100%' }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >

                <SwiperSlide>
                    <p className='text-center text-2xl'>Кузов</p>
                    <div className="vsm:grid-small-auto-fit-cards msm:grid-auto-fit-cards">
                    {/* <div className="msm:grid msm:grid-auto-fit-cards msm:gap-9 vsm:gap-y-5 vsm:flex vsm:flex-wrap vsm:py-2"> */}
                        {
                            carBodies.map(carBody => <CarBody key={carBody} carBody={carBody} onNextSlideClick={handleNextSlide}/>)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='text-center text-2xl'>Тип палива</p>
                    <div className="vsm:grid-small-auto-fit-cards msm:grid-auto-fit-cards">
                        {
                            fuelTypes.map(fuelType => <FuelType key={fuelType} fuelType={fuelType} onNextSlideClick={handleNextSlide}/>)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='text-center text-2xl'>Бюджет</p>
                    <div className='grid grid-auto-fit-cards gap-9'>
                        {
                            budgets.map(budget => <Budget key={budget} budget={budget} onNextSlideClick={handleNextSlide}/>)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='text-center text-2xl'>Подарунок</p>
                    <div className='grid grid-auto-fit-cards gap-9'>
                        {
                            gifts.map(gift => <Gift key={gift} gift={gift} onNextSlideClick={handleNextSlide}/>)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {
                        isAllOptionsSelected ? <p className='text-center text-2xl mb-5'>Ваша заявка сформована!</p> :
                            <p className='text-center text-2xl mb-5 text-red-600 font-semibold'>Будь ласка, оберіть всі опції</p>
                    }
                    <form className={`flex justify-center flex-col gap-y-5
                        mx-auto max-w-[290px]
                        border border-solid border-project-white py-4 rounded-xl
                        ${isAllOptionsSelected ? "" : "opacity-50 pointer-events-none"}
                        `}
                        onSubmit={handleFormSubmit}
                    >
                        <div className="relative mx-auto">
                            <span className="absolute -left-14 top-14 -translate-y-1/2 scale-17">
                                <Image src={userIcon} alt="user icon" priority/>
                            </span>
                            <label
                                htmlFor="name-input"
                                className={`block text-project-white font-bold mb-1
                                    transition-all duration-500
                                    ${isUserInputFocused ? "text-xl" : "text-lg"}
                                `}
                            >
                                Ваше ім&apos;я
                            </label>
                            <input
                                id="name-input"
                                type="text"
                                className={`w-full px-4 py-2 text-project-blue bg-project-white rounded-lg pl-8
                                    border-2 border-transparent focus:outline-none
                                    text-[16px] min-h-[44px]
                                    transition-all duration-500 ease-in-out
                                    ${isUserInputFocused ? 'ring-2 ring-project-white' : ''}
                                `}
                                onFocus={() => setIsUserInputFocused(true)}
                                onBlur={() => setIsUserInputFocused(false)}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
                                    const filteredValue = event.target.value.replace(/[^a-zA-Zа-яА-ЯҐґІіЇїЄє\s-]/g, '')
                                    setUserInput(filteredValue)
                                }}
                                value={userInput}
                            />
                        </div>
                        <div className=' relative mx-auto'>
                            <span className="absolute -left-9 top-14 -translate-y-1/2 scale-25">
                                <Image src={phoneIcon} alt="phone icon" priority/>
                            </span>
                            <PhoneInput label="Ваш номер телефону"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                className="text-project-blue"
                            />
                        </div>
                        <div className="relative mx-auto">
                            <button
                                type="submit"
                                className={`bg-project-green my-1 rounded-xl text-project-white shadow-md text-2xl
                                py-3 px-8 font-semibold
                                transition-all duration-500
                                hover-supported:hover:scale-110 no-hover:active:scale-110
                                hover-supported:hover:opacity-90 no-hover:active:opacity-90
                                ${phoneNumber.replace(/\D/g, "").length < 12 || userInput.length < 2
                                    ? "cursor-not-allowed opacity-60"
                                    : ""}
                                `}
                                disabled={phoneNumber.replace(/\D/g, "").length < 12 || userInput.length < 2}
                            >
                                Надіслати
                            </button>
                        </div>
                    </form>
                </SwiperSlide>
            </Swiper>
        </>
    )
}