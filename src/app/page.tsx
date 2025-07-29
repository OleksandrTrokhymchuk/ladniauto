import ChooseCar from "./components/ChooseCar/ChooseCar"

export default function Home() {
  return (
    <section className="min-h-screen bg-cover bg-center text-project-white
    vsm:pt-32 md:pt-48
    pb-20"
        style={{ backgroundImage: "url(/images/hero-background.jpg)" }}>
          <div className="custom-container vsm:text-lg lg:text-xl">
            <h1
              className="vsm:text-6xl lg:text-7xl font-bold text-project-blue mb-10"
            >
              Авто із США під ключ
            </h1>
            <div className="flex flex-col gap-y-6 mb-16">
              <h2>Ми не продаємо авто – ми продаємо спокій. Реалізовуємо автомобільні мрії клієнтів</h2>
              <p>Від аукціону США до видачі відновленого авто у вашому місті. Купуємо безпечні, а віддаємо готові. Ви обираєте – ми робимо результат. Чесно. Прозоро. Без зайвих турбот</p>
            </div>
            <div className="mb-8">
              <p>
                Залишайте заявку на персональну консультацію та безкоштовний підбір!
              </p>
              <button
                className="bg-project-green mt-5 rounded-full
                py-2 px-5
                transition-all duration-500
                hover:scale-110 hover:opacity-85"
              >
                Залишити заявку
              </button>
            </div>
            <div className="bg-project-blue w-full rounded-3xl p-5 bg-opacity-90 shadow-2xl">
              <p className="text-center text-4xl font-bold">Оберіть автомобіль</p>
              <div
                className="h-[1px] bg-project-white w-[95%] mx-auto my-4 bg-opacity-30"
              ></div>
              <ChooseCar/>
            </div>
        </div>
    </section>
  )
}
