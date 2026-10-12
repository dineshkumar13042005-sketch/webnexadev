import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "WebnexaDev | Websites, CRM Software & Digital Solutions",
  description:
    "WebnexaDev builds high-converting business websites, custom CRM software, e-commerce stores, and Meta Ads lead generation solutions that grow businesses.",
  keywords: [
    "WebnexaDev",
    "IT Services",
    "Web Development",
    "Custom Software",
    "CRM Software",
    "E-commerce Website",
    "Meta Ads Landing Page",
    "Business Website Development",
    "AI Automation",
    "Digital Solutions",
  ],
  authors: [{ name: "WebnexaDev" }],
  creator: "WebnexaDev",
  publisher: "WebnexaDev",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "WebnexaDev | Websites, CRM Software & Digital Solutions",
    description:
      "Your Digital Growth Partner — Websites, Software & Smart Business Solutions. Convert visitors into genuine project enquiries.",
    siteName: "WebnexaDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebnexaDev | Websites, CRM Software & Digital Solutions",
    description:
      "Your Digital Growth Partner — Websites, Software & Smart Business Solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] selection:bg-[#8B5CF6]/30 selection:text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
