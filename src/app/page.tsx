"use client"



import { useEffect, useState } from "react"
import ChooseCar from "./components/ChooseCar/ChooseCar"
import CallModal from "@/app/components/CallModal/CallModal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
       if (isModalOpen) {
           document.body.style.overflow = 'hidden'
       } else {
           document.body.style.overflow = ''
       }
       return () => {
           document.body.style.overflow = ''
       }
   }, [isModalOpen])


  return (
    <section className="min-h-screen bg-cover bg-center text-project-white
    vsm:pt-32 md:pt-48
    pb-20"
        style={{ backgroundImage: "url(/images/hero-background.jpg)" }}>
          <div className="custom-container vsm:text-lg lg:text-xl">
            <div className="vsm:min-h-[calc(100vh-112px)] md:min-h-0 md:mb-20">
              <h1
                className="vsm:text-6xl lg:text-7xl font-bold text-project-blue mb-10"
              >
                Авто із США під ключ
              </h1>
              <div className="flex flex-col gap-y-6 mb-16">
                <h2>Ми не продаємо авто – ми продаємо спокій. Реалізовуємо автомобільні мрії клієнтів.</h2>
                <p>Від аукціону США до видачі відновленого авто у вашому місті. Купуємо безпечні, а віддаємо готові. Ви обираєте – ми робимо результат. Чесно. Прозоро. Без зайвих турбот.</p>
              </div>
              <div className="">
                <p className="font-semibold text-2xl mb-4"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Залишайте заявку на персональну консультацію та безкоштовний підбір!
                </p>
                <div className="flex justify-center">
                  <button
                    className="bg-project-green mt-1 rounded-2xl
                    shadow-md
                    py-5 px-10 font-bold
                    text-2xl
                    transition-all duration-500
                    hover-supported:hover:scale-110 no-hover:active:scale-110
                    hover-supported:hover:opacity-90 no-hover:active:opacity-90
                    "
                    onClick={() => setIsModalOpen(true)}
                  >
                    Залишити заявку
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-project-blue w-full rounded-3xl p-5 bg-opacity-90 shadow-2xl">
              <p className="text-center text-4xl font-bold">Оберіть автомобіль</p>
              <div
                className="h-[1px] bg-project-white w-[95%] mx-auto my-4 bg-opacity-30"
              ></div>
              <ChooseCar/>
            </div>
        </div>
        <CallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </section>
  )
}
