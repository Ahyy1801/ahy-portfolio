import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Cao Van Huy | Game Designer & Software Engineer",
    template: "%s | Cao Van Huy Portfolio"
  },
  description:
    "Game Designer, Game Developer & Software Engineer Portfolio. Specializing in Unity game development, C# programming, and leading tech communities at FPT University.",
  keywords: [
    "Game Designer",
    "Game Developer", 
    "Software Engineer",
    "Unity Developer",
    "C# Programming",
    "Java Developer",
    "FPT University",
    "JS Club Director",
    "Cao Van Huy",
    "Portfolio"
  ],
  authors: [{ name: "Cao Van Huy", url: "https://github.com/Ahyy1801" }],
  creator: "Cao Van Huy",
  publisher: "Cao Van Huy",
  metadataBase: new URL('https://your-domain.com'), // Replace with actual domain
  openGraph: {
    title: "Cao Van Huy - Game Designer & Software Engineer",
    description: "Specializing in Unity game development, C# programming, and tech leadership",
    url: "https://your-domain.com", // Replace with actual domain
    siteName: "Cao Van Huy Portfolio",
    images: [
      {
        url: "/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Cao Van Huy - Game Designer & Software Engineer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cao Van Huy - Game Designer & Software Engineer", 
    description: "Specializing in Unity game development, C# programming, and tech leadership",
    images: ["/profile-photo.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Add actual verification code
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
