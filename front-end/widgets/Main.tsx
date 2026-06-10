import Link from "next/link"
import { useAuth } from "@/context/authContext"

export default function Main() {
    const { isAuth } = useAuth()

    return (
        <div>
            {isAuth ? <section className="text-center py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
                <h1 className="text-5xl font-bold mb-6">
                    Створи професійне резюме за 2 хвилини
                </h1>
                <p className="text-gray-500 mb-8 text-lg">
                    AI генерує текст, оптимізує під ATS і покращує структуру
                </p>
                <Link href="/create-resume">
                    <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl text-lg">
                        Почати безкоштовно
                    </button>
                </Link>
            </section> :
                <section className="text-center py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
                    <h1 className="text-5xl font-bold mb-6">
                        Створи професійне резюме за 2 хвилини
                    </h1>
                    <p className="text-gray-500 mb-8 text-lg">
                        AI генерує текст, оптимізує під ATS і покращує структуру
                    </p>
                    <Link href="/auth/register">
                        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl text-lg">
                            Почати безкоштовно
                        </button>
                    </Link>
                </section>}
        </div>
    )
}