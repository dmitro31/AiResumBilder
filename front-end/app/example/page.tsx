'use client'

import { useState } from 'react'
import {
  MinimalPro,
  SidebarPro,
  ModernPro,
  ExecutivePro,
  ATSCleanPro,
  CorporatePro,
  NeoBrutalismPro,
  ElegantSerifPro,
  StartupPro
} from '@/features/templates/Pro'

const mockData = {
  name: 'Іван Петренко',
  position: 'Full Stack Developer',
  about: 'Розробник з досвідом створення веб-додатків на React, Node.js та PostgreSQL.',
  contact: 'ivan.petrenko@email.com | +380 50 000 0000',
  skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  experience: [
    {
      position: 'Frontend Developer',
      company: 'Tech Corp',
      duration: '2023 - 2025',
      highlights: ['Розробка UI', 'Оптимізація продуктивності']
    },
    'Фріланс проєкти'
  ]
}

const templates = [
  { id: 'minimal', name: 'Minimal', badge: 'Popular', ats: 98, Component: MinimalPro },
  { id: 'sidebar', name: 'Sidebar', badge: 'Modern', ats: 96, Component: SidebarPro },
  { id: 'modern', name: 'Modern', badge: 'Trending', ats: 97, Component: ModernPro },
  { id: 'executive', name: 'Executive', badge: 'Professional', ats: 95, Component: ExecutivePro },
  { id: 'ats', name: 'ATS Clean', badge: 'ATS', ats: 100, Component: ATSCleanPro },
  { id: 'corporate', name: 'Corporate', badge: 'Business', ats: 94, Component: CorporatePro },
  { id: 'neo', name: 'Neo Brutalism', badge: 'Creative', ats: 91, Component: NeoBrutalismPro },
  { id: 'serif', name: 'Elegant Serif', badge: 'Classic', ats: 93, Component: ElegantSerifPro },
  { id: 'startup', name: 'Startup', badge: 'Tech', ats: 97, Component: StartupPro }
]

export default function ResumeExamplesPage() {
  const [active, setActive] = useState(0)
  const ActiveTemplate = templates[active].Component

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-14">
          <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-6">
            9 Professional Templates
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">Resume Templates</h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mt-5">
            Professional resume templates designed to help you get hired faster and stand out from other candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="text-3xl sm:text-4xl font-bold">9</div>
            <div className="text-zinc-500 mt-2">Templates</div>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="text-3xl sm:text-4xl font-bold">98%</div>
            <div className="text-zinc-500 mt-2">ATS Friendly</div>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="text-3xl sm:text-4xl font-bold">10K+</div>
            <div className="text-zinc-500 mt-2">Resumes Created</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8">
          <div className="space-y-4">
            {templates.map((template, index) => (
              <button
                key={template.id}
                onClick={() => setActive(index)}
                className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 ${
                  active === index
                    ? 'border-violet-500 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.2)]'
                    : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs">{template.badge}</span>
                  <span className="text-xs text-zinc-500">ATS {template.ats}%</span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{template.name}</h3>
                <p className="text-zinc-500 text-xs sm:text-sm mt-2">Professional resume layout for modern hiring.</p>
              </button>
            ))}
          </div>

          <div className="sticky top-24 h-fit">
            <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/40 p-6 overflow-x-auto max-h-[85vh]">
              <div className="flex justify-between items-center mb-5">
                <p className="text-zinc-400">Preview · {templates[active].name}</p>
                <div className="px-3 py-1 rounded-full bg-zinc-800 text-xs">A4</div>
              </div>
              <div className="flex justify-center">
                <div className="scale-[0.72] origin-top">
                  <ActiveTemplate {...mockData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 rounded-[40px] border border-zinc-800 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to build your resume?</h2>
          <p className="text-zinc-300 mb-6 sm:mb-8">Create a professional resume in minutes.</p>
          <a href="/create-resume" className="inline-flex px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-medium">
            Create Resume
          </a>
        </div>
      </div>
    </div>
  )
}
``