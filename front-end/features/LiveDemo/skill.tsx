'use client'

import { useTypingEffect } from "@/hook/typingHook"

export const skills = [
    "React Developer",
    "Tailwind CSS",
    "Next.js Expert",
    "TypeScript",
    "UI/UX Design",
    "Backend Node.js"
]

export default function SkillType() {
    const text = useTypingEffect(skills);

    return (
        <div className="flex items-center gap-1 font-mono text-2xl">
            <span>{text}</span>
            <span className="animate-pulse font-light text-white">|</span>
        </div>
    );
}
