'use client'

import { useState } from 'react'
import { useResumeStore } from "@/store/useResumeStore"

export default function BuyPro() {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [loading, setLoading] = useState(false)

    const isPro = useResumeStore((s) => s.isPro)
    const togglePro = useResumeStore((s) => s.togglePro)

    const monthlyPrice = 9.99
    const yearlyPrice = 99.99
    const discount = ((1 - yearlyPrice / (monthlyPrice * 12)) * 100).toFixed(0)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            togglePro()
            console.log('Платіж оброблено')
        } finally {
            setLoading(false)
        }
    }

    const features = [
        { icon: '✨', text: '9 професійних шаблонів' },
        { icon: '🎨', text: 'Повна кастомізація дизайну' },
        { icon: '📥', text: 'Експорт у PDF та Word' },
        { icon: '☁️', text: 'Хмарне сховище' },
        { icon: '🔄', text: 'Синхронізація на всіх пристроях' },
        { icon: '⚡', text: 'Пріоритетна підтримка' },
    ]

    if (isPro) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 flex items-center justify-center">
                <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-200 text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Дякуємо!
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Ви успішно перейшли на Pro. Тепер у вас є доступ до всіх преміум-функцій!
                    </p>
                    <div className="space-y-3 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 justify-center">
                                <span className="text-xl">{feature.icon}</span>
                                <span className="text-gray-700 text-sm">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                    <a href="/create-resume" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-block">
                        
                        
                  
                        Почати з Pro шаблонами →
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Перейдіть на <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Pro</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Розблокуйте всі можливості ResumeBuilder з преміум-функціями
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Виберіть план</h2>

                        <div className="flex gap-4 mb-8 bg-gray-100 p-1 rounded-2xl">
                            <button
                                onClick={() => setBillingPeriod('monthly')}
                                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                                    billingPeriod === 'monthly'
                                        ? 'bg-white text-gray-900 shadow-md'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                Щомісяця
                            </button>
                            <button
                                onClick={() => setBillingPeriod('yearly')}
                                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all relative ${
                                    billingPeriod === 'yearly'
                                        ? 'bg-white text-gray-900 shadow-md'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                На рік
                                <span className="absolute -top-3 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Економія {discount}%
                                </span>
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 mb-8">
                            <div className="flex items-baseline justify-between mb-2">
                                <span className="text-5xl font-bold text-gray-900">
                                    ${billingPeriod === 'monthly' ? monthlyPrice : yearlyPrice}
                                </span>
                                <span className="text-gray-600 font-medium">
                                    {billingPeriod === 'monthly' ? '/місяць' : '/рік'}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                {billingPeriod === 'yearly' 
                                    ? `${(yearlyPrice / 12).toFixed(2)}$ на місяць при річній оплаті`
                                    : 'Скасування в будь-який час'}
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <h3 className="font-semibold text-gray-900">Що включено:</h3>
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <span className="text-gray-700">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <p className="text-sm text-blue-900">
                                ✓ 14 днів безплатно. Без прив'язки карти. Скасування в будь-який час.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Платіжні дані</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Повне ім'я
                                </label>
                                <input
                                    type="text"
                                    placeholder="Іван Петров"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email адреса
                                </label>
                                <input
                                    type="email"
                                    placeholder="ivan@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Номер карти
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="4242 4242 4242 4242"
                                        value={cardNumber}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\s/g, '').slice(0, 16)
                                            const formatted = val.replace(/(\d{4})(?=\d)/g, '$1 ')
                                            setCardNumber(formatted)
                                        }}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition pr-12 font-mono"
                                        required
                                    />
                                    <span className="absolute right-4 top-3.5 text-2xl">💳</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Використовуйте тестову карту: 4242 4242 4242 4242</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        MM/RR
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="12/25"
                                        value={expiryDate}
                                        onChange={(e) => {
                                            const val = e.target.value.slice(0, 5)
                                            if (val.length === 2 && !val.includes('/')) {
                                                setExpiryDate(val + '/')
                                            } else {
                                                setExpiryDate(val)
                                            }
                                        }}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition font-mono"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        CVC
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value.slice(0, 3))}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition font-mono"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="mt-1 w-4 h-4 accent-purple-600"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    Я погоджуюсь з <a href="#" className="text-purple-600 hover:underline">умовами використання</a> та <a href="#" className="text-purple-600 hover:underline">політикою конфіденційності</a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <span className="inline-block animate-spin">⌛</span>
                                        Обробка платежу...
                                    </>
                                ) : (
                                    <>
                                        🔒 Сплатити ${billingPeriod === 'monthly' ? monthlyPrice : yearlyPrice}
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                Платежі обробляються захищено через Stripe
                            </p>
                        </form>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                        <div className="text-4xl mb-3">🔒</div>
                        <h3 className="font-bold text-gray-900 mb-2">Безпечно</h3>
                        <p className="text-gray-600 text-sm">Шифрування SSL та захист PCI DSS</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                        <div className="text-4xl mb-3">⚡</div>
                        <h3 className="font-bold text-gray-900 mb-2">Миттєвий доступ</h3>
                        <p className="text-gray-600 text-sm">Отримайте Premium одразу після оплати</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                        <div className="text-4xl mb-3">❌</div>
                        <h3 className="font-bold text-gray-900 mb-2">Без прихованих зборів</h3>
                        <p className="text-gray-600 text-sm">Скасування в будь-який час, без штрафів</p>
                    </div>
                </div>
            </div>
        </div>
    )
}