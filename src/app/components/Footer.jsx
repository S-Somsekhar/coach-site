import Link from "next/link";
export default function Footer() {
  return (
 <footer className="py-4 px-6 text-center text-sm text-gray-500 bg-white border-t">
      <div>© {new Date().getFullYear()} CoachSite. All rights reserved.</div>
      <div className="mt-0 text-gray-400">
        Prototype by{" "}
        <Link
          href="https://sitenest.clientnesthq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-600 transition"
        >
          SiteNest
        </Link>
      </div>
    </footer>
  )
}
