import { useResumeStore } from "@/store/useResumeStore"

export function ATSCleanResult() {
  const { formData } = useResumeStore()
  return (
    <div className="w-full max-w-[794px] min-h-screen sm:min-h-[1123px] bg-white border border-gray-300 rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12">
      <div className="border-b-2 border-gray-300 pb-6 sm:pb-8 mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">{formData.name}</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-3 font-semibold">{formData.position}</p>
      </div>
      <div className="space-y-8 sm:space-y-10">
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4 pb-2 border-b border-gray-300">Professional Summary</h2>
          <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">{formData.about}</p>
        </section>
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4 pb-2 border-b border-gray-300">Skills</h2>
          <p className="text-gray-700 text-sm sm:text-base">{formData.skills}</p>
        </section>
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4 pb-2 border-b border-gray-300">Experience</h2>
          <p className="whitespace-pre-line text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">{formData.experience}</p>
        </section>
      </div>
    </div>
  )
}

export function CorporateResult() {
  const { formData } = useResumeStore()
  return (
    <div className="w-full max-w-[794px] min-h-screen sm:min-h-[1123px] bg-white rounded-3xl overflow-hidden shadow-2xl">
      <div className="h-32 sm:h-40 bg-blue-900 p-8 sm:p-14 flex items-end">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">{formData.name}</h1>
          <p className="text-blue-200 text-lg sm:text-xl mt-2 sm:mt-3">{formData.position}</p>
        </div>
      </div>
      <div className="p-6 sm:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
          <div>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400 mb-3 sm:mb-5">Skills</h2>
            <div className="space-y-2 sm:space-y-3">
              {formData.skills.split(",").map((skill, index) => (
                <div key={index} className="bg-gray-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3">{skill}</div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-5">About</h2>
              <p className="text-gray-700 leading-6 sm:leading-8">{formData.about}</p>
            </section>
            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-5">Experience</h2>
              <p className="whitespace-pre-line text-gray-700 leading-6 sm:leading-8">{formData.experience}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ElegantSerifResult() {
  const { formData } = useResumeStore()
  return (
    <div className="w-full max-w-[794px] min-h-screen sm:min-h-[1123px] bg-[#faf7f2] rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-16">
      <style>{`.serif-font { font-family: 'Garamond','Georgia',serif; }`}</style>
      <div className="border-b-2 border-gray-400 pb-6 sm:pb-10 mb-8 sm:mb-14">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-gray-900 serif-font tracking-tight">{formData.name}</h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mt-4 sm:mt-6 serif-font font-light">{formData.position}</p>
      </div>
      <div className="space-y-10 sm:space-y-14">
        <section>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.3em] mb-4 sm:mb-6 serif-font">Professional Profile</h2>
          <p className="text-gray-700 leading-7 sm:leading-9 text-sm sm:text-base serif-font font-light">{formData.about}</p>
        </section>
        <section>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.3em] mb-4 sm:mb-6 serif-font">Expertise</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {formData.skills?.split(",").map((skill, index) => (
              <div key={index} className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-400 rounded-xl text-gray-800 text-xs sm:text-sm serif-font font-light">{skill.trim()}</div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.3em] mb-4 sm:mb-6 serif-font">Professional Experience</h2>
          <p className="whitespace-pre-line text-gray-700 leading-7 sm:leading-9 text-sm sm:text-base serif-font font-light">{formData.experience}</p>
        </section>
      </div>
    </div>
  )
}


export function ExecutiveResult() {
    const { formData } = useResumeStore()

    return (
        <div className="w-[794px] min-h-[1123px] bg-white rounded-3xl overflow-hidden shadow-2xl border-t-[18px] border-blue-900">
            <div className="p-14">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h1 className="text-6xl font-bold text-gray-900">
                            {formData.name}
                        </h1>

                        <p className="text-2xl text-blue-900 mt-4 font-semibold">
                            {formData.position}
                        </p>
                    </div>

                    <div className="w-32 h-32 rounded-full border-4 border-blue-900 flex-shrink-0"></div>
                </div>

                <div className="space-y-14">
                    <section>
                        <h2 className="text-xl font-bold text-blue-900 mb-5 uppercase tracking-wider">
                            Professional Summary
                        </h2>

                        <p className="text-gray-700 leading-8 text-base">
                            {formData.about}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-blue-900 mb-6 uppercase tracking-wider">
                            Core Skills
                        </h2>

                        <div className="grid grid-cols-3 gap-4">
                            {formData.skills?.split(",").map((skill, index) => (
                                <div key={index} className="border-2 border-blue-900 text-blue-900 rounded-2xl p-4 text-center font-semibold text-sm">
                                    {skill.trim()}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-blue-900 mb-5 uppercase tracking-wider">
                            Experience
                        </h2>

                        <p className="whitespace-pre-line text-gray-700 leading-8 text-base">
                            {formData.experience}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}



export function MinimalResult() {
    const formData = useResumeStore((s) => s.formData)

    return (
        <div className="w-[794px] min-h-[1123px] bg-white rounded-3xl shadow-2xl p-14">
            <div className="border-b border-gray-200 pb-8">
                <h1 className="text-6xl font-bold text-gray-900">
                    {formData.name}
                </h1>

                <p className="text-2xl text-gray-500 mt-4">
                    {formData.position}
                </p>
            </div>

            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-5">
                        About
                    </h2>

                    <p className="text-gray-700 leading-8 text-lg">
                        {formData.about}
                    </p>
                </section>

                <section>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-5">
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {formData.skills?.split(",").map((skill, index) => (
                            <div key={index} className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                                {skill.trim()}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-5">
                        Experience
                    </h2>

                    <p className="whitespace-pre-line text-gray-700 leading-8 text-lg">
                        {formData.experience}
                    </p>
                </section>
            </div>
        </div>
    )
}


export function ModernResult() {
  const { formData } = useResumeStore()
  return (
    <div className="w-full max-w-[794px] min-h-screen sm:min-h-[1123px] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl">
      <div className="w-full h-full bg-white rounded-[30px] sm:rounded-[40px] shadow-2xl p-6 sm:p-10 lg:p-14">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-12">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">{formData.name}</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mt-2 sm:mt-4">{formData.position}</p>
          </div>
          <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0 mt-6 sm:mt-0"></div>
        </div>
        <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-5">About</h2>
            <p className="text-gray-700 leading-6 sm:leading-8 text-sm sm:text-base">{formData.about}</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-5">Skills</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {formData.skills?.split(",").map((skill, index) => (
                <div key={index} className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white border-2 border-gray-200 text-gray-800 text-xs sm:text-sm font-medium">
                  {skill.trim()}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-10 bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-5">Experience</h2>
          <p className="whitespace-pre-line text-gray-700 leading-6 sm:leading-8 text-sm sm:text-base">{formData.experience}</p>
        </div>
      </div>
    </div>
  )
}

export function NeoBrutalismResult() {
  const { formData } = useResumeStore()
  return (
    <div className="w-full max-w-[794px] min-h-screen sm:min-h-[1123px] bg-yellow-300 border-[6px] sm:border-[8px] border-black rounded-[30px] sm:rounded-[40px] p-6 sm:p-12 shadow-[8px_8px_0px_black] sm:shadow-[16px_16px_0px_black]">
      <div className="bg-white border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-6 sm:p-12 h-full">
        <div className="border-2 sm:border-4 border-black rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black">{formData.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-black mt-2 sm:mt-4 font-bold">{formData.position}</p>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <section className="border-2 sm:border-4 border-black rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-yellow-100">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">About</h2>
            <p className="text-gray-900 leading-6 sm:leading-8 font-medium text-sm sm:text-base">{formData.about}</p>
          </section>
          <section className="border-2 sm:border-4 border-black rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {formData.skills?.split(",").map((skill, index) => (
                <div key={index} className="px-3 sm:px-4 py-1 sm:py-2 bg-black text-yellow-300 rounded-lg sm:rounded-xl font-black border-2 border-black text-xs sm:text-sm">
                  {skill.trim()}
                </div>
              ))}
            </div>
          </section>
          <section className="border-2 sm:border-4 border-black rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-yellow-50">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">Experience</h2>
            <p className="whitespace-pre-line text-gray-900 leading-6 sm:leading-8 font-medium text-sm sm:text-base">{formData.experience}</p>
          </section>
        </div>
      </div>
    </div>
  )
}


export function SidebarResult() {
  const { formData } = useResumeStore()
  return (
    <div className="w-full max-w-[794px] min-h-screen sm:min-h-[1123px] grid grid-cols-1 lg:grid-cols-3 rounded-3xl overflow-hidden shadow-2xl">
      <div className="bg-black text-white p-6 sm:p-10 flex flex-col">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{formData.name}</h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-base sm:text-lg">{formData.position}</p>
        </div>
        <div className="mt-auto pt-6 sm:pt-10">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 sm:mb-5 font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {formData.skills?.split(",").map((skill, index) => (
              <div key={index} className="px-2 sm:px-3 py-1 sm:py-2 bg-white/10 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium">
                {skill.trim()}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 bg-white p-6 sm:p-12 flex flex-col justify-between">
        <div className="space-y-8 sm:space-y-12">
          <section>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400 mb-3 sm:mb-5 font-semibold">About</h2>
            <p className="text-gray-700 leading-6 sm:leading-8 text-sm sm:text-base">{formData.about}</p>
          </section>
          <section>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400 mb-3 sm:mb-5 font-semibold">Experience</h2>
            <p className="whitespace-pre-line text-gray-700 leading-6 sm:leading-8 text-sm sm:text-base">{formData.experience}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export function StartupResult() {
  const { formData } = useResumeStore()
  return (
    <div className="w-full max-w-[794px] min-h-screen sm:min-h-[1123px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="w-full h-full rounded-2xl sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-10 lg:p-14">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-10 sm:mb-16">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">{formData.name}</h1>
            <p className="text-base sm:text-xl lg:text-2xl text-white/70 mt-2 sm:mt-4 font-semibold">{formData.position}</p>
          </div>
          <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0 mt-6 sm:mt-0"></div>
        </div>
        <div className="space-y-8 sm:space-y-12">
          <section>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mb-4 sm:mb-6 font-semibold">About</h2>
            <p className="text-white/80 leading-6 sm:leading-8 text-sm sm:text-base">{formData.about}</p>
          </section>
          <section>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mb-4 sm:mb-6 font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {formData.skills?.split(",").map((skill, index) => (
                <div key={index} className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-medium">
                  {skill.trim()}
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mb-4 sm:mb-6 font-semibold">Experience</h2>
            <p className="whitespace-pre-line text-white/80 leading-6 sm:leading-8 text-sm sm:text-base">{formData.experience}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
