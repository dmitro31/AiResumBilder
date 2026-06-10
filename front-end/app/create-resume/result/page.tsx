import Result from "@/widgets/create-resume/result"
import Link from "next/link"

export default function ResultPage() {
  return (
    <>
      <Result />
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 print:hidden">
        <Link
          href="/download"
          className="
            flex items-center gap-3
            bg-indigo-600 hover:bg-indigo-700
            text-white font-semibold
            px-5 sm:px-6 py-3
            rounded-2xl
            shadow-xl hover:shadow-2xl
            transition-all duration-300
            hover:-translate-y-1
            active:scale-95
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Завантажити</span>
        </Link>
      </div>
    </>
  )
}
