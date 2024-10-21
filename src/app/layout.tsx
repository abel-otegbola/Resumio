import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Topbar from "@/components/topbar/topbar";

const lato = Lato({ subsets: ['latin'], weight: ["400"] })

export const metadata: Metadata = {
  title: "Resumio",
  description: "Resume generator website application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased bg-dark text-white/[0.8]`}
      >
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
