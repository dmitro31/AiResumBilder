'use client'

import { useTypingEffect } from "@/hook/typingHook"

export const names = ["Rob", "Alex", "Jon", "Dexter", "Oliver", "Mateo", "Liam", "William", "Daniel", "Roman"]

export default function NameType() {
    const text = useTypingEffect(names);

    return (
        <div className="flex items-center gap-1 font-mono text-2xl">
            <span>{text}</span>
            <span className="animate-pulse font-light">|</span>
        </div>
    );
}
