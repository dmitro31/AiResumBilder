export function ModernTemplate() {
    return (
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen p-8">
            <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900">Ім'я Прізвище</h1>
                            <p className="text-xl text-blue-600 font-semibold mt-1">Fullstack Developer</p>
                            <p className="text-sm text-slate-500 mt-3">
                                Спеціаліст у React та Node.js з фокусом на чистий код та user experience
                            </p>
                        </div>
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                            JS
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-4">📧 Контакти</h3>
                        <div className="space-y-2 text-sm text-slate-600">
                            <p>email@example.com</p>
                            <p>+38 (0XX) XXX-XX-XX</p>
                            <p>github.com/username</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-4">🎓 Освіта</h3>
                        <div className="space-y-2 text-sm text-slate-600">
                            <p className="font-medium text-slate-900">Бакалавр Computer Science</p>
                            <p>НТУ "ХПІ" • 2014-2018</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-blue-500 rounded"></span>
                        Досвід
                    </h2>
                    <div className="space-y-5">
                        <div className="pb-4 border-b border-slate-100 last:border-0">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-slate-900">Senior Fullstack Developer</h3>
                                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">2022-Present</span>
                            </div>
                            <p className="text-sm text-slate-500 mb-2">Tech Company Inc.</p>
                            <ul className="text-sm text-slate-600 space-y-1">
                                <li>• Розробка масштабних React додатків</li>
                                <li>• Оптимізація продуктивності (-45% bundle size)</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-slate-900">Full Stack Developer</h3>
                                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">2019-2022</span>
                            </div>
                            <p className="text-sm text-slate-500">Web Solutions Ltd.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-purple-500 rounded"></span>
                        Технічний стек
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs font-semibold text-slate-600 mb-2 uppercase">Frontend</p>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Tailwind', 'Next.js'].map(tech => (
                                    <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-lg font-medium border border-blue-100">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-600 mb-2 uppercase">Backend</p>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'Express', 'PostgreSQL'].map(tech => (
                                    <span key={tech} className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-lg font-medium border border-purple-100">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}