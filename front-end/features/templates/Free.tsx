export function Minimal() {
  return (
    <div className="w-full min-h-screen sm:min-h-[1123px] bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-14 border border-gray-200">
      <div className="border-b border-gray-200 pb-6 sm:pb-8">
        <div className="h-10 sm:h-14 w-48 sm:w-80 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg animate-pulse"></div>
        <div className="h-4 sm:h-6 w-32 sm:w-48 bg-gray-100 rounded mt-3 sm:mt-4 animate-pulse"></div>
      </div>
      <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-10">
        <div>
          <div className="h-4 sm:h-5 w-24 sm:w-32 bg-gray-300 rounded mb-4 sm:mb-5"></div>
          <div className="space-y-2 sm:space-y-3">
            <div className="h-3 sm:h-4 bg-gray-100 rounded"></div>
            <div className="h-3 sm:h-4 bg-gray-100 rounded"></div>
            <div className="h-3 sm:h-4 w-2/3 sm:w-3/4 bg-gray-100 rounded"></div>
          </div>
        </div>
        <div>
          <div className="h-4 sm:h-5 w-20 sm:w-24 bg-gray-300 rounded mb-4 sm:mb-5"></div>
          <div className="flex flex-wrap gap-2">
            <div className="h-6 sm:h-8 w-16 sm:w-20 bg-black rounded-full"></div>
            <div className="h-6 sm:h-8 w-20 sm:w-24 bg-black rounded-full"></div>
            <div className="h-6 sm:h-8 w-24 sm:w-28 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <div className="w-full min-h-screen sm:min-h-[1123px] grid grid-cols-1 lg:grid-cols-3 rounded-3xl overflow-hidden shadow-xl border border-gray-200">
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-6 sm:p-10">
        <div className="h-8 sm:h-10 w-20 sm:w-24 bg-gray-700 rounded mb-4 sm:mb-6"></div>
        <div className="space-y-3 sm:space-y-4">
          <div className="h-3 sm:h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-3 sm:h-4 w-2/3 sm:w-3/4 bg-gray-700 rounded"></div>
        </div>
      </div>
      <div className="col-span-2 bg-white p-6 sm:p-10">
        <div className="space-y-6 sm:space-y-8">
          <div className="h-5 sm:h-6 w-32 sm:w-40 bg-gray-200 rounded"></div>
          <div className="space-y-2 sm:space-y-3">
            <div className="h-3 sm:h-4 bg-gray-100 rounded"></div>
            <div className="h-3 sm:h-4 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Modern() {
  return (
    <div className="w-full min-h-screen sm:min-h-[1123px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-gray-200">
      <div className="w-full h-full bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-10 gap-6">
          <div>
            <div className="h-10 sm:h-12 w-56 sm:w-80 bg-gray-200 rounded-lg mb-3 sm:mb-4"></div>
            <div className="h-4 sm:h-6 w-32 sm:w-48 bg-gray-100 rounded"></div>
          </div>
          <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-300 to-purple-300"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 h-24 sm:h-32"></div>
          <div className="bg-purple-50 rounded-2xl p-4 sm:p-6 h-24 sm:h-32"></div>
        </div>
      </div>
    </div>
  )
}

export function Executive() {
  return (
    <div className="w-full min-h-screen sm:min-h-[1123px] bg-white rounded-3xl shadow-2xl border-t-4 border-blue-900 p-6 sm:p-10 lg:p-14">
      <div className="border-b border-gray-200 pb-6 sm:pb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div>
            <div className="h-10 sm:h-14 w-56 sm:w-80 bg-gray-200 rounded-lg mb-3 sm:mb-4"></div>
            <div className="h-4 sm:h-6 w-40 sm:w-56 bg-blue-100 rounded"></div>
          </div>
          <div className="w-20 sm:w-28 h-20 sm:h-28 rounded-full border-4 border-blue-900"></div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-10">
        <div>
          <div className="h-5 sm:h-6 w-32 sm:w-48 bg-blue-900 rounded mb-4 sm:mb-5"></div>
          <div className="space-y-2 sm:space-y-3">
            <div className="h-3 sm:h-4 bg-gray-100 rounded"></div>
            <div className="h-3 sm:h-4 bg-gray-100 rounded w-2/3 sm:w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
