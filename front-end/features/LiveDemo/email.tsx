'use client'

import { useTypingEffect } from "@/hook/typingHook"

export const emails = [
  "hello@world.com", 
  "support@service.io", 
  "contact@agency.net", 
  "admin@dev.ua", 
  "info@startup.com"
]

export default function EmailType() {
  const text = useTypingEffect(emails);

  return (
    <div className="flex items-center justify-center gap-1 font-mono text-lg sm:text-xl md:text-2xl p-4">
      <span>{text}</span>
      <span className="animate-pulse font-light">|</span>
    </div>
  );
}
