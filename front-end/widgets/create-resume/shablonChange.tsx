'use client'

import Link from 'next/link'
import { useResumeStore } from '@/store/useResumeStore'
import { MinimalPro , SidebarPro , ModernPro , ExecutivePro , ATSCleanPro , CorporatePro , NeoBrutalismPro , ElegantSerifPro , StartupPro } from '@/features/templates/Pro'
import { Minimal , Sidebar , Modern , Executive } from '@/features/templates/Free'

  export interface ExperienceItem {
    company?: string
    position?: string
    duration?: string
    highlights?: string[]
  }

export interface ResumeProps {
  name: string
  position: string
  about: string
  contact: string
  skills: string[]
  experience: (string | ExperienceItem)[]
}

export default function ShablonChange() {
  const template = useResumeStore((s) => s.template)
  const setTemplate = useResumeStore((s) => s.setTemplate)
  const isPro = useResumeStore((s) => s.isPro)

  const templates = [
    { name: 'Minimal', free: <Minimal />, pro: <MinimalPro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Чистий мінімалістичний дизайн', proOnly: false },
    { name: 'Sidebar', free: <Sidebar />, pro: <SidebarPro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Темна бічна панель', proOnly: false },
    { name: 'Modern', free: <Modern />, pro: <ModernPro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Модерний з градієнтами', proOnly: false },
    { name: 'Executive', free: <Executive />, pro: <ExecutivePro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Професійний синій дизайн', proOnly: false },
    { name: 'ATSClean', free: <Minimal />, pro: <ATSCleanPro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Оптимізовано для ATS систем', proOnly: true },
    { name: 'Corporate', free: <Minimal />, pro: <CorporatePro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Корпоративний стиль', proOnly: true },
    { name: 'NeoBrutalism', free: <Minimal />, pro: <NeoBrutalismPro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Смілий необруталізм', proOnly: true },
    { name: 'ElegantSerif', free: <Minimal />, pro: <ElegantSerifPro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Елегантні серифні шрифти', proOnly: true },
    { name: 'Startup', free: <Minimal />, pro: <StartupPro name="" position="" about="" contact="" skills={[]} experience={[]} />, description: 'Темний glassmorphism', proOnly: true },
  ]

  const currentTemplate = templates.find((t) => t.name === template)

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      
      {/* Основний блок */}
      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{template}</h1>
              <p className="text-gray-600 mt-2">{currentTemplate?.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className={`px-4 py-2 rounded-full text-xs font-bold ${isPro ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black' : 'bg-gray-200 text-gray-700'}`}>
                {isPro ? '⭐ PRO' : 'FREE'}
              </div>
              {!isPro && currentTemplate?.proOnly && (
                <Link href="/buy-pro" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🔓 Розблокувати
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-start bg-white rounded-3xl shadow-xl p-4 sm:p-8">
          <div className="w-full max-w-[794px]">
            {currentTemplate && (isPro ? currentTemplate.pro : currentTemplate.free)}
          </div>
        </div>
      </div>

      {/* Бокова панель */}
      <div className="w-full lg:w-80 flex flex-col">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 lg:sticky lg:top-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Шаблони</h2>
            <p className="text-sm text-gray-600">Виберіть дизайн для вашого резюме</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6 max-h-96 overflow-y-auto">
            {templates.map((t) => {
              const locked = !isPro && t.proOnly
              return (
                <button
                  key={t.name}
                  disabled={locked}
                  onClick={() => { if (!locked) setTemplate(t.name) }}
                  className={`relative h-24 sm:h-28 rounded-2xl border-2 overflow-hidden transition-all duration-300 group ${template === t.name ? 'border-gray-900 scale-105 shadow-lg' : 'border-gray-200 hover:border-gray-400'} ${locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 group-hover:from-gray-100 group-hover:to-gray-300 transition-all"></div>
                  {t.proOnly && (
                    <span className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-[9px] rounded-full font-bold shadow-md z-20">PRO</span>
                  )}
                  {locked && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 group-hover:bg-black/50 transition-all">
                      <span className="text-white font-bold text-sm">🔒 Locked</span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-3">
                    <div className="text-xs font-bold text-gray-900">{t.name}</div>
                  </div>
                </button>
              )
            })}
          </div>
          <Link href="/create-resume/info" className="w-full flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white py-3 sm:py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 mb-4">
            Продовжити →
          </Link>
          {!isPro && (
            <Link href="/buy-pro" className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105">
              ✨ Перейти на PRO
            </Link>
          )}
          <div className={`mt-4 p-3 rounded-xl border ${isPro ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
            <p className={`text-xs font-medium ${isPro ? 'text-green-900' : 'text-blue-900'}`}>
              {isPro ? '✅ Ви маєте доступ до всіх PRO шаблонів' : '💡 Активуйте PRO для додаткових дизайнів'}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

