export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Safety at UCI
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            A community at UCI working to reduce risk from advanced AI.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600">
              Our mission is to advance the understanding and development of interpretable and aligned artificial intelligence systems. We are dedicated to addressing the long-term risks and potential harms associated with AI, as we approach the possibility of artificial general intelligence (AGI). Recognizing the profound uniqueness of human intelligence and the existential risks posed by unchecked AI advancement, we commit ourselves to ensuring that AI technologies align with human values and contribute positively to society.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
