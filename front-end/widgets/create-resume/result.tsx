'use client'
import { useResumeStore } from "@/store/useResumeStore"
import {
  MinimalResult,
  SidebarResult,
  StartupResult,
  ModernResult,
  ElegantSerifResult,
  ExecutiveResult,
  ATSCleanResult,
  CorporateResult,
  NeoBrutalismResult
} from "@/features/templates/Result"
export default function Result() {
  const template = useResumeStore((s) => s.template)
  const isPro = useResumeStore((s) => s.isPro)

  const templates = {
    Minimal: <MinimalResult />,
    Sidebar: <SidebarResult />,
    Modern: <ModernResult />,
    Executive: <ExecutiveResult />,
    ATSClean: isPro ? <ATSCleanResult /> : <MinimalResult />,
    Corporate: isPro ? <CorporateResult /> : <MinimalResult />,
    NeoBrutalism: isPro ? <NeoBrutalismResult /> : <MinimalResult />,
    ElegantSerif: isPro ? <ElegantSerifResult /> : <MinimalResult />,
    Startup: isPro ? <StartupResult /> : <MinimalResult />,
  }

  return (
    <div
      className="
        min-h-screen bg-gray-100 
        p-4 sm:p-6 lg:p-10 
        flex justify-center 
        print:bg-white print:p-0 print:shadow-none print:min-h-0
      "
    >
      <div className="w-full max-w-[794px]">
        {templates[template as keyof typeof templates]}
      </div>
    </div>
  )
}
