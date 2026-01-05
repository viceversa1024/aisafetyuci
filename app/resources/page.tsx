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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Resources</h1>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                New to AI safety? Here are some foundational resources to begin your journey:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Introduction to AI alignment research</li>
                <li>Key papers and textbooks</li>
                <li>Online courses and tutorials</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Tools</h2>
              <p className="text-gray-700 leading-relaxed">
                Essential tools and frameworks for conducting AI safety research,
                including datasets, benchmarks, and software libraries.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Connect with the broader AI safety community through forums, conferences,
                and collaborative platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
