'use client'

import { useResumeStore } from "@/store/useResumeStore"
import { useCounterStore } from "@/store/useCountStore"
import { useRouter } from "next/navigation"

import {
    Sparkles,
    User,
    Briefcase,
    FileText,
    Code2
} from "lucide-react"

export default function InfoPage() {
    const {
        formData,
        updateField,
        improveWithAI,
        loading,
        isPro
    } = useResumeStore()

    const count = useCounterStore((s) => s.count)
    const increment = useCounterStore((s) => s.increment)
    const canUse = useCounterStore((s) => s.canUse)

    const router = useRouter()

    const handleImprove = async () => {
        if (!isPro && !canUse) {
            alert("Free limit reached. Upgrade to Pro.")
            return
        }

        if (!isPro) {
            increment()
        }

        const success = await improveWithAI()

        if (success) {
            router.push("/create-resume/result")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex justify-center px-6 py-12">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[32px] shadow-2xl border border-gray-200 p-8">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                                <Sparkles size={22} />
                            </div>

                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    Resume Builder
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    Fill your information
                                    and improve resume
                                    with AI
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-3 block">
                                Full Name
                            </label>

                            <div className="relative">
                                <User
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    placeholder="John Anderson"                                   
                                    onChange={(e) =>
                                        updateField(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:border-black transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-3 block">
                                Position
                            </label>

                            <div className="relative">
                                <Briefcase
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    placeholder="Frontend Developer"
                                    onChange={(e) =>
                                        updateField(
                                            "position",
                                            e.target.value
                                        )
                                    }
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:border-black transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-3 block">
                                About
                            </label>

                            <div className="relative">
                                <FileText
                                    size={18}
                                    className="absolute left-4 top-5 text-gray-400"
                                />

                                <textarea
                                    placeholder="Tell about yourself..."

                                    onChange={(e) =>
                                        updateField(
                                            "about",
                                            e.target.value
                                        )
                                    }
                                    className="w-full min-h-[160px] rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 pt-4 outline-none focus:border-black transition resize-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-3 block">
                                Contact
                            </label>

                            <div className="relative">
                                <FileText
                                    size={18}
                                    className="absolute left-4 top-5 text-gray-400"
                                />

                                <textarea
                                    placeholder="Tell about yourself..."
                                    onChange={(e) =>
                                        updateField(
                                            "contact",
                                            e.target.value
                                        )
                                    }
                                    className="w-full min-h-[160px] rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 pt-4 outline-none focus:border-black transition resize-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-3 block">
                                Skills
                            </label>

                            <div className="relative">
                                <Code2
                                    size={18}
                                    className="absolute left-4 top-5 text-gray-400"
                                />

                                <textarea
                                    placeholder="React, Next.js, TypeScript..."
                                    onChange={(e) =>
                                        updateField(
                                            "skills",
                                            e.target.value
                                        )
                                    }
                                    className="w-full min-h-[140px] rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 pt-4 outline-none focus:border-black transition resize-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-3 block">
                                Experience
                            </label>

                            <textarea
                                placeholder="Describe your work experience..."
                                onChange={(e) =>
                                    updateField(
                                        "experience",
                                        e.target.value
                                    )
                                }
                                className="w-full min-h-[200px] rounded-2xl border border-gray-200 bg-gray-50 p-5 outline-none focus:border-black transition resize-none"
                            />
                        </div>

                        {!isPro && (
                            <div className="text-sm text-center text-gray-500">
                                Free attempts left: {Math.max(0, 3 - count)}
                            </div>
                        )}

                        <button
                            onClick={handleImprove}
                            disabled={loading || (!isPro && !canUse)}
                            className="w-full h-16 rounded-2xl bg-black text-white font-semibold text-lg flex items-center justify-center gap-3 hover:scale-[1.01] transition disabled:opacity-50"
                        >
                            <Sparkles size={20} />

                            {loading
                                ? "AI improving..."
                                : !isPro && !canUse
                                    ? "Limit reached"
                                    : "Improve with AI"}
                        </button>
                    </div>
                </div>

                <div className="bg-black text-white rounded-[32px] p-8 shadow-2xl flex flex-col justify-between">
                    <div>
                        <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center mb-6">
                            <Sparkles size={28} />
                        </div>

                        <h2 className="text-3xl font-bold leading-tight">
                            Create professional
                            resume with AI
                        </h2>

                        <p className="text-gray-400 mt-5 leading-7">
                            AI will improve your
                            text, skills and
                            experience to create
                            modern ATS-friendly
                            resume.
                        </p>

                        <div className="space-y-4 mt-10">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <div className="h-3 w-24 bg-white/20 rounded"></div>

                                <div className="space-y-2 mt-4">
                                    <div className="h-2 bg-white/10 rounded"></div>
                                    <div className="h-2 bg-white/10 rounded"></div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <div className="h-3 w-32 bg-white/20 rounded"></div>

                                <div className="flex gap-2 mt-4">
                                    <div className="h-8 w-20 rounded-full bg-white/10"></div>
                                    <div className="h-8 w-24 rounded-full bg-white/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
                        ResumeAI Builder
                    </div>
                </div>
            </div>
        </div>
    )
}