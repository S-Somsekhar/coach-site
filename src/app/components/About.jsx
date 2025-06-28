export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-100 to-white py-10 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/coach.png"
          alt="Coach Portrait"
          className="rounded-xl shadow-md max-w-full md:max-w-sm"
        />
        <div>
          <h3 className="text-3xl font-bold text-indigo-700 mb-4">Meet Your Coach</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, I&apos;m Alex. I help people like you break through barriers and step confidently into their next chapter.
            With a blend of strategy, mindset, and accountability, I&apos;m here to guide you toward growth — personally and professionally.
          </p>
        </div>
      </div>
    </section>
  )
}
