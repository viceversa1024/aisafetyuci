import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Curated resources for learning AI safety and alignment. Access research papers, tutorials, and community links to advance your understanding.',
}

export default function Resources() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full bg-[#00386c]">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-0">Resources</h1>
            <p className="text-xl text-indigo-100 mb-8 pt-8">Nail down fundamentals and stay up-to-date with the latest research.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          <section className="mb-12">
            <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-6 text-center">Foundational</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <a href="https://www.youtube.com/watch?v=pYXy-A4siMw" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow no-underline focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="Intro to AI Safety by Robert Miles (2021)">
                <div className="relative">
                  <img src="https://img.youtube.com/vi/pYXy-A4siMw/hqdefault.jpg" alt="Intro to AI Safety video thumbnail" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                      <circle cx="12" cy="12" r="10" strokeWidth="1.5" className="" />
                      <path d="M10 8l6 4-6 4V8z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Intro to AI Safety</h3>
                  <p className="text-sm text-gray-600 mb-3">Robert Miles · 2021 · YouTube</p>
                  <p className="text-gray-700 mb-0">A clear, accessible introduction to core AI safety concepts and motivations.</p>
                </div>
              </a>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Coming Soon</h3>
                <p className="text-gray-700"></p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Coming Soon</h3>
                <p className="text-gray-700"></p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-6 text-center">Technical</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <a href="https://transformer-circuits.pub/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow no-underline focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="Anthropic’s Transformer Circuits Thread">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Anthropic’s Transformer Circuits Thread</h3>
                    <p className="text-gray-700">Some great papers on Anthropic’s interpretability research</p>
                  </div>
                </div>
              </a>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Coming Soon</h3>
                <p className="text-gray-700"></p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Coming Soon</h3>
                <p className="text-gray-700"></p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
