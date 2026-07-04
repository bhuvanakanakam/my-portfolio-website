import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhuvanakanakam.vercel.app"),
  title: "Bhuvana Teja Kanakam — Software Engineer",
  description:
    "Software engineer building backend systems, data platforms, and applied AI. Projects, writing, and everything in between.",
  openGraph: {
    title: "Bhuvana Teja Kanakam — Software Engineer",
    description:
      "Software engineer building backend systems, data platforms, and applied AI. Projects, writing, and everything in between.",
    url: "https://bhuvanakanakam.vercel.app",
    siteName: "Bhuvana Teja Kanakam",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhuvana Teja Kanakam — Software Engineer",
    description:
      "Software engineer building backend systems, data platforms, and applied AI.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="noise min-h-full flex flex-col bg-[#faf8f5]">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
