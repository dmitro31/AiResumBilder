"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link" // Використовуємо Link для швидкої навігації
import { loginUser } from "./api"
import { useAuth } from "@/context/authContext"

export default function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
        const data = await loginUser(email, password)
        
        if (data && data.accessToken && data.user) {
            login(data.accessToken, data.refreshToken, data.user)
            router.push("/")
            router.refresh() 
        } else {
            throw new Error("Некоректна відповідь від сервера")
        }
    } catch (err: any) {
        const message = err.response?.data?.message || err.message || "Помилка входу"
        setError(message)
    } finally {
        setLoading(false)
    }
}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="mb-8 text-center sm:text-left">
                    <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Увійти</h1>
                    <p className="text-sm text-gray-500 mt-1">Введіть свої дані для доступу</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="ivan@example.com"
                            required
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-700">Пароль</label>
                            <Link href="/auth/forgot-password"  className="text-xs text-indigo-600 hover:underline">
                                Забули пароль?
                            </Link>
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                        />
                    </div>

                    {error && (
                        <div className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed px-4 py-2.5 rounded-lg transition-colors mt-2"
                    >
                        {loading ? "Вхід..." : "Увійти"}
                    </button>

                    <p className="text-sm text-center text-gray-500 mt-2">
                       Не маєте акаунта?{" "}
                        <Link href="/auth/register" className="text-indigo-600 hover:underline font-medium">
                            Реєстрація
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
