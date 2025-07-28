import ChooseCar from "./components/ChooseCar/ChooseCar"

export default function Home() {
  return (
    <section className="min-h-screen bg-cover bg-center text-project-white pt-24 pb-20"
        style={{ backgroundImage: "url(/images/hero-background.jpg)" }}>
          <div className="custom-container">
            <h1
              className="text-7xl font-bold text-project-blue"
            >
              Авто із США під ключ
            </h1>
            <h2 className="my-5">Ми не продаємо авто – ми продаємо спокій. Реалізовуємо автомобільні мрії клієнтів</h2>
            <p className="my-5">Від аукціону США до видачі відновленого авто у вашому місті. Купуємо безпечні, а віддаємо готові. Ви обираєте – ми робимо результат. Чесно. Прозоро. Без зайвих турбот</p>
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
