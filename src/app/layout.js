import { DM_Sans } from 'next/font/google'
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})



export const metadata = {
  title: "CoachSite – Life Coaching for Growth",
  description: "Unlock your full potential with personalized coaching sessions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
