export function MinimalTemplate() {
    return (
        <div className="max-w-2xl mx-auto bg-white">
            <div className="px-12 py-10">
                <div className="mb-10">
                    <h1 className="text-6xl font-light text-slate-900 tracking-tight">Ім'я Прізвище</h1>
                    <div className="mt-3 flex items-center gap-4">
                        <div className="h-1 w-12 bg-slate-900"></div>
                        <p className="text-lg text-slate-500">Frontend Developer</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8 my-12 py-8 border-y border-slate-200">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-slate-900">8+</p>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">років досвіду</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-slate-900">15+</p>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">проєктів</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-slate-900">100%</p>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">задоволення</p>
                    </div>
                </div>

                <section className="mb-10">
                    <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-4">Досвід</h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold text-slate-900">React Developer</h3>
                                <span className="text-xs text-slate-500">2022 - Present</span>
                            </div>
                            <p className="text-sm text-slate-500">Tech Startup • Київ</p>
                            <p className="text-sm text-slate-600 mt-2">Розробка інтерактивних інтерфейсів для мобільної платформи</p>
                        </div>
                        <div className="pt-4 border-t border-slate-100">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold text-slate-900">Frontend Engineer</h3>
                                <span className="text-xs text-slate-500">2020 - 2022</span>
                            </div>
                            <p className="text-sm text-slate-500">Web Company • Київ</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-4">Навички</h2>
                    <p className="text-slate-700 leading-relaxed">
                        React • TypeScript • Tailwind CSS • Next.js • Redux • Node.js • Express • 
                        PostgreSQL • MongoDB • REST API • Git • Docker • Webpack
                    </p>
                </section>
            </div>
        </div>
    );
}