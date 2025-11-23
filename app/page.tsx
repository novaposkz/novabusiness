export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-4xl p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-teal-500">Скоро</span> открытие!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Мы готовим для вас что-то особенное. Оставайтесь с нами!
        </p>
        <div className="animate-pulse">
          <div className="h-2 bg-teal-200 rounded-full w-1/2 mx-auto mb-2.5"></div>
          <div className="h-2 bg-teal-100 rounded-full w-1/3 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}
