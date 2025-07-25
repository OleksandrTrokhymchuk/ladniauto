import CarCard from "./components/CarCard"

export default function Home() {
  return (
    <section className="min-h-screen bg-cover bg-center text-project-white pt-20 pb-20"
        style={{ backgroundImage: "url(/images/IMG_6936.jpg)" }}>
          <div className="custom-container">
            <h2
              className="text-7xl font-bold text-project-blue"
            >
              Авто зі США з вигодою до 40% від ринкової ціни в Україні
            </h2>
            <p className="my-5">Пройдість тест і отримайте професійну консультацію з ціною на автомобіль мрії</p>
            <div className="bg-project-blue w-full rounded-3xl p-5 bg-opacity-90">
              <p className="text-center mb-5 text-3xl font-bold">Оберіть тип кузова</p>
              <div className="grid grid-auto-fit-cards gap-6">
                <CarCard carType="hatchback"/>

                <CarCard carType="sedan"/>
                <CarCard carType="hatchback"/>

                <CarCard carType="sedan"/>
                <CarCard carType="hatchback"/>

                <CarCard carType="sedan"/>
                <CarCard carType="hatchback"/>

                <CarCard carType="sedan"/>
                <CarCard carType="hatchback"/>
              </div>
            </div>
        </div>
    </section>
  )
}
