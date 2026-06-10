import React from 'react';

export function ExecutiveTemplate() {
    return (
        <div className="max-w-2xl mx-auto bg-white">
            <div className="relative h-56 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>
                <div className="relative px-10 py-12 text-white">
                    <h1 className="text-5xl font-bold tracking-tight mb-2">Ім'я Прізвище</h1>
                    <p className="text-xl text-slate-300 font-light">Senior Fullstack Developer</p>
                    <div className="mt-6 flex gap-6 text-sm text-slate-400">
                        <span>📧 email@example.com</span>
                        <span>📱 +38 (0XX) XXX-XX-XX</span>
                        <span>💼 linkedin.com/in/username</span>
                    </div>
                </div>
            </div>

            <div className="px-10 py-8 space-y-8">
                <section>
                    <h2 className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4 pb-3 border-b-2 border-blue-500">Профіль</h2>
                    <p className="text-slate-700 leading-relaxed text-lg">
                        Досвідчений розробник з 8+ років практики в розробці масштабних веб-додатків. 
                        Спеціалізація в React та Node.js стеках з глибокими знаннями архітектури та оптимізації.
                    </p>
                </section>

                <section>
                    <h2 className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4 pb-3 border-b-2 border-blue-500">Досвід</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-5">
                            <h3 className="font-bold text-lg text-slate-900">Senior Developer</h3>
                            <p className="text-sm text-blue-600 font-semibold">Tech Company Inc. • 2021 - Present</p>
                            <ul className="mt-2 text-slate-600 text-sm space-y-1">
                                <li>• Керував розробкою фронтенду для 5+ проєктів</li>
                                <li>• Оптимізував продуктивність на 45%</li>
                                <li>• Менторив 3 молодших розробників</li>
                            </ul>
                        </div>
                        <div className="border-l-4 border-slate-300 pl-5">
                            <h3 className="font-bold text-lg text-slate-900">Full Stack Developer</h3>
                            <p className="text-sm text-slate-500 font-semibold">Web Solutions Ltd. • 2018 - 2021</p>
                            <ul className="mt-2 text-slate-600 text-sm space-y-1">
                                <li>• Розробив REST API для E-commerce платформи</li>
                                <li>• Впровадив TypeScript та підвищив якість коду</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4 pb-3 border-b-2 border-blue-500">Навички</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs font-semibold text-slate-600 mb-2">Frontend</p>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Redux'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-600 mb-2">Backend</p>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}