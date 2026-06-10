export default function HowWork() {
  const steps = [
    {
      name: "Виберіть шаблон",
      text: "Виберіть професійний шаблон, який відповідає вашому стилю.",
      icon: "📄",
    },
    {
      name: "Додайте інформацію",
      text: "Дайте відповідь на кілька запитань про ваш досвід",
      icon: "✍️",
    },
    {
      name: "AI генерація",
      text: "Наш ШІ створює адаптоване резюме, зручне для ATS",
      icon: "🤖",
    },
    {
      name: "Завантажте резюме",
      text: "Подайте заявку на роботу своєї мрії",
      icon: "⬇️",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Як це працює</h2>
          <p className="text-gray-500 mt-2">
            Створіть резюме всього за 4 кроки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{t.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}