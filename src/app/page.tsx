import ChooseCar from "./components/ChooseCar/ChooseCar"

export default function Home() {
  return (
    <section className="min-h-screen bg-cover bg-center text-project-white pt-20 pb-20"
        style={{ backgroundImage: "url(/images/IMG_6936.jpg)" }}>
          <div className="custom-container">
            <h1
              className="text-7xl font-bold text-project-blue"
            >
              Авто із США під ключ.
            </h1>
            <h2 className="my-5">Ми не продаємо авто – ми продаємо спокій. Реалізовуємо автомобільні мрії клієнтів.</h2>
            <p className="my-5">Від аукціону США до видачі відновленого авто у вашому місті. Купуємо безпечні, а віддаємо готові. Ви обираєте – ми робимо результат. Чесно. Прозоро. Без зайвих турбот.</p>
            <div className="bg-project-blue w-full rounded-3xl p-5 bg-opacity-90">
              <p className="text-center mb-3 text-3xl font-bold">Оберіть автомобіль</p>
              <ChooseCar/>
            </div>
        </div>
    </section>
  )
}
