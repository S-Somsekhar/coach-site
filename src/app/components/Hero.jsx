export default function Hero() {
  return (
    <section className="text-center py-30 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
        Unlock Your Full Potential
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
        Personalized life coaching to help you gain clarity, confidence, and control over your goals.
      </p>
      <a
        href="#cta"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition"
      >
        Schedule Your Free Call
      </a>
    </section>
  )
}
