import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bibletimeline.app"
const defaultDescription =
  "Explore the sweep of God's redemptive history — from Creation to the New Covenant — with parallel world history and scholarly date perspectives."

export const metadata: Metadata = {
  title: "The Biblical Timeline",
  description: defaultDescription,
  openGraph: {
    title: "The Biblical Timeline",
    description: defaultDescription,
    url: siteUrl,
    siteName: "The Biblical Timeline",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "The Biblical Timeline",
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
