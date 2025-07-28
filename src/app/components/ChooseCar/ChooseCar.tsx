"use client"

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

import CarBody from "./CarBody"
import Brand from './Brand'

import carsData from "@/app/data/cars.json"
import { toggle } from "@/lib/redux/features/selectedBrands/selectedBrandsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import Model from './Model'


export default function ChooseCar() {
    const selectedCarBodies = useAppSelector((state) => state.selectedCarBodies.value)
    const selectedModels = useAppSelector((state) => state.selectedModels.value)
    const selectedBrands = useAppSelector((state) => state.selectedBrands.value)


    const dispatch = useAppDispatch()
    const uniqueBrands = new Set()
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

                <SwiperSlide >
                    <div className="grid grid-auto-fit-cards gap-9">
                        <CarBody carBody="crossover"/>
                        <CarBody carBody="sedan"/>
                        <CarBody carBody="hatchback"/>
                        <CarBody carBody="minivan"/>
                        <CarBody carBody="pickup"/>
                        <CarBody carBody="universal"/>
                        {/* <CarBody carBody="coupe"/> */}
                        {/* <CarBody carBody="cabriolet"/> */}

                        {/* <CarBody carBody="unknown"/> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="grid grid-auto-fit-cards gap-9">
                            {
                                selectedCarBodies.map(selectedCarBody => (
                                    Object.keys(carsData[selectedCarBody as keyof typeof carsData]).map(key => {
                                        if (!uniqueBrands.has(key)) {
                                            uniqueBrands.add(key)
                                            return <Brand key={key} brand={key}/>
                                        }
                                        return null
                                    }
                                ))).flat().filter(Boolean)
                            }
                        </div>
                        {/* <Brand brand="unknown"/> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-auto-fit-cards gap-9'>
                        {selectedCarBodies.length > 0 && selectedBrands.length > 0 ? (
                            Array.from(new Set(
                                selectedCarBodies.flatMap(selectedCarBody => {
                                    const brandsForBody = carsData[selectedCarBody as keyof typeof carsData];

                                    if (!brandsForBody) {
                                        return []
                                    }

                                    return selectedBrands.flatMap(selectedBrand => {
                                        const modelsForBrand = brandsForBody[selectedBrand as keyof typeof brandsForBody];

                                        if (!modelsForBrand) {
                                            return []
                                        }

                                        return Object.keys(modelsForBrand);
                                    });
                                })
                            )).map(modelName => (
                                <div key={modelName} className='mx-auto'>
                                    <Model model={modelName}/>
                                </div>
                            ))
                        ) : (
                            <div>Будь ласка, виберіть тип(и) кузова та марку(и).</div>
                        )}
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}