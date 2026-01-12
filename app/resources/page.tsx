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
            <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-6 text-center">Foundations</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
                <p className="text-gray-700 mb-4">New to AI safety? Foundational resources to begin your journey.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Introduction to AI alignment research</li>
                  <li>Key papers and textbooks</li>
                  <li>Online courses and tutorials</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Tools</h3>
                <p className="text-gray-700">Essential tools and frameworks for conducting AI safety research.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Links</h3>
                <p className="text-gray-700">Forums, conferences, and collaborative platforms for staying connected.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-6 text-center">Technical</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Papers & Reading Lists</h3>
                <p className="text-gray-700">Curated reading lists and seminal papers in AI safety research.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Libraries & Tools</h3>
                <p className="text-gray-700">Tools and frameworks for experiments, interpretability, and evaluation.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benchmarks & Datasets</h3>
                <p className="text-gray-700">Datasets, benchmarks, and evaluation suites used in alignment research.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
