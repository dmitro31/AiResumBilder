export function SidebarTemplate() {
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 min-h-screen">
                <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-8 flex flex-col">
                    <div className="mb-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mb-6 flex items-center justify-center text-white font-bold text-3xl">
                            АП
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Ім'я</h1>
                        <p className="text-slate-400 text-sm">Fullstack Developer</p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Контакти</h3>
                        <div className="space-y-2 text-sm text-slate-300">
                            <p>📧 email@example.com</p>
                            <p>📱 +38 (0XX) XXX-XX-XX</p>
                            <p>💻 github.com/user</p>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Навички</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'Docker'].map(skill => (
                                <span key={skill} className="px-2 py-1 bg-slate-700 text-slate-200 text-xs rounded font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-8 border-t border-slate-700">
                        <p className="text-xs text-slate-400">Київ, Україна</p>
                    </div>
                </div>

                <div className="col-span-3 p-10 bg-white">
                    <section className="mb-10">
                        <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-6 pb-3 border-b-2 border-blue-500">Про мене</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Досвідчений fullstack розробник з 8+ років практики в розробці сучасних веб-додатків. 
                            Спеціалізуюся на React та Node.js. Люблю чистий код, тестування та collaborations з командою.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-6 pb-3 border-b-2 border-blue-500">Досвід</h2>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-900">Senior Developer</h3>
                                    <span className="text-sm text-slate-500">2021-Present</span>
                                </div>
                                <p className="text-slate-600 font-medium mb-3">Tech Company Inc.</p>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>• Керував розробкою фронтенду для 5+ проєктів</li>
                                    <li>• Оптимізував продуктивність на 45%</li>
                                    <li>• Менторив молодших розробників</li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-slate-900">Full Stack Developer</h3>
                                    <span className="text-sm text-slate-500">2018-2021</span>
                                </div>
                                <p className="text-slate-600 font-medium">Web Solutions Ltd.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-6 pb-3 border-b-2 border-blue-500">Проєкти</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: 'E-commerce Platform', tech: 'React, Node.js' },
                                { name: 'Analytics Dashboard', tech: 'Next.js, PostgreSQL' },
                            ].map(project => (
                                <div key={project.name} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                    <h4 className="font-semibold text-slate-900 text-sm">{project.name}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{project.tech}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}