import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arijit Konar | System Developer",
  description: "Portfolio of Arijit Konar - DevOps, AI/ML, and System Developer. Showcasing projects in Serverless, Cloud, and Full Stack development.",
  keywords: ["Arijit Konar", "Portfolio", "DevOps", "AI/ML", "System Developer", "Next.js", "React"],
  authors: [{ name: "Arijit Konar" }],
  creator: "Arijit Konar",
  openGraph: {
    title: "Arijit Konar | System Developer",
    description: "DevOps, AI/ML, and System Developer. Building scalable systems and intelligent applications.",
    url: "https://arijitkonar.com",
    siteName: "Arijit Konar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arijit Konar | System Developer",
    description: "DevOps, AI/ML, and System Developer. Building scalable systems and intelligent applications.",
    creator: "@arijitkonar",
  },
  robots: {
    index: true,
    follow: true,
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
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
