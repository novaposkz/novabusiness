'use client'
import React, { useState } from 'react'

type SellerForm = {
  companyName: string
  phone: string
  amount: string
  comment?: string
}

type BuyerForm = {
  fullName?: string
  phone: string
  iin: string
  amount: string
  term: string
}

export default function InstallmentPage() {
  const [tab, setTab] = useState<'seller'|'buyer'>('seller')
  const [seller, setSeller] = useState<SellerForm>({companyName:'', phone:'', amount:'', comment:''})
  const [buyer, setBuyer] = useState<BuyerForm>({fullName:'', phone:'', iin:'', amount:'', term:'3'})

  const handleSellerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // placeholder: send to backend later
    alert('Заявка продавца отправлена (локально). Данные:\n' + JSON.stringify(seller, null, 2))
  }

  const handleBuyerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // placeholder: will call /api/create-order later
    alert('Заявка покупателя отправлена (локально). Данные:\n' + JSON.stringify(buyer, null, 2))
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Беспроцентная рассрочка от Airba Pay</h1>
      <p className="text-lg text-gray-600 mb-8">
        Оформите рассрочку на выгодных условиях или подключите приём платежей в рассрочку для вашего бизнеса
      </p>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex space-x-2 mb-6">
          <button
            className={`px-4 py-2 rounded ${tab==='seller' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setTab('seller')}
          >
            Для бизнеса
          </button>
          <button
            className={`px-4 py-2 rounded ${tab==='buyer' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
            onClick={() => setTab('buyer')}
          >
            Оформить рассрочку
          </button>
        </div>

        {tab === 'seller' ? (
          <div>
            <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Для бизнеса</h3>
            <p className="mb-6 text-gray-700">
              Подключите приём платежей в рассрочку от Airba Pay и увеличьте средний чек вашего бизнеса до 3 раз.
              Ваши клиенты смогут оформить рассрочку прямо на вашем сайте или в точке продаж.
            </p>
            <h4 className="font-medium mb-2">Преимущества для вашего бизнеса:</h4>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Привлекайте больше клиентов возможностью покупки в рассрочку</li>
              <li>Получайте оплату сразу, без задержек</li>
              <li>Простая интеграция с вашим сайтом или CRM</li>
              <li>Гибкие условия сотрудничества</li>
            </ul>
          </div>
          
          <form onSubmit={handleSellerSubmit} className="space-y-4 border-t pt-6">
            <h4 className="text-lg font-medium">Оставьте заявку для подключения</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700">Название компании</label>
              <input required value={seller.companyName} onChange={e=>setSeller({...seller, companyName: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Телефон (10 цифр)</label>
              <input required value={seller.phone} onChange={e=>setSeller({...seller, phone: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2" placeholder="7051234567" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Средний чек (в тг)</label>
              <input required type="number" value={seller.amount} onChange={e=>setSeller({...seller, amount: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2" placeholder="100000" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Комментарий (необязательно)</label>
              <textarea value={seller.comment} onChange={e=>setSeller({...seller, comment: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2" rows={3} />
            </div>

            <div className="flex justify-end">
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded">Отправить запрос</button>
            </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Оформление рассрочки</h3>
              <p className="text-gray-700 mb-6">
                Оформите беспроцентную рассрочку на покупку товаров и услуг у наших партнёров.
                Быстрое одобрение, минимальный пакет документов, удобное погашение.
              </p>
            </div>
            <form onSubmit={handleBuyerSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ФИО (необязательно)</label>
                <input value={buyer.fullName} onChange={e=>setBuyer({...buyer, fullName: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Телефон (10 цифр)</label>
                <input required value={buyer.phone} onChange={e=>setBuyer({...buyer, phone: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2" placeholder="7051234567" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ИИН</label>
                <input required value={buyer.iin} onChange={e=>setBuyer({...buyer, iin: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Сумма (тг)</label>
                  <input required type="number" value={buyer.amount} onChange={e=>setBuyer({...buyer, amount: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Срок (мес)</label>
                  <select value={buyer.term} onChange={e=>setBuyer({...buyer, term: e.target.value})} className="mt-1 block w-full rounded border px-3 py-2">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded">Оформить рассрочку</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
