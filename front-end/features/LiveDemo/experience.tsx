'use client'

import { useTypingEffect } from "@/hook/typingHook"

export const experience = [
    "3+ Years of Experience",
    "Frontend Specialist",
    "Open Source Contributor",
    "Project Lead",
    "Freelance Developer"
]

export default function ExperienceType() {
    const text = useTypingEffect(experience);

    return (
        <div className="flex items-center gap-1 font-mono text-2xl">
            <span className="italic">{text}</span>
            <span className="animate-pulse font-light text-white">|</span>
        </div>
    );
}
