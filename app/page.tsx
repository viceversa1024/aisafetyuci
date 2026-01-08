export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full">
        <div className="bg-[#00386c] shadow-sm">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">AI Safety at UCI</h1>
              <p className="text-xl text-indigo-100 mb-8">A community dedicated to reducing risk from advanced AI.</p>

              <div className="mt-6">
                <a
                  href="https://discord.gg/uENtNdDPPb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow"
                  aria-label="Join our Discord"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-4 mt-16">Our Mission</h2>
            <p className="text-lg text-gray-600 text-left leading-relaxed mb-8">
              We seek to advance the understanding and development of interpretable and aligned artificial intelligence systems. We are dedicated to addressing the long-term risks and potential harms associated with AI, as we approach the possibility of artificial general intelligence (AGI). Recognizing the profound uniqueness of human intelligence and the existential risks posed by unchecked AI advancement, we commit ourselves to ensuring that AI technologies align with human values and contribute positively to society.
            </p>
            <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-4 mt-16">What We Do</h2>
            <p className="text-lg text-gray-600 text-left leading-relaxed mb-8">
              Fellowships, reading groups, coworking, etc.
            </p>
          </div>

          <div className="mb-12 max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-8 text-center mt-16">
              Our Programs
            </h2>
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

          <div className="mb-12 max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#00386c] font-semibold text-gray-900 mb-8 text-center mt-16">
              Upcoming Events
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Weekly Reading Group</h3>
                      <p className="text-gray-600 mt-1">Discussion of recent AI safety research papers</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-[#00386c]">Fridays</p>
                      <p className="text-sm text-gray-500">5:00 PM - 6:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-600 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Fellowship Applications</h3>
                      <p className="text-gray-600 mt-1">Apply for Winter 2026 Intro & Advanced Fellowships</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-[#00386c]">Dec 15, 2025</p>
                      <p className="text-sm text-gray-500">Deadline</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-600 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Coworking Sessions</h3>
                      <p className="text-gray-600 mt-1">Collaborative work on AI safety projects</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-[#00386c]">Wednesdays</p>
                      <p className="text-sm text-gray-500">3:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://discord.gg/uENtNdDPPb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  View Full Calendar on Discord →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
