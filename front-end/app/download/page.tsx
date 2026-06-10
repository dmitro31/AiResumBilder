'use client'

import Download from "@/features/Download"
import Result from "@/widgets/create-resume/result"

export default function Page() {
    return (
        <div
            className="min-h-screen py-12 px-4"
            style={{
                background: "linear-gradient(to bottom right, #f9fafb, #f3f4f6)"
            }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Ваше резюме готове
                    </h1>

                    <p className="text-lg text-gray-600">
                        Перегляньте та завантажте ваше резюме у зручному форматі
                    </p>
                </div>

                <div className="flex gap-8">
                    <div className="flex-1 flex justify-center bg-white rounded-2xl shadow-xl p-4">
                        <div
                            id="resume-preview"
                            className="w-[794px] bg-white text-black"
                        >
                            <Result />
                        </div>
                    </div>

                    <div className="w-72">
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                Завантажити
                            </h2>

                            <Download />

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                                    Наступні кроки
                                </h3>

                                <ul className="space-y-2.5 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5 font-bold">
                                            ✓
                                        </span>

                                        <span>
                                            Завантажте резюме
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5 font-bold">
                                            ✓
                                        </span>

                                        <span>
                                            Відредагуйте за потребою
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5 font-bold">
                                            ✓
                                        </span>

                                        <span>
                                            Надсилайте роботодавцям
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200 space-y-2.5">
                                <a
                                    href="/create-resume"
                                    className="w-full flex items-center justify-center px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition"
                                >
                                    ← Змінити шаблон
                                </a>

                                <a
                                    href="/"
                                    className="w-full flex items-center justify-center px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
                                >
                                    На головну
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}