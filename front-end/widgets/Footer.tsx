import {
  Send,

} from "lucide-react"

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {

    return(
        <footer className="bg-[#2d2b29] text-[#e8dcc8]">
  <div className="max-w-7xl mx-auto px-8 py-16">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

      <div>
        <h2
          style={{ fontFamily: "var(--font-playfair)" }}
          className="text-4xl font-bold mb-6"
        >
          ResumeAI
        </h2>

        <p className="text-lg text-[#d4c5ad] leading-relaxed mb-8">
          Створюйте професійні резюме за допомогою AI та сучасних шаблонів.
        </p>

        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-xl border border-[#5b5650] flex items-center justify-center hover:border-[#e8dcc8] transition">
            <Send/>
          </button>

          <button className="w-12 h-12 rounded-xl border border-[#5b5650] flex items-center justify-center hover:border-[#e8dcc8] transition">
           <InstagramIcon/>
          </button>

          <button className="w-12 h-12 rounded-xl border border-[#5b5650] flex items-center justify-center hover:border-[#e8dcc8] transition">
            <LinkedinIcon/>
          </button>

          <button className="w-12 h-12 rounded-xl border border-[#5b5650] flex items-center justify-center hover:border-[#e8dcc8] transition">
            <GithubIcon/>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold tracking-widest uppercase mb-6">
          Шаблони
        </h3>

        <ul className="space-y-4 cursor-pointer">
          <li>Minimal</li>
          <li>Modern</li>
          <li>Executive</li>
          <li>ATS Friendly</li>
          <li>Premium</li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold tracking-widest uppercase mb-6">
          Продукт
        </h3>

        <ul className="space-y-4 cursor-pointer">
          <li>Створити резюме</li>
          <li>Приклади</li>
          <li>PRO</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold tracking-widest uppercase mb-6">
          Ресурси
        </h3>

        <ul className="space-y-4 cursor-pointer">
          <li>Контакти</li>
          <li>Підтримка</li>
          <li>ATS Guide</li>
          <li>Кар'єра</li>
        </ul>
      </div>

    </div>

    <div className="mt-16 pt-8 border-t border-[#4b4640] flex flex-col md:flex-row justify-between gap-6">

      <p className="text-[#d4c5ad]">
        © 2026 ResumeAI. Всі права захищені.
      </p>

      <div className="flex flex-wrap gap-8">
        <a href="#" className="hover:text-white transition">
          Умови використання
        </a>

        <a href="#" className="hover:text-white transition">
          Конфіденційність
        </a>

        <a href="#" className="hover:text-white transition">
          Cookie
        </a>
      </div>

    </div>

  </div>
</footer>
    )
}