export default function Programs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Our Programs</h1>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Groups</h2>
              <p className="text-gray-700 leading-relaxed">
                Collaborative research projects exploring AI alignment, interpretability,
                and robustness. Open to undergraduate and graduate students.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reading Groups</h2>
              <p className="text-gray-700 leading-relaxed">
                Weekly discussions of seminal papers and recent advances in AI safety research.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Workshops & Seminars</h2>
              <p className="text-gray-700 leading-relaxed">
                Regular events featuring guest speakers, hands-on tutorials, and skill-building
                workshops in AI safety research methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
