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
        </div>
      </div>
    </main>
  )
}
