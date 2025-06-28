export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-700">CoachSite</h1>
      <ul className="flex gap-6 text-mid font-medium text-gray-700">
        <li><a href="#about" className="hover:text-indigo-600">About</a></li>
        <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
        <li><a href="#cta" className="hover:text-indigo-600">Book Call</a></li>
      </ul>
    </nav>
  )
}

