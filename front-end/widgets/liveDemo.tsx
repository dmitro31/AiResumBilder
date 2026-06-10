'use client'

import { useState } from "react"
import EmailType from "@/features/LiveDemo/email"
import ExperienceType from "@/features/LiveDemo/experience"
import NameType from "@/features/LiveDemo/name"
import SkillType from "@/features/LiveDemo/skill"

export default function LiveDemo() {
    const [template, setTemplate] = useState('Minimal')

    const renderTemplate = () => {
        switch (template) {
            case 'Minimal':
                return (
                    <div className="w-full bg-white p-6 sm:p-8 shadow-sm border border-gray-100 min-h-[400px] rounded-lg">
                        <h1 className="text-xl sm:text-2xl font-bold"><NameType /></h1>
                        <p className="text-gray-500 border-b pb-4 text-sm sm:text-base">Frontend Developer</p>
                        <div className="mt-6">
                            <h2 className="font-semibold text-xs sm:text-sm text-gray-400 uppercase">Досвід</h2>
                            <div className="mt-1"><ExperienceType /></div>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-semibold text-xs sm:text-sm text-gray-400 uppercase">Навички</h2>
                            <div className="mt-1"><SkillType /></div>
                        </div>
                    </div>
                )
            case 'Sidebar':
                return (
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 shadow-lg min-h-[400px] overflow-hidden rounded-lg">
                        <div className="bg-gray-900 text-white p-4 sm:p-6 col-span-1">
                            <div className="mb-6 sm:mb-8"><NameType /></div>
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <h2 className="text-xs text-gray-400 uppercase">Контакти</h2>
                                    <div className="text-xs truncate mt-1"><EmailType/></div>
                                </div>
                                <div>
                                    <h2 className="text-xs text-gray-400 uppercase">Навички</h2>
                                    <div className="text-xs mt-1"><SkillType /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 p-4 sm:p-6 bg-white">
                            <h2 className="font-semibold border-b pb-2 text-sm sm:text-base">Професійний досвід</h2>
                            <div className="mt-4 text-xs sm:text-sm text-gray-600"><ExperienceType /></div>
                        </div>
                    </div>
                )
            case 'Modern':
                return (
                    <div className="w-full p-4 sm:p-6 bg-gray-50 min-h-[400px] rounded-xl">
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-blue-100">
                            <h1 className="text-xl sm:text-2xl font-bold"><NameType/></h1>
                            <p className="text-blue-600 font-medium text-sm sm:text-base">Fullstack Developer</p>
                        </div>
                        <div className="mt-6 grid gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <h2 className="text-xs font-bold text-gray-400 uppercase">Досвід</h2>
                                <div className="mt-1"><ExperienceType/></div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <h2 className="text-xs font-bold text-gray-400 uppercase">Навички</h2>
                                <div className="mt-1"><SkillType/></div>
                            </div>
                        </div>
                    </div>
                )
            case 'Executive':
                return (
                    <div className="w-full bg-white p-6 sm:p-10 border-t-4 border-t-blue-900 shadow-2xl min-h-[400px] rounded-lg">
                        <div className="border-b pb-4 sm:pb-6">
                            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900"><NameType /></h1>
                            <p className="text-gray-500 italic mt-1 font-medium text-sm sm:text-base">Fullstack Developer</p>
                        </div>
                        <div className="mt-6 sm:mt-8">
                            <h2 className="text-base sm:text-lg font-bold text-blue-900 border-l-2 border-blue-900 pl-3">Профіль</h2>
                            <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base">Кваліфікований фахівець з досвідом у розробці...</p>
                        </div>
                        <div className="mt-6 sm:mt-8">
                            <h2 className="text-base sm:text-lg font-bold text-blue-900 border-l-2 border-blue-900 pl-3">Досвід</h2>
                            <div className="mt-2"><ExperienceType /></div>
                        </div>
                    </div>
                )
            default:
                return <NameType />
        }
    }

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10">
            <div className="w-full max-w-full md:max-w-2xl transition-all duration-500 ease-in-out">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">
                        Live Preview Mode: <span className="text-blue-600">{template}</span>
                    </h2>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                </div>
                {renderTemplate()}
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 min-w-[120px] sm:min-w-[180px]">
                <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase mb-2">Select Layout</p>
                {['Minimal', 'Sidebar', 'Modern', 'Executive'].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTemplate(t)}
                        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 text-left border ${
                            template === t
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg translate-x-1 sm:translate-x-2'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
    )
}
