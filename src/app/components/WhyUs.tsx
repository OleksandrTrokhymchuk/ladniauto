export default function WhyUs() {
  const advantages = [
    {
      id: "1",
      title: "Безпека покупки",
      description: "Автомобілі відбираються виключно від страхових компаній. Відсіюються сумнівні лоти, так звані \"ляльки\" та машини, що вже потрапляли на аукціони раніше. Це мінімізує ризики і забезпечує передбачуваний результат покупки.",
      icon: "✅"
    },
    {
      id: "2",
      title: "Закриті торги",
      description: "Надаємо варіанти авто із закритих Штатів для кращого вибору. Більше варіантів - більше шансів купити авто в потрібному бюджеті.",
      icon: "🔐"
    },
    {
      id: "3",
      title: "Прозорість витрат",
      description: "Перед участю в торгах клієнт отримує повний розрахунок витрат: вартість лоту, збори аукціону, логістика, розмитнення та орієнтовна вартість ремонту. Прозорий розрахунок від аукціону до отримання ключів та придбаного автомобіля.",
      icon: "📝"
    },
    {
      id: "4",
      title: "Ретельна перевірка",
      description: "Кожен автомобіль проходить кілька етапів перевірки: аналіз документів, перевірка історії ДТП, сервісного обслуговування, відповідності пробігу та попереднього потрапляння на аукціон.",
      icon: "🔍"
    }
  ];

  return (
    <>
      <div className="custom-container text-project-blue px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold uppercase mb-8 sm:mb-12 text-center lg:text-left">
          Чому варто працювати з нами?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`group relative bg-white border rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-500 transform border-gray-100
                vsm:w-[97%] mx-auto
                hover-supported:hover:-translate-y-2 no-hover:active:-translate-y-2
                hover-supported:hover:border-project-blue/60 no-hover:active:border-project-blue/60
                `}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-project-blue rounded-full flex items-center justify-center text-project-white font-bold text-lg shadow-lg">
                <span className="text-2xl">
                    {advantage.icon}
                </span>
              </div>


              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center lg:text-left lg:mt-1">
                 {advantage.title}
              </h3>

              <p className="text-project-blue text-sm sm:text-base lg:text-lg leading-relaxed">
                {advantage.description}
              </p>

             </div>
          ))}
        </div>
      </div>
    </>
  );
}