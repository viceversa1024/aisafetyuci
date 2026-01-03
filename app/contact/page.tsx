export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Contact Us</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Interested in joining our community or learning more about our work?
              We'd love to hear from you!
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">contact@aisafetyuci.org</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">UC Irvine<br />Irvine, CA 92697</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                <p className="text-gray-700">Follow us on Twitter, Discord, and LinkedIn</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Mailing List</h2>
            <p className="text-gray-700 leading-relaxed">
              Stay updated on upcoming events, research opportunities, and news from AI Safety UCI.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
