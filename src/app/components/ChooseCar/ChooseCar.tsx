"use client"

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

import CarBody from "./CarBody"
import Budget from './Budget'
import FuelType from './FuelType'


export default function ChooseCar() {
    const carBodies: string[] = ["crossover", "sedan", "hatchback", "minivan", "pickup", "universal", "coupe", "cabriolet", "unknown"]
    const budgets: string[] = ["10.000 - 20.000", "20.000 - 30.000", "30.000 - 40.000", "40.000 - 50.000", "Більше 50.000"]
    const fuelTypes: string[] = ["petrol", "diesel", "electric", "hybrid", "gas", "unknown"]

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
            >
                <SwiperSlide>
                    <p className='text-center text-2xl'>Тип палива</p>
                    <div className="vsm:grid-small-auto-fit-cards msm:grid-auto-fit-cards">
                        {
                            fuelTypes.map(fuelType => <FuelType key={fuelType} fuelType={fuelType}/>)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='text-center text-2xl'>Кузов</p>
                    <div className="vsm:grid-small-auto-fit-cards msm:grid-auto-fit-cards">
                    {/* <div className="msm:grid msm:grid-auto-fit-cards msm:gap-9 vsm:gap-y-5 vsm:flex vsm:flex-wrap vsm:py-2"> */}
                        {
                            carBodies.map(carBody => <CarBody key={carBody} carBody={carBody}/>)
                        }
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <p className='text-center text-2xl'>Бюджет</p>
                    <div className='grid grid-auto-fit-cards gap-9'>
                        {
                            budgets.map(budget => <Budget key={budget} budget={budget}/>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}