'use client'

import Link from "next/link"
import { MinimalTemplate } from "@/features/Shablon/Minimal"
import { SidebarTemplate } from "@/features/Shablon/SlideBar"
import { ModernTemplate } from "@/features/Shablon/Modern"
import { ExecutiveTemplate } from "@/features/Shablon/Executive"
import HowWork from "@/widgets/HowWork"
import LiveDemo from "@/widgets/liveDemo"
import Main from "@/widgets/Main"

export const templates = [
  { id: "minimal", name: "Minimal", component: MinimalTemplate },
  { id: "sidebar", name: "Sidebar", component: SidebarTemplate },
  { id: "modern", name: "Modern", component: ModernTemplate },
  { id: "executive", name: "Executive", component: ExecutiveTemplate },
]

export default function Home() {
  return (
    <div className="bg-white">

      <Main />

      <LiveDemo />

      <HowWork />

      <section className="py-16 sm:py-20 md:py-24 w-full">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14 md:mb-16">
    Обери свій шаблон
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
    {templates.map((t) => (
      <div
        key={t.id}
        className="bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-center mb-3 sm:mb-4">
          {t.name}
        </h3>

        <div className="scale-[0.9] sm:scale-[0.85] origin-top">
          <t.component />
        </div>

        <div className="text-center mt-3 sm:mt-4">
          <Link href={`/create-resume?template=${t.id}`}>
            <button className="bg-black text-white px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg hover:opacity-90 transition">
              Використати
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  )
}
