export default function CTA() {
  return (
    <section id="cta" className="py-20 px-6 text-center bg-indigo-600 text-white">
      <h3 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h3>
      <p className="text-lg mb-6">Let&apos;s hop on a free discovery call and talk about your goals.</p>
      <a
        href="https://calendly.com/your-link" // TODO: Replace with real Calendly link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Book Your Free Call
      </a>
    </section>
  )
}
