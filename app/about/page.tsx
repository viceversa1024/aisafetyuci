export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">About Us</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI Safety UCI is dedicated to advancing research and education in AI alignment
              and safety at UC Irvine. We bring together students, researchers, and faculty
              to address the most pressing challenges in ensuring artificial intelligence
              benefits humanity.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-700 leading-relaxed">
              We organize workshops, reading groups, and research projects focused on AI safety,
              collaborate with leading organizations in the field, and create opportunities for
              students to engage with cutting-edge research in AI alignment.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
