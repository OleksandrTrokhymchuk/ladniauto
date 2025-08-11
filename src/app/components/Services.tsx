"use client";

import Image from "next/image";
import servicesImage from "../../../public/images/Services/service2.jpg";
import { useRef, useState } from "react";
import CallModal from "@/app/components/CallModal/CallModal";
import { useAppDispatch } from "@/lib/redux/hooks";
import { openModal, closeModal, setServiceTypeValue } from "@/lib/redux/features/modal/modalSlice";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  //   const serviceTypeValue = useRef<string>("");
//   const [serviceTypeValue, setServiceTypeValue] = useState<string>("");

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="custom-container text-project-blue px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold uppercase mb-8 sm:mb-12 text-center lg:text-left">
          Пакети послуг
        </h2>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-4 sm:p-6 lg:flex lg:flex-col lg:justify-between lg:items-center">
                <div className="aspect-square w-full max-w-sm mx-auto lg:max-w-none">
                  <Image
                    priority
                    className="border border-solid border-project-blue p-3 w-full h-full object-cover rounded-lg"
                    src={servicesImage}
                    alt="service"
                  />
                </div>
                <button
                  className="hidden lg:block
                        text-project-white bg-project-blue w-3/4 py-5 rounded-lg
                        text-bold text-xl transitil-all duration-500
                        hover-supported:hover:bg-project-blue-darker no-hover:active:bg-project-blue-darker
                        hover-supported:hover:shadow-lg
                        hover-supported:hover:scale-105 no-hover:active:scale-105"
                  onClick={() => {
                    // serviceTypeValue.current = `"Базовий"`;
                    dispatch(setServiceTypeValue("Базовий"));
                    dispatch(openModal());
                  }}
                >
                  Замовити
                </button>
                <div className="mt-6 text-center lg:hidden">
                  <h4 className="font-bold text-2xl sm:text-3xl mb-2">
                    Пакет &quot;Базовий&quot;
                  </h4>
                  <p className="font-bold text-xl sm:text-2xl">
                    Ціна: <bdi>500</bdi> $
                  </p>
                </div>
              </div>
              <div className="flex-1 p-4 sm:p-6 lg:p-8">
                <div className="hidden lg:block mb-6">
                  <h4 className="font-bold text-3xl xl:text-4xl mb-3">
                    Пакет &quot;Базовий&quot;
                  </h4>
                  <p className="font-bold text-2xl xl:text-3xl">
                    Ціна: <bdi>500</bdi> $
                  </p>
                </div>
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Базовий пакет для тих, хто хоче самостійно займатися
                    ремонтом та оформленням, але цінує професійний супровід на
                    етапі покупки та доставки.
                  </p>
                </div>
                <div className="mb-6 sm:mb-8">
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                    Що входить:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start text-sm sm:text-base lg:text-lg">
                      <span className="font-bold mr-3">•</span>
                      <span>Пошук і перевірка лотів перед торгами</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base lg:text-lg">
                      <span className="font-bold mr-3">•</span>
                      <span>Участь в аукціоні</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base lg:text-lg">
                      <span className="font-bold mr-3">•</span>
                      <span>
                        Організація логістики: США – порт – Україна – ваше місто
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                    Результат:
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Ви отримуєте придбане авто, ключі та документи у своєму
                    місті. Далі — ремонтуєте та реєструєте самостійно.
                  </p>
                </div>
                <div className="lg:hidden flex justify-center mt-5">
                  <button
                    className="text-project-white bg-project-blue w-1/2 vsm:py-3 msm:py-5 rounded-lg
                            text-bold text-xl transitil-all duration-500
                            hover-supported:hover:bg-project-blue-darker no-hover:active:bg-project-blue-darker"
                    onClick={() => {
                      dispatch(setServiceTypeValue("Базовий"));

                      dispatch(openModal());
                    }}
                  >
                    Замовити
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-4 sm:p-6 lg:flex lg:flex-col lg:justify-between lg:items-center">
                <div className="aspect-square w-full max-w-sm mx-auto lg:max-w-none">
                  <Image
                    priority
                    className="border border-solid border-project-blue p-3 w-full h-full object-cover rounded-lg"
                    src={servicesImage}
                    alt="service"
                  />
                </div>
                <button
                  className="hidden lg:block
                        text-project-white bg-project-blue w-3/4 py-5 rounded-lg
                        text-bold text-xl transitil-all duration-500
                        hover-supported:hover:bg-project-blue-darker no-hover:active:bg-project-blue-darker
                        hover-supported:hover:shadow-lg
                        hover-supported:hover:scale-105 no-hover:active:scale-105"
                  onClick={() => {
                    dispatch(setServiceTypeValue("Під ключ з ремонтом"));

                    dispatch(openModal());
                  }}
                >
                  Замовити
                </button>
                <div className="mt-6 text-center lg:hidden">
                  <h4 className="font-bold text-2xl sm:text-3xl mb-2">
                    Пакет &quot;Під ключ з ремонтом&quot;
                  </h4>
                  <p className="font-bold text-xl sm:text-2xl">
                    Ціна: <bdi>1000</bdi> $
                  </p>
                </div>
              </div>
              <div className="flex-1 p-4 sm:p-6 lg:p-8">
                <div className="hidden lg:block mb-6">
                  <h4 className="font-bold text-3xl xl:text-4xl mb-3">
                    Пакет &quot;Під ключ з ремонтом&quot;
                  </h4>
                  <p className="font-bold text-2xl xl:text-3xl">
                    Ціна: <bdi>1000</bdi> $
                  </p>
                </div>
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Базовий пакет для тих, хто хоче самостійно займатися
                    ремонтом та оформленням, але цінує професійний супровід на
                    етапі покупки та доставки.
                  </p>
                </div>
                <div className="mb-6 sm:mb-8">
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                    Що входить:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start text-sm sm:text-base lg:text-lg">
                      <span className="font-bold mr-3">•</span>
                      <span>Пошук і перевірка лотів перед торгами</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base lg:text-lg">
                      <span className="font-bold mr-3">•</span>
                      <span>Пошук і перевірка лотів перед торгами</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base lg:text-lg">
                      <span className="font-bold mr-3">•</span>
                      <span>Пошук і перевірка лотів перед торгами</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base lg:text-lg">
                      <span className="font-bold mr-3">•</span>
                      <span>Участь в аукціоні</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base lg:text-lg">
                      <span className="font-bold mr-3">•</span>
                      <span>
                        Організація логістики: США – порт – Україна – ваше місто
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                    Результат:
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Ви отримуєте придбане авто, ключі та документи у своєму
                    місті. Далі — ремонтуєте та реєструєте самостійно.
                  </p>
                </div>
                <div className="lg:hidden flex justify-center mt-5">
                  <button
                    className="text-project-white bg-project-blue w-1/2 vsm:py-3 msm:py-5 rounded-lg
                            text-bold text-xl transitil-all duration-500
                            hover-supported:hover:bg-project-blue-darker no-hover:active:bg-project-blue-darker"
                    onClick={() => {
                      dispatch(setServiceTypeValue("Під ключ з ремонтом"));
                      dispatch(openModal());
                    }}
                  >
                    Замовити
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-3/4 mx-auto bg-opacity-30 bg-project-blue"></div>
        <div className="text-xl text-center flex flex-col gap-y-5 mt-5">
          <p className="font-bold">
            Обидва пакети передбачають постійний зв&apos;язок, прозору
            комунікацію і фокус на результат.
          </p>
          <p>
            Обирайте рівень залучення, який вам зручний — усе інше ми беремо на
            себе.
          </p>
        </div>
      </div>
      <CallModal
        isOpen={isModalOpen}
        onClose={() => {
          dispatch(closeModal())
        }}
        // serviceType="Базовий"
      />
    </>
  );
}
