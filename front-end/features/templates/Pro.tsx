
export interface ExperienceItem {
  company?: string
  position?: string
  duration?: string
  highlights?: string[]
}

export interface ResumeProps {
  name: string
  position: string
  about: string
  contact: string
  skills: string[]
  experience: (string | ExperienceItem)[]
}

function renderExperience(exp: string | ExperienceItem, i: number, className?: string) {
  try {
    const obj: ExperienceItem = typeof exp === 'string' ? JSON.parse(exp) : exp
    if (obj && typeof obj === 'object' && (obj.company || obj.position)) {
      return (
        <div key={i} className="space-y-1">
          <p className={`font-bold ${className ?? 'text-gray-800'}`}>
            {obj.position}{obj.company ? ` — ${obj.company}` : ''}
          </p>
          {obj.duration && <p className="text-sm text-gray-500">{obj.duration}</p>}
          {obj.highlights?.map((h, j) => (
            <p key={j} className={className ?? 'text-gray-700'}>• {h}</p>
          ))}
        </div>
      )
    }
  } catch {}
  return <p key={i} className={className ?? 'text-gray-700'}>{String(exp)}</p>
}


/* Pro-version */
export function MinimalPro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-14">
      <div className="border-b-2 border-gray-200 pb-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">{name}</h1>
        <p className="text-xl text-gray-500 mb-6">{position}</p>
        <div className="flex gap-3 flex-wrap">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-black text-white text-sm rounded-full font-medium">{skill}</span>
          ))}
        </div>
      </div>
      <div className="space-y-10 mt-12">
        <div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Про мене</h2>
          <p className="text-gray-700 leading-relaxed">{about}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Контакт</h2>
          <p className="text-gray-700">{contact}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Досвід</h2>
          <div className="space-y-4">
            {experience.map((exp, i) => renderExperience(exp, i, 'text-gray-700'))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function SidebarPro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] grid grid-cols-4 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
      <div className="bg-gradient-to-b from-gray-950 to-black p-10 flex flex-col gap-10">
        <div>
          <h1 className="text-xl font-bold text-white mb-1">{name}</h1>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Контакт</h2>
          <p className="text-gray-300 text-sm">{contact}</p>
        </div>
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Навички</h2>
          <div className="flex flex-col gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-lg">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-white p-12 flex flex-col gap-10">
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Про мене</h2>
          <p className="text-gray-700 leading-relaxed">{about}</p>
        </div>
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Досвід</h2>
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <div key={i} className="border-l-2 border-gray-200 pl-4">
                {renderExperience(exp, i, 'text-gray-700')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ModernPro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-10 shadow-2xl border border-gray-200">
      <div className="w-full h-full bg-white rounded-[40px] shadow-2xl p-14">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">{name}</h1>
            <p className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">{position}</p>
          </div>
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg flex items-center justify-center text-white text-4xl font-bold">
            {name.charAt(0)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6">
            <h2 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">Контакт</h2>
            <p className="text-gray-700 text-sm">{contact}</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-6">
            <h2 className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-3">Навички</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="text-xs bg-white border border-pink-200 text-gray-700 px-2 py-1 rounded-lg">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 mb-6">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Про мене</h2>
          <p className="text-gray-700 leading-relaxed">{about}</p>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Досвід</h2>
          <div className="space-y-4">
            {experience.map((exp, i) => renderExperience(exp, i, 'text-gray-700'))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExecutivePro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] bg-white rounded-3xl shadow-2xl border-t-[20px] border-blue-900 p-14">
      <div className="flex justify-between items-start mb-12 border-b border-gray-200 pb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">{name}</h1>
          <p className="text-2xl text-blue-900 font-semibold mb-4">{position}</p>
          <p className="text-gray-500 text-sm">{contact}</p>
        </div>
        <div className="w-36 h-36 rounded-full border-4 border-blue-900 flex items-center justify-center text-blue-900 text-5xl font-bold bg-blue-50">
          {name.charAt(0)}
        </div>
      </div>
      <div className="space-y-10">
        <div>
          <h2 className="text-sm font-bold text-white bg-blue-900 px-4 py-2 rounded inline-block mb-4 uppercase tracking-widest">Про мене</h2>
          <p className="text-gray-700 leading-relaxed">{about}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white bg-blue-900 px-4 py-2 rounded inline-block mb-4 uppercase tracking-widest">Навички</h2>
          <div className="grid grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <div key={i} className="border-2 border-blue-900 rounded-xl px-4 py-3 text-center text-sm font-medium text-blue-900">{skill}</div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white bg-blue-900 px-4 py-2 rounded inline-block mb-4 uppercase tracking-widest">Досвід</h2>
          <div className="space-y-4">
            {experience.map((exp, i) => renderExperience(exp, i, 'text-gray-700'))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ATSCleanPro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] bg-white border-2 border-gray-300 rounded-3xl shadow-xl p-12">
      <div className="border-b-2 border-gray-300 pb-8 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
        <p className="text-lg text-gray-600 mb-2">{position}</p>
        <p className="text-sm text-gray-500">{contact}</p>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">Про мене</h2>
          <p className="text-gray-700 text-sm leading-relaxed">{about}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">Навички</h2>
          <p className="text-gray-700 text-sm">{skills.join(', ')}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">Досвід</h2>
          <div className="space-y-4">
            {experience.map((exp, i) => renderExperience(exp, i, 'text-gray-700 text-sm'))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CorporatePro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
      <div className="h-44 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-14 flex items-end">
        <div>
          <h1 className="text-4xl font-bold text-white mb-1">{name}</h1>
          <p className="text-blue-200 text-lg">{position}</p>
        </div>
      </div>
      <div className="p-14">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2 space-y-10">
            <div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Про мене</h2>
              <p className="text-gray-700 leading-relaxed">{about}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Досвід</h2>
              <div className="space-y-4">
                {experience.map((exp, i) => renderExperience(exp, i, 'text-gray-700'))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b-2 border-blue-900 pb-3 mb-4">Навички</h2>
            <div className="space-y-2">
              {skills.map((skill, i) => (
                <div key={i} className="bg-blue-50 text-blue-900 text-sm font-medium px-3 py-2 rounded-lg">{skill}</div>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b-2 border-blue-900 pb-3 mb-4">Контакт</h2>
              <p className="text-gray-700 text-sm">{contact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function NeoBrutalismPro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] bg-yellow-300 border-[8px] border-black rounded-[40px] p-12 shadow-[16px_16px_0px_black]">
      <div className="bg-white border-4 border-black rounded-3xl p-12 h-full">
        <div className="border-4 border-black rounded-2xl p-8 mb-8">
          <h1 className="text-5xl font-black text-black mb-2">{name}</h1>
          <p className="text-xl font-bold text-gray-700">{position}</p>
          <p className="text-sm text-gray-600 mt-2">{contact}</p>
        </div>
        <div className="space-y-6">
          <div className="border-4 border-black rounded-2xl p-6 bg-yellow-100">
            <h2 className="text-sm font-black text-black uppercase tracking-widest mb-3">Про мене</h2>
            <p className="text-gray-800 leading-relaxed">{about}</p>
          </div>
          <div className="border-4 border-black rounded-2xl p-6">
            <h2 className="text-sm font-black text-black uppercase tracking-widest mb-3">Навички</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-3 py-2 bg-black text-yellow-300 text-sm font-bold rounded-lg">{skill}</span>
              ))}
            </div>
          </div>
          <div className="border-4 border-black rounded-2xl p-6 bg-yellow-50">
            <h2 className="text-sm font-black text-black uppercase tracking-widest mb-3">Досвід</h2>
            <div className="space-y-4">
              {experience.map((exp, i) => renderExperience(exp, i, 'text-gray-800'))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ElegantSerifPro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] bg-[#faf7f2] rounded-3xl shadow-xl p-16">
      <div className="border-b-2 border-gray-400 pb-12 mb-12 text-center">
        <h1 className="text-6xl font-serif font-bold text-gray-900 mb-3">{name}</h1>
        <p className="text-xl text-gray-500 italic mb-3">{position}</p>
        <p className="text-sm text-gray-400 tracking-widest uppercase">{contact}</p>
      </div>
      <div className="space-y-12">
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-5 text-center">Про мене</h2>
          <p className="text-gray-700 leading-relaxed text-center italic">{about}</p>
        </div>
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-5 text-center">Навички</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <span key={i} className="border-2 border-gray-400 text-gray-700 px-5 py-2 rounded-lg text-sm font-serif">{skill}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-5 text-center">Досвід</h2>
          <div className="space-y-4 text-center">
            {experience.map((exp, i) => renderExperience(exp, i, 'text-gray-700'))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function StartupPro({ name, position, about, contact, skills, experience }: ResumeProps) {
  return (
    <div className="w-full min-h-[1123px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-10 shadow-2xl">
      <div className="w-full h-full rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-14">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">{name}</h1>
            <p className="text-xl text-cyan-400 font-semibold mb-3">{position}</p>
            <p className="text-gray-400 text-sm">{contact}</p>
          </div>
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg shadow-cyan-500/30">
            {name.charAt(0)}
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Про мене</h2>
            <p className="text-gray-300 leading-relaxed">{about}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Навички</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded-lg">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Досвід</h2>
            <div className="space-y-4">
              {experience.map((exp, i) => renderExperience(exp, i, 'text-gray-300'))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
