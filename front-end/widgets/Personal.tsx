'use client'

import { getAllResumes } from "@/features/personal/api"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/authContext"
import Link from "next/link"

interface User {
  id: string
  name: string
  email: string
}

interface Resume {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}

export default function Personal() {
  const router = useRouter()

  const { user, token, isAuth } = useAuth()

  const [setUser] = useState<User | null>(null)
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      try {
        setLoading(true)
        const resumesData = await getAllResumes()
        setResumes(resumesData)
      } catch (err) {
        setError("Помилка при завантаженні даних")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [token])

  useEffect(() => {
    if (!loading && !token) {
      router.push("/auth/login")
    }
  }, [token, loading])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="text-xl font-semibold text-slate-700">
          Завантаження...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">

            <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                {user?.name}
              </h1>

              <p className="text-lg text-blue-600 mb-6">
                {user?.email}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowEditModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Редагувати профіль
                </button>

                <button
                  onClick={() => router.push('/create-resume')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Створити резюме
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Мої резюме
            </h2>

            <div className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-xl">
              {resumes.length}
            </div>
          </div>

          {resumes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="text-6xl mb-6">
                📄
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                У вас ще немає резюме
              </h3>

              <p className="text-slate-500 mb-8 max-w-md">
                Створіть своє перше професійне резюме за допомогою AI Resume Builder
              </p>

              <button
                onClick={() => router.push('/create-resume')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition"
              >
                Створити резюме
              </button>
            </div>
          ) : (
            <div className="grid gap-5">
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition bg-slate-50"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {resume.title}
                      </h3>

                      <div className="flex flex-col gap-1 text-sm text-slate-500">
                        <span>
                          Створено:{" "}
                          {new Date(resume.createdAt).toLocaleDateString('uk-UA')}
                        </span>

                        <span>
                          Оновлено:{" "}
                          {new Date(resume.updatedAt).toLocaleDateString('uk-UA')}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-xl transition"
                      >
                        <Link href={`/resum/${resume.id}`}>
                        Переглянути
                        </Link>
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-xl transition"
                      >
                        Видалити
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {showEditModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">
                Редагування профілю
              </h2>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  defaultValue={user?.name}
                  className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ім'я"
                />

                <input
                  type="email"
                  defaultValue={user?.email}
                  className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 py-3 rounded-xl transition"
                >
                  Скасувати
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}