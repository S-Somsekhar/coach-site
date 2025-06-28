export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-indigo-50 py-20 px-6">
      <h3 className="text-5xl font-bold text-center text-indigo-700 mb-12">
        What Clients Are Saying
      </h3>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          {
            name: "Jessica M.",
            text: "Alex helped me completely reframe how I approach challenges. I feel more confident and focused than ever.",
          },
          {
            name: "Michael T.",
            text: "The coaching sessions brought clarity to my business goals. 10/10 would recommend.",
          },
          {
            name: "Priya R.",
            text: "I was stuck in overthinking. Now I have direction, and I’m taking real action every day.",
          },
        ].map(({ name, text }, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow text-gray-700 text-mid leading-relaxed hover:shadow-xl transition"
          >
            “{text}”
            <div className="mt-4 font-semibold text-indigo-600">{name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
