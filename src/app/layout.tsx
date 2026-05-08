import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Bhuvana Teja Kanakam, Portfolio",
  description:
    "Software engineer, Incoming Grad at CMU. Projects, writing, and everything in between.",
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
