"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { registerUser } from "./api"
import { useAuth } from "@/context/authContext"

export default function RegisterForm() {
    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { login } = useAuth()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setError("")
        setLoading(true)

        try {
            const data = await registerUser(
                name,
                email,
                password
            )

            if (
                data?.accessToken &&
                data?.refreshToken &&
                data?.user
            ) {
                login(
                    data.accessToken,
                    data.refreshToken,
                    data.user
                )

                router.push("/")
                router.refresh()
            } else {
                throw new Error(
                    "Сервер повернув некоректні дані"
                )
            }
            console.log({
                name,
                email,
                password,
            })
        } catch (err: any) {
            setError(
                err.message || "Помилка реєстрації"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                        Реєстрація
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Створіть акаунт щоб почати
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Ім'я
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Пароль
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            minLength={8}
                            placeholder="Мінімум 8 символів"
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
                        className="w-full flex items-center justify-center text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed px-4 py-2.5 rounded-lg transition-colors mt-2"
                    >
                        {loading
                            ? "Реєстрація..."
                            : "Зареєструватись"}
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        Вже маєте акаунт?{" "}
                        <Link
                            href="/auth/login"
                            className="text-indigo-600 hover:underline font-medium"
                        >
                            Увійти
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}