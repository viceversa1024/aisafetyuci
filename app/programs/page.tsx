export default function Programs() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full bg-[#00386c]">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-0">Programs</h1>
            <p className="text-xl text-indigo-100 mb-8 pt-8">Alignment at every level.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-8 text-center">Our Programs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Intro Fellowship
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A comprehensive introduction to AI safety for students new to the field.
                Learn fundamental concepts, engage with key research papers, and build
                a foundation in AI alignment.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Weekly readings and discussions</li>
                <li>Introduction to alignment research</li>
                <li>Hands-on projects and exercises</li>
                <li>Mentorship from experienced researchers</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Fellowship
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Deep dive into cutting-edge AI safety research for experienced students.
                Conduct original research, collaborate on projects, and contribute to
                the field of AI alignment.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Advanced research topics</li>
                <li>Original research projects</li>
                <li>Collaboration with faculty</li>
                <li>Publication opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
