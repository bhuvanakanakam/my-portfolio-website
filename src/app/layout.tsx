import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Bhuvana Teja Kanakam — Software Engineer",
  description:
    "Software engineer building backend systems, data platforms, and applied AI. Projects, writing, and everything in between.",
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
