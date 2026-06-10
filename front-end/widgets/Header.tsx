'use client'

import Link from 'next/link'
import { useAuth } from '@/context/authContext'
import { useResumeStore } from '@/store/useResumeStore'
import { useState } from 'react'

export default function Header() {
    const { isAuth } = useAuth()

    const {
        isPro,
        template,
        formData
    } = useResumeStore()

    const userLetter =
        formData?.name
            ?.charAt(0)
            ?.toUpperCase() || 'U'

    const [menuOpen, setMenuOpen] =
        useState(false)

    const closeMenu = () =>
        setMenuOpen(false)

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="h-16 flex items-center justify-between">

                    {/* LEFT */}
                    <div className="flex items-center gap-4 lg:gap-10">

                        {/* LOGO */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 shrink-0"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#1a1a2e] flex items-center justify-center shrink-0">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="6"
                                        height="2"
                                        rx="1"
                                        fill="white"
                                        opacity="0.9"
                                    />
                                    <rect
                                        x="2"
                                        y="6"
                                        width="10"
                                        height="2"
                                        rx="1"
                                        fill="white"
                                        opacity="0.7"
                                    />
                                    <rect
                                        x="2"
                                        y="10"
                                        width="8"
                                        height="2"
                                        rx="1"
                                        fill="white"
                                        opacity="0.7"
                                    />
                                    <rect
                                        x="2"
                                        y="14"
                                        width="5"
                                        height="2"
                                        rx="1"
                                        fill="white"
                                        opacity="0.5"
                                    />
                                    <circle
                                        cx="14"
                                        cy="5"
                                        r="2.5"
                                        stroke="#818CF8"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M14 8v5"
                                        stroke="#818CF8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div className="hidden xs:block">
                                <h1
                                    style={{
                                        fontFamily:
                                            'var(--font-playfair)'
                                    }}
                                    className="text-lg font-semibold text-gray-900 leading-none"
                                >
                                    Resume{' '}
                                    <span className="text-indigo-600">
                                        AI
                                    </span>
                                </h1>

                                <p className="text-[10px] text-gray-500">
                                    AI Resume Builder
                                </p>
                            </div>
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex items-center gap-2">
                            <Link
                                href="/personal"
                                className="text-sm text-gray-600 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-xl transition"
                            >
                                Персональні дані
                            </Link>

                            <Link
                                href="/example"
                                className="text-sm text-gray-600 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-xl transition"
                            >
                                Приклади
                            </Link>
                        </nav>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-2 sm:gap-3">

                        {/* USER INFO */}
                        {isAuth && (
                            <div className="hidden lg:flex items-center gap-2 text-sm">
                                <span className="text-gray-500">
                                    🎨 {template}
                                </span>

                                {isPro && (
                                    <>
                                        <span className="text-gray-300">
                                            •
                                        </span>

                                        <span className="font-semibold text-yellow-600">
                                            ⭐ PRO
                                        </span>
                                    </>
                                )}
                            </div>
                        )}

                        {isAuth ? (
                            <>
                                {!isPro && (
                                    <Link
                                        href="/buy-pro"
                                        className="hidden sm:block"
                                    >
                                        <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition">
                                            ✨ PRO
                                        </button>
                                    </Link>
                                )}

                                <Link
                                    href="/create-resume"
                                    className="hidden sm:block"
                                >
                                    <button className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition">
                                        Створити
                                    </button>
                                </Link>

                                <Link href="/personal">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-105 transition">
                                        {
                                            userLetter
                                        }
                                    </div>
                                </Link>
                            </>
                        ) : (
                            <div className="hidden sm:flex items-center gap-2">
                                <Link href="/auth/login">
                                    <button className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm font-medium">
                                        Увійти
                                    </button>
                                </Link>

                                <Link href="/auth/register">
                                    <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium">
                                        Реєстрація
                                    </button>
                                </Link>
                            </div>
                        )}

                        {/* BURGER */}
                        <button
                            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition"
                            onClick={() =>
                                setMenuOpen(
                                    !menuOpen
                                )
                            }
                        >
                            <svg
                                width="22"
                                height="22"
                                fill="none"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path
                                        d="M6 6L18 18M18 6L6 18"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                ) : (
                                    <path
                                        d="M3 6h16M3 12h16M3 18h16"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-5 pt-4 shadow-lg">

                    <div className="flex flex-col gap-2">

                        <Link
                            href="/personal"
                            onClick={
                                closeMenu
                            }
                            className="px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 transition"
                        >
                            Персональні дані
                        </Link>

                        <Link
                            href="/example"
                            onClick={
                                closeMenu
                            }
                            className="px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 transition"
                        >
                            Приклади
                        </Link>

                        {isAuth ? (
                            <>
                                <Link
                                    href="/create-resume"
                                    onClick={
                                        closeMenu
                                    }
                                >
                                    <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium mt-2">
                                        Створити резюме
                                    </button>
                                </Link>

                                {!isPro && (
                                    <Link
                                        href="/buy-pro"
                                        onClick={
                                            closeMenu
                                        }
                                    >
                                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium">
                                            ✨ Купити PRO
                                        </button>
                                    </Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/auth/login"
                                    onClick={
                                        closeMenu
                                    }
                                >
                                    <button className="w-full border border-gray-200 py-3 rounded-xl">
                                        Увійти
                                    </button>
                                </Link>

                                <Link
                                    href="/auth/register"
                                    onClick={
                                        closeMenu
                                    }
                                >
                                    <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
                                        Реєстрація
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}